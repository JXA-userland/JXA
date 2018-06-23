import "@jxa/global-type";
import { run } from "@jxa/run";

/**
 * get safari version
 */
export const safariVersion = () => {
    // This function is JXA
    return run(() => {
        const Safari = Application("Safari");
        return Safari.version();
    });
};

/**
 * get current mac system user
 */
export const currentUserName = () => {
    // This function is JXA
    return run(() => {
        const sys = Application("System Events");
        return sys.currentUser().name();
    });
};

// This main is just a Node.js code
export const example = async () => {
    const version = await safariVersion();
    const userName = await currentUserName();
    return `User: ${userName}, Safari: ${version}`;
};
