import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";

export class Draw extends Card {
    name = "Trade";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    describe = "Draw 2";
    async resolve(): Promise<void> {
        Collection.draw(2);
    }
}
