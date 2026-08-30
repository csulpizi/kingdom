import { Collection } from "../game/collection.js";
export function addCardActions(prompt) {
    prompt.addCards(Collection.hand, (card) => card.play(), (card) => card.canPlay());
}
//# sourceMappingURL=cards.js.map