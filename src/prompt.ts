import { DeferredPromise } from "./deferredPromise.js";
import { asInline } from "./display/cardView.js";
import {
    clear as clearDisplay,
    showCards,
    showMessage,
    showOptions,
} from "./display/display.js";
import { Card } from "./game/card.js";
import { addHotkeyListener } from "./hotkeys.js";

export class Prompt {
    private message: string;
    private deferred = new DeferredPromise<() => Promise<void>>();
    private options: Array<{
        text: string;
        isDud: boolean;
        onClick: () => void;
        hotkey: string | undefined;
    }> = [];
    private fullScaleCards: Array<{
        card: Card;
        isDud: boolean;
        dudReason: string;
        onClick: () => void;
        hotkey: string | undefined;
    }> = [];

    constructor(message: string) {
        this.message = message;
    }

    private draw() {
        showMessage(this.message);
        showCards(this.fullScaleCards);
        showOptions(this.options);
    }

    addOption(
        text: string,
        isDud: boolean,
        callback: () => Promise<void>,
        hotkey: string | undefined = undefined,
    ) {
        const onClick = () => this.deferred.resolve(callback);
        this.options.push({
            text,
            isDud,
            onClick,
            hotkey,
        });
    }

    addInlineCards(
        cards: Array<Card>,
        callback: (card: Card) => Promise<void>,
        enable?: (card: Card) => { dud: boolean; reason: string },
        showHotKeys: boolean = false,
    ) {
        for (var i = 0; i < cards.length; i++) {
            const card = <Card>cards[i];
            var isDud = false;
            var dudReason = "";
            if (enable) {
                var tup = enable(card);
                isDud = tup.dud;
                dudReason = tup.reason;
            }
            const onClick = () => this.deferred.resolve(() => callback(card));
            const hotkey = showHotKeys ? i + 1 + "" : undefined;
            this.options.push({
                text: asInline(card, isDud, dudReason),
                isDud,
                onClick,
                hotkey,
            });
        }
    }

    addFullscaleCards(
        cards: Array<Card>,
        callback: (card: Card) => Promise<void>,
        enable?: (card: Card) => { dud: boolean; reason: string },
        showHotKeys: boolean = false,
    ) {
        for (var i = 0; i < cards.length; i++) {
            const card = <Card>cards[i];
            var isDud = false;
            var dudReason = "";
            if (enable) {
                var tup = enable(card);
                isDud = tup.dud;
                dudReason = tup.reason;
            }
            const hotkey = showHotKeys ? i + 1 + "" : undefined;
            const onClick = () => this.deferred.resolve(() => callback(card));
            this.fullScaleCards.push({
                card,
                isDud,
                dudReason,
                onClick,
                hotkey,
            });
        }
    }

    private addHotkeyListeners(): void {
        for (const { hotkey, onClick, isDud } of this.options) {
            if (hotkey && !isDud) {
                addHotkeyListener(this.deferred.promise, onClick, hotkey);
            }
        }
        for (const { hotkey, onClick, isDud } of this.fullScaleCards) {
            if (hotkey && !isDud) {
                addHotkeyListener(this.deferred.promise, onClick, hotkey);
            }
        }
    }

    async invoke(clear: boolean = true): Promise<void> {
        if (clear) clearDisplay();
        this.draw();
        this.addHotkeyListeners();
        const callback = await this.deferred.promise;
        await callback();
    }
}
