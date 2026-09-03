import { DeferredPromise } from "./deferredPromise.js";
import { asInline } from "./display/cardView.js";
import {
    clear,
    showCards,
    showMessage,
    showOptions,
} from "./display/display.js";
import { Card } from "./game/card.js";

export class Prompt {
    private message: string;
    private deferred = new DeferredPromise<void>();
    private options: Array<{
        text: string;
        isDud: boolean;
        onClick: () => void;
    }> = [];
    private fullScalecards: Array<{
        card: Card;
        isDud: boolean;
        dudReason: string;
        onClick: () => void;
    }> = [];

    protected async resolve(promise: Promise<void>) {
        await promise;
        this.deferred.resolve();
    }

    constructor(message: string) {
        this.message = message;
    }

    draw() {
        clear();
        showMessage(this.message);
        showCards(this.fullScalecards);
        showOptions(this.options);
    }

    addOption(text: string, isDud: boolean, callback: () => Promise<void>) {
        const onClick: () => void = () => {
            const promise = callback();
            this.resolve(promise);
        };
        this.options.push({
            text,
            isDud,
            onClick,
        });
    }

    addInlineCards(
        cards: Array<Card>,
        callback: (card: Card) => Promise<void>,
        enable?: (card: Card) => { dud: boolean; reason: string },
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
            const onClick: () => void = () => {
                const promise = callback(card);
                this.resolve(promise);
            };
            this.options.push({
                text: asInline(card, isDud, dudReason),
                isDud,
                onClick,
            });
        }
    }

    addFullscaleCards(
        cards: Array<Card>,
        callback: (card: Card) => Promise<void>,
        enable?: (card: Card) => { dud: boolean; reason: string },
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
            const onClick: () => void = () => {
                const promise = callback(card);
                this.resolve(promise);
            };
            this.fullScalecards.push({ card, isDud, dudReason, onClick });
        }
    }

    async invoke(): Promise<void> {
        this.draw();
        return this.deferred.promise;
    }
}
