import { Collection } from "../game/collection.js";
import { Prompt } from "../prompt.js";

export function addCardActions(prompt: Prompt) {
    prompt.addFullscaleCards(
        Collection.hand,
        (card) => card.play(),
        (card) => {
            const { playable, reason } = card.canPlay();
            return { dud: !playable, reason };
        },
    );
}
