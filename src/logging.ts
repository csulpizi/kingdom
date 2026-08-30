import { coloredString, pretty } from "./pretty.js";

const element = document.getElementsByName("logs").item(0);
const logs: Array<string> = [];
const maxLogs = 50;

function appendLog(message: string) {
    logs.push(message);
    if (logs.length > maxLogs) {
        logs.shift();
    }
    redraw();
}

function redraw() {
    element.innerHTML =
        '<span class="green-text">Logs</span><br><span class="gray-text">---</span>';
    for (var log of logs) {
        element.innerHTML += "<br>" + log;
    }
}

export function log(message: string) {
    appendLog(pretty(message));
}

export function logError(message: string) {
    appendLog(coloredString(message, "red"));
}
