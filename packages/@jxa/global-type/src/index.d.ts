import {
    Application as Application_,
    ObjectSpecifier as ObjectSpecifier_,
    Automation as Automation_
} from "@jxa/types";

declare global {
    const Application: typeof Application_;
    const Automation: typeof Automation_;
    const ObjectSpecifier: typeof ObjectSpecifier_;

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
