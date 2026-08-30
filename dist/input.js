import { DeferredPromise } from "./deferredPromise.js";
export function waitForKeyPress(keys) {
    const abortController = new AbortController();
    const promise = new DeferredPromise();
    document.addEventListener("keydown", (e) => {
        if (keys.includes(e.key)) {
            promise.resolve(e.key);
            abortController.abort();
        }
    }, { signal: abortController.signal });
    return promise.promise;
}
export function waitForAnyKeyPress() {
    const abortController = new AbortController();
    const promise = new DeferredPromise();
    document.addEventListener("keydown", (e) => {
        promise.resolve(e.key);
        abortController.abort();
    }, { signal: abortController.signal });
    return promise.promise;
}
//# sourceMappingURL=input.js.map