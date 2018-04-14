import { StandardAdditions } from "./core/StandardAdditions";

export = Application;
export as namespace Application;

/**
 * bundle ID or name or path or remote machine
 */
declare function Application<T = any>(
    name: string
): typeof Application & Application._StandardAdditions & Application.AnyValue;
/**
 * process ID
 */
declare function Application<T = any>(
    id: number
): typeof Application & Application._StandardAdditions & Application.AnyValue;

declare namespace Application {
    export interface _StandardAdditions extends StandardAdditions {}

    export interface AnyValue {
        [index: string]: any;

        [index: number]: any;
    }

    /**
     * Return current app
     */
    export function currentApplication(): typeof Application & Application._StandardAdditions & Application.AnyValue;

    /**
     * It should be true if you use StandardAdditions
     */
    export var includeStandardAdditions: boolean;
    // Add OS X 10.11
    // https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-11.html#//apple_ref/doc/uid/TP40014508-CH110-SW1
    export function id(): number;

    export function name(): string;

    /**
     * Return true if the app is running
     * @returns {boolean}
     */
    export function running(): boolean;

    /**
     * active the app
     */
    export function activate(): void;

    /**
     * quit the app
     */
    export function quit(): void;

    /**
     * launch the app
     */
    export function launch(): void;

    // https://qiita.com/zakuroishikuro/items/a7def965f49a2ab55be4
    /**
     * get command names
     */
    export function commandsOfClass(): string[];

    /**
     * get element names
     */
    export function elementsOfClass(className: string): string[];

    /**
     * get property names
     */
    export function propertiesOfClass(className: string): string[];

    /**
     * get parent object name
     * @param {string} className
     * @returns {string}
     */
    export function parentOfClass(className: string): string;

    // https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW1
    export interface ApplicationWindow {
        [index: string]: any;
    }

    export interface ApplicationWindows {
        [index: number]: ApplicationWindow;

        [index: string]: ApplicationWindow;

        at(index: number): ApplicationWindow;

        byName(name: string): ApplicationWindow;

        byId(id: number): ApplicationWindow;
    }
}
