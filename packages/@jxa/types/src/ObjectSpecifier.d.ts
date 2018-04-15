export = ObjectSpecifier;
export as namespace ObjectSpecifier;

// https://qiita.com/zakuroishikuro/items/a7def965f49a2ab55be4#class-methods
declare namespace ObjectSpecifier {
    /**
     * Return tru if is it ObjectSpecifier's instance.
     */
    export function hasInstance(arg: any): boolean;

    /**
     * get ObjectSpecifier class name
     */
    export function classOf(arg: any): string;

    export function callAsFunction(): typeof ObjectSpecifier;
}
