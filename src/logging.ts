import { errorSpan, pretty } from "./pretty.js";

const element = document.getElementsByName("logs").item(0);
const maxLogs = 30;

function appendLog(message: string) {
    const log = document.createElement("div");
    log.className = "log-entry";
    log.innerHTML = message;
    element.appendChild(log);
    if (element.childElementCount > maxLogs) {
        element.children[0]?.remove();
    }
}

export function log(message: string) {
    appendLog(pretty(message));
}

export function logError(message: string) {
    appendLog(errorSpan(message));
}
