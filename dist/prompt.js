import { waitForKeyPress } from "./input.js";
import { coloredString, pretty } from "./pretty.js";
import { noopPromise } from "./util.js";
const element = document.getElementsByName("prompts").item(0);
export class Prompt {
    message;
    options = [];
    constructor(message) {
        this.message = message;
    }
    addCards(cards, callback, enable) {
        for (var i = 0; i < cards.length; i++) {
            const card = cards[i];
            var playable = true;
            var reason = "";
            if (enable) {
                var tup = enable(card);
                playable = tup.playable;
                reason = tup.reason;
            }
            if (playable) {
                this.addOption((i + 1).toString(), card.toString(), () => callback(card));
            }
            else {
                this.addDud((i + 1).toString(), `(${pretty(reason)}) ${card.toString()}`);
            }
        }
    }
    addOption(key, describe, callback) {
        this.options.push({ key, describe, callback, enabled: true });
    }
    addDud(key, describe) {
        this.options.push({
            key,
            describe,
            callback: noopPromise,
            enabled: false,
        });
    }
    async invoke() {
        var keys = this.options
            .filter((obj) => obj.enabled)
            .map((obj) => obj.key);
        this.drawOptions();
        var pressedKey = await waitForKeyPress(keys);
        this.Clear();
        await this.options.find((obj) => obj.key == pressedKey)?.callback();
    }
    drawOptions() {
        var html = pretty(this.message) + "<br>";
        for (var { key, describe, enabled } of this.options) {
            var s = `${key} - ${describe}<br>`;
            if (!enabled) {
                s = coloredString(s, "gray");
            }
            html += s;
        }
        if (element) {
            element.innerHTML = html;
        }
    }
    Clear() {
        if (element) {
            element.innerHTML = "";
        }
    }
}
//# sourceMappingURL=prompt.js.map