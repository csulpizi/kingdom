import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Prompt } from "../../prompt.js";
export class EminentDomain extends Card {
    name = "Eminent Domain";
    rarity = "expansion";
    food = 2;
    gold = 3;
    describe = "Discard a [LAND] in play. [DISCOVER] a [KINGDOM] card";
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
        await Collection.discoverKingdomCards();
    }
}
//# sourceMappingURL=eminentDomain.js.map