import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";

export class KingdomToHand extends Card {
    name = "Revolution";
    rarity: Rarity = "expansion";
    food = 2;
    gold = 4;
    burns = true;
    describe = `[DISCOVER] a [KINGDOM] card and add it to your hand`;
    art = "revolution";
    async resolve(): Promise<void> {
        var card = await Collection.discoverKingdomCards();
        if (card) {
            card.location = "hand";
        }
    }
}
