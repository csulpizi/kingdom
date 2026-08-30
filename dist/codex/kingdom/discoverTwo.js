import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
export class DiscoverTwo extends Card {
    name = "Imperialism";
    rarity = "kingdom";
    food = 2;
    gold = 3;
    describe = `[DISCOVER] two [EXPANSION] cards. Add them both to your hand`;
    async resolve() {
        var card = await Collection.discoverExpansionCards();
        if (card) {
            card.location = "hand";
        }
        card = await Collection.discoverExpansionCards();
        if (card) {
            card.location = "hand";
        }
    }
}
//# sourceMappingURL=discoverTwo.js.map