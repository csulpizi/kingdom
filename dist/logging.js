import { coloredString, pretty } from "./pretty.js";
const element = document.getElementsByName("logs").item(0);
const logs = [];
const maxLogs = 50;
function appendLog(message) {
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
export function log(message) {
    appendLog(pretty(message));
}
export function logError(message) {
    appendLog(coloredString(message, "red"));
}
//# sourceMappingURL=logging.js.map