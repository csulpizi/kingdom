import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Prompt } from "../../prompt.js";
export class BurnDraw extends Card {
    name = "Pilgrimage";
    rarity = "expansion";
    food = 1;
    gold = 0;
    describe = `[BURN] a card in your hand. Draw 2`;
    gateKeep() {
        return {
            playable: Collection.hand.length > 1,
            reason: "You do not have any other cards in hand to [BURN]",
        };
    }
    async resolve() {
        var prompt = new Prompt("Choose a card to [BURN]:");
        prompt.addCards(Collection.hand.filter((c) => c != this), async (card) => {
            card.location = "burn";
        });
        await prompt.invoke();
        Collection.draw(2);
    }
}
//# sourceMappingURL=burnDraw.js.map