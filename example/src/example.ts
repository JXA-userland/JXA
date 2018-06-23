import "@jxa/global-type";
import { run } from "@jxa/run";

/**
 * get safari version
 * This function execute JXA code
 */
export const safariVersion = () => {
    return run(() => {
        const Safari = Application("Safari");
        return Safari.version();
    });
};

/**
 * get current mac system user
 * This function execute JXA code
 */
export const currentUserName = () => {
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
