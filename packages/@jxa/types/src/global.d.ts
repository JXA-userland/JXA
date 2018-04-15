import * as ApplicationGroup from "./Application";

declare global {
    const Application: typeof ApplicationGroup & object;

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
