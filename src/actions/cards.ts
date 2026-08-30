import { Collection } from "../game/collection.js";
import { Prompt } from "../prompt.js";

export function addCardActions(prompt: Prompt) {
    prompt.addCards(
        Collection.hand,
        (card) => card.play(),
        (card) => card.canPlay(),
    );
}
