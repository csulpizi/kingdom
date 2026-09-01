import { DeferredPromise } from "./deferredPromise.js";

export function waitForKeyPress(keys: Array<string>): Promise<string> {
    const abortController = new AbortController();
    const promise = new DeferredPromise<string>();
    document.addEventListener(
        "keydown",
        (e) => {
            if (keys.includes(e.key)) {
                promise.resolve(e.key);
                abortController.abort();
            }
        },
        { signal: abortController.signal },
    );
    return promise.promise;
}

export function waitForAnyKeyPress(): Promise<void> {
    const abortController = new AbortController();
    const promise = new DeferredPromise<void>();
    document.addEventListener(
        "keydown",
        (e) => {
            promise.resolve();
            abortController.abort();
        },
        { signal: abortController.signal },
    );
    return promise.promise;
}
