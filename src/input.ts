import {
    isMobile,
    waitForKeyPress as mobileKey,
    waitForAnyKeyPress as mobileAny,
} from "./mobile.js";
import {
    waitForKeyPress as desktopKey,
    waitForAnyKeyPress as desktopAny,
} from "./desktop.js";

export function waitForKeyPress(
    keys: Array<{ key: string; enabled: boolean }>,
): Promise<string> {
    if (isMobile()) return mobileKey(keys);
    return desktopKey(keys.map((tup) => tup.key));
}

export function waitForAnyKeyPress(): Promise<void> {
    if (isMobile()) return mobileAny();
    return desktopAny();
}
