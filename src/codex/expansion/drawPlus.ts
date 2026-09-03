import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";

export class DrawPlus extends Card {
    name = "Galleons";
    rarity: Rarity = "expansion";
    food = 3;
    gold = 0;
    describe = "Draw 3";
    art = "galleons";
    async resolve(): Promise<void> {
        Collection.draw(3);
    }
}
