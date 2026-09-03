import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";

export class DiscoverTwo extends Card {
    name = "Imperialism";
    rarity: Rarity = "kingdom";
    food = 2;
    gold = 3;
    describe = `[DISCOVER] two [EXPANSION] cards. Add them both to your hand`;
    art = "imperialism";
    async resolve(): Promise<void> {
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
