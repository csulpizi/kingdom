import { DeferredPromise } from "./deferredPromise.js";

export async function addHotkeyListener(
    killSwitch: DeferredPromise<void>,
    hotkey: string,
    f: () => void,
) {
    const listener: (e: KeyboardEvent) => void = (e) => {
        if (e.key == hotkey) {
            killSwitch.resolve();
            f();
        }
    };
    document.addEventListener("keydown", listener);
    await killSwitch.promise;
    document.removeEventListener("keydown", listener);
}
