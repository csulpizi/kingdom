import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";

export class DrawLand extends Card {
    name = "Bustling Market";
    rarity: Rarity = "expansion";
    food = 2;
    gold = 0;
    describe = `Draw a card`;
    isLand = true;
    art = "bustlingmarket";
    async resolve(): Promise<void> {
        Collection.draw();
    }
}
