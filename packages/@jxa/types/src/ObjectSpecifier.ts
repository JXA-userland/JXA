// https://qiita.com/zakuroishikuro/items/a7def965f49a2ab55be4#class-methods
export interface ObjectSpecifier {
    /**
     * Return tru if is it ObjectSpecifier's instance.
     */
    hasInstance(arg: any): boolean;

    /**
     * get ObjectSpecifier class name
     */
    classOf(arg: any): string;

    callAsFunction(): ObjectSpecifier;
}
