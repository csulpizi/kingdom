import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";

export class GoldDraw extends Card {
    name = "Draw Bridge";
    rarity: Rarity = "expansion";
    food = 0;
    gold = 1;
    describe = `Draw 2`;
    art = "golddraw";
    async resolve(): Promise<void> {
        Collection.draw(2);
    }
}
