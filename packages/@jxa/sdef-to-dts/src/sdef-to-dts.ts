const parseXml = require('@rgrove/parse-xml');
const camelCaseLib = require('camelcase');
import { compile, JSONSchema } from 'json-schema-to-typescript'

const camelCase = (text: string) => {
    const camelCased = camelCaseLib(text);
    const UPPER_CASE = /([A-Z]{2,})/;
    const match = text.match(UPPER_CASE);
    if (match && match[1]) {
        return camelCased.replace(new RegExp(match[1], "i"), match[1]);
    }
    return camelCased;
};

const pascalCase = (text: string) => {
    const camelCased = camelCaseLib(text, { pascalCase: true });
    const UPPER_CASE = /([A-Z]{2,})/;
    const match = text.match(UPPER_CASE);
    if (match && match[1]) {
        return camelCased.replace(new RegExp(match[1], "i"), match[1]);
    }
    return camelCased;
};

export interface Node {
    type: string;

    [index: string]: any;
}

export interface RootNode extends Node {
    attributes: any;
    children: {
        type: string,
        children: RootNode;
        [index: string]: any
    }[];
}

export const isCommand = (node: Node): node is Command => {
    return node.name === "command";
};
export const isRecord = (node: Node): node is Record => {
    return node.name === "record-type";
};

export interface Command extends RootNode {
    name: "command";
}

export interface Record extends RootNode {
    name: "record";
}

export const convertType = (type: string, definedJSONSchemaList: JSONSchema[]): "number" | "string" | "boolean" | string => {
    switch (type) {
        case "text":
            return "string";
        case "number":
        case "integer":
            return "number";
        case "boolean":
            return "boolean";
        case "Any":
            return "any";
    }
    const otherType = pascalCase(type);
    // avoid to use undefined type
    const isTypeDefinedAsRecord = definedJSONSchemaList.some((schema) => {
        return schema.title === otherType;
    });
    return isTypeDefinedAsRecord ? otherType : "any";
};

export const createOptionalParameter = (name: string, parameters: Node[]): Promise<string | null> => {
    if (parameters.length === 0) {
        return Promise.resolve(null);
    }
    const propertyMap = parameters.map(param => {
        return {
            name: camelCase(param.attributes.name),
            description: param.attributes.description,
            type: param.attributes.type
        }
    });
    const properties: { [index: string]: any } = {};
    propertyMap.forEach(prop => {
        properties[prop.name] = {
            type: prop.type,
            description: prop.description
        }
    });
    const required = parameters.filter(param => {
        return param.attributes.optional === "yes"
    }).map(param => {
        return camelCase(param.attributes.name);
    });
    return compile({
        "title": name,
        "type": "object",
        "properties": properties,
        "additionalProperties": false,
        "required": required
    }, name)
};


export const recordToJSONSchema = (command: Record): JSONSchema => {
    // https://www.npmjs.com/package/json-schema-to-typescript
    const pascalCaseName = pascalCase(command.attributes.name);
    const description = command.attributes.description;
    const propertiesList = command.children.filter(node => {
        return node.type === "element" && node.name === "property" && typeof node.attributes === "object";
    });
    const propertyMap = propertiesList.map(param => {
        return {
            name: camelCase(param.attributes.name),
            description: param.attributes.description,
            type: param.attributes.type
        }
    });
    const properties: { [index: string]: any } = {};
    propertyMap.forEach(prop => {
        properties[prop.name] = {
            type: prop.type,
            description: prop.description
        }
    });
    const required = propertiesList.filter(param => {
        return param.attributes.optional === "yes"
    }).map(param => {
        return camelCase(param.attributes.name);
    });
    return {
        "title": pascalCaseName,
        "description": description,
        "type": "object",
        "properties": properties,
        "additionalProperties": false,
        "required": required
    }
};

export const recordToDeclare = async (name: string, record: Record): Promise<string> => {
    return compile(recordToJSONSchema(record), name)
};
export const commandToDeclare = async (command: Command, recordSchema: JSONSchema[]): Promise<string> => {
    // https://www.npmjs.com/package/json-schema-to-typescript
    const name = camelCase(command.attributes.name);
    const pascalCaseName = camelCaseLib(command.attributes.name, { pascalCase: true });
    const description = command.attributes.description;
    const directParameters = command.children.filter(node => {
        return node.type === "element" && node.name === "direct-parameter" && typeof node.attributes === "object";
    });
    const directParametersArgs = directParameters.map(param => {
        const optionalMark = param.attributes.optional === "yes" ? "?" : "";
        // TODO: support direct parameters as object
        if (param.attributes.type === undefined) {
            return `${camelCase(param.name)}${optionalMark}: {}`
        }
        const argType = convertType(param.attributes.type, recordSchema);
        return `${camelCase(param.name)}${optionalMark}: ${argType}`;
    });
    const directParametersDocs = directParameters.map(param => {
        return ` * @param ${camelCase(param.name)} ${param.attributes.description}`
    });
    const parameters = command.children.filter(node => {
        return node.type === "element" && node.name === "parameter" && typeof node.attributes === "object";
    });
    const optionalParameterTypeName = `${pascalCaseName}OptionalParameter`;
    const optionalParameterType = await createOptionalParameter(optionalParameterTypeName, parameters);
    const optionalParameters = optionalParameterType ? `option?: ${optionalParameterTypeName}` : "";
    const result = command.children.filter(node => {
        return node.type === "element" && node.name === "result";
    });
    const resultDescription = result.length === 0 ? "" : `@return ${result[0].attributes.description}`;
    const createReturnType = (result: Node[]) => {
        if (result.length === 0 || !result[0].attributes.type) {
            return "void";
        }
        const returnType = convertType(result[0].attributes.type, recordSchema);
        return returnType;
    };
    const returnType = createReturnType(result);
    if (name === "delete") {
        return `
${optionalParameterType ? optionalParameterType : ""}
/**
 * ${description}
${directParametersDocs.join("\n")}${resultDescription
            ? resultDescription :
            ""
            }
 */
declare function _${name}(${directParametersArgs.join(", ")}${optionalParameters.length > 0 ? ", " : ""}${optionalParameters}): ${returnType}
export { _${name} as ${name} };
`
    }
    return `
${optionalParameterType ? optionalParameterType : ""}
/**
 * ${description}
${directParametersDocs.join("\n")}
 * ${resultDescription}
 */
export declare function ${name}(${directParametersArgs.join(", ")}${directParametersArgs.length > 0 ? ", " : ""}${optionalParameters}): ${returnType}`
};

export const transform = async (sdefContent: string) => {
    const JSON = parseXml(sdefContent);
    const dictionary: RootNode = JSON.children[0];
    const suites = dictionary.children.filter(node => node.name === "suite");
    const commands: Command[] = [];
    const records: Record[] = [];
    suites.forEach(suite => {
        suite.children.forEach((node: Node) => {
            if (isCommand(node)) {
                commands.push(node);
            } else if (isRecord(node)) {
                records.push(node);
            }
        })
    });
    const recordSchema = records.map(record => {
        return recordToJSONSchema(record);
    });
    const recordDefinitions = await Promise.all(recordSchema.map(schema => {
        return compile(schema, schema.title!)
    }));
    const functionDefinitions = await Promise.all(commands.map(command => {
        return commandToDeclare(command, recordSchema);
    }));
    return `
// Records
${recordDefinitions.join("\n")}
// Functions
${functionDefinitions.join("\n")}
`;
};
