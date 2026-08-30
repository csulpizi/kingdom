import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Prompt } from "../../prompt.js";
export class Industry extends Card {
    name = "Logging Roads";
    rarity = "base";
    food = 1;
    gold = 0;
    describe = "Discard a [LAND] in play. Draw 2";
    gateKeep() {
        return {
            playable: Collection.inPlay.length > 0,
            reason: "No [LAND]s in play",
        };
    }
    async resolve() {
        var prompt = new Prompt("Choose a [LAND] to discard:");
        prompt.addCards(Collection.inPlay, async (card) => {
            card.location = "graveyard";
        });
        await prompt.invoke();
        Collection.draw(2);
    }
}
//# sourceMappingURL=industry.js.map