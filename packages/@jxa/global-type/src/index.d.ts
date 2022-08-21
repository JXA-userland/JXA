import type {
    Application,
    ObjectSpecifier,
    Automation
} from "@jxa/types";

declare global {
    const Application: typeof Application;
    const Automation: typeof Automation;
    const ObjectSpecifier: typeof ObjectSpecifier;

    function Path(name: string): object;

    /**
     * Pause for a fixed amount of time
     * @param delay the number of seconds to delay (default is 0)
     *
     */
    function delay(delay?: number): void;

    const ObjC: any;
    const $: any;
}
