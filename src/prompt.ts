import { Card } from "./game/card.js";
import { waitForKeyPress } from "./input.js";
import { coloredString, pretty } from "./pretty.js";
import { noopPromise } from "./util.js";

const element = document.getElementsByName("prompts").item(0);

export class Prompt {
    message: string;
    options: Array<{
        key: string;
        describe: string;
        enabled: boolean;
        callback: () => Promise<void>;
    }> = [];

    constructor(message: string) {
        this.message = message;
    }

    addCards(
        cards: Array<Card>,
        callback: (card: Card) => Promise<void>,
        enable?: (card: Card) => { playable: boolean; reason: string },
    ) {
        for (var i = 0; i < cards.length; i++) {
            const card = <Card>cards[i];
            var playable = true;
            var reason = "";
            if (enable) {
                var tup = enable(card);
                playable = tup.playable;
                reason = tup.reason;
            }
            if (playable) {
                this.addOption((i + 1).toString(), card.toString(), () =>
                    callback(card),
                );
            } else {
                this.addDud(
                    (i + 1).toString(),
                    `(${pretty(reason)}) ${card.toString()}`,
                );
            }
        }
    }

    addOption(key: string, describe: string, callback: () => Promise<void>) {
        this.options.push({ key, describe, callback, enabled: true });
    }

    addDud(key: string, describe: string) {
        this.options.push({
            key,
            describe,
            callback: noopPromise,
            enabled: false,
        });
    }

    async invoke(): Promise<void> {
        var keys: Array<{ key: string; enabled: boolean }> = this.options.map(
            (obj) => {
                return { key: obj.key, enabled: obj.enabled };
            },
        );
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

        for (var { key, describe, enabled } of this.options) {
        }
    }

    Clear() {
        if (element) {
            element.innerHTML = "";
        }
    }
}
