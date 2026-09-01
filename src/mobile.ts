import { DeferredPromise } from "./deferredPromise.js";

var mobileFooter: Element | undefined;
export function initialize() {
    var element = document.getElementsByName("mobile-footer")[0];
    if (!element) {
        return;
    }
    if (isMobile()) {
        mobileFooter = element;
    } else {
        element.remove();
    }
}

export function waitForKeyPress(
    keys: Array<{ key: string; enabled: boolean }>,
): Promise<string> {
    const promise = new DeferredPromise<string>();
    for (const tup of keys) {
        drawButton(tup.key, tup.enabled, () => {
            promise.resolve(tup.key);
            clearButtons();
        });
    }
    return promise.promise;
}

export function waitForAnyKeyPress(): Promise<void> {
    const promise = new DeferredPromise<void>();
    drawButton("Ok", true, () => {
        promise.resolve();
        clearButtons();
    });
    return promise.promise;
}

function drawButton(char: string, enabled: boolean, resolve: () => void) {
    if (!mobileFooter) return;
    var button = document.createElement("div");
    button.className = "mobile-button-" + (enabled ? "enabled" : "disabled");
    //button.disabled = !enabled;
    //button.type = "button";
    if (enabled) button.addEventListener("click", (_) => resolve());

    var txt = document.createTextNode(char);
    button.appendChild(txt);

    mobileFooter.appendChild(button);
}

function clearButtons() {
    if (!mobileFooter) return;
    mobileFooter.innerHTML = "";
}

export function isMobile(): boolean {
    return window.matchMedia("(any-hover:none)").matches;
}
