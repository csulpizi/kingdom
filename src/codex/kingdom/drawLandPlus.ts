import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";

export class DrawLandPlus extends Card {
    name = "Thriving Port";
    rarity: Rarity = "kingdom";
    food = 2;
    gold = 0;
    describe = `Draw 2`;
    isLand = true;
    async resolve(): Promise<void> {
        Collection.draw(2);
    }
}
