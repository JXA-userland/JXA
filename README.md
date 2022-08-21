# JXA [![Actions Status: test](https://github.com/JXA-userland/JXA/workflows/test/badge.svg)](https://github.com/JXA-userland/JXA/actions?query=workflow%3A"test")

JavaScript for Automation(JXA) packages. 

[![auto complete example](./packages/@jxa/global-type/docs/example.gif)](./packages/@jxa/global-type)

## Features

- Integration JXA with [TypeScript](https://www.typescriptlang.org/index.html)
- Run JXA from [Node.js](https://nodejs.org/)
    - See [@jxa/run](./packages/@jxa/run) and [@jxa/repl](./packages/@jxa/repl)
- Support Auto complete for editor/IDE via [TypeScript](https://www.typescriptlang.org/index.html) definition file(`.d.ts`)
    - See [@jxa/types](./packages/@jxa/types) and [@jxa/global-type](./packages/@jxa/global-type)

## Packages

- [@jxa/run](./packages/@jxa/run)
- [@jxa/repl](./packages/@jxa/repl)
- [@jxa/types](./packages/@jxa/types)
- [@jxa/global-type](./packages/@jxa/global-type)
- [@jxa/sdef-to-dts](./packages/@jxa/sdef-to-dts)

## Example

If you want to improve your editor for JXA, use [@jxa/global-type](./packages/@jxa/global-type).
You can just import `@jxa/global-type` and you can introduce typing and auto complete for JXA.

:memo: Your editor should support TypeScript. For more details, see [TypeScript Editor Support](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support)


```ts
// Your .ts file require @jxa/global-type
import "@jxa/global-type";

// your JXA application
const userName = Application("System Events").currentUser().name();
```

If you want to run JXA from Node.js, use [@jxa/run](./packages/@jxa/run).

```ts
import "@jxa/global-type";
import { run } from "@jxa/run";
export const currentUserName = () => {
    // This callback function is run as JXA
    return run(() => {
        const sys = Application("System Events");
        return sys.currentUser().name();
    });
};

// Main code is Node.js
export const example = async () => {
    const userName = await currentUserName();
    return `User: ${userName}`;
};
```

For more details, see [example/](./example/).

## Contributing

Issue and PR is always welcome!

For more details, see [CONTRIBUTING guide](./CONTRIBUTING.md).

