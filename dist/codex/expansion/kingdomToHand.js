import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
export class KingdomToHand extends Card {
    name = "Revolution";
    rarity = "expansion";
    food = 2;
    gold = 4;
    burns = true;
    describe = `[DISCOVER] a [KINGDOM] card and add it to your hand`;
    async resolve() {
        var card = await Collection.discoverKingdomCards();
        if (card) {
            card.location = "hand";
        }
    }
}
//# sourceMappingURL=kingdomToHand.js.map