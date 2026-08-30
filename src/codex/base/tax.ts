import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";

export class Tax extends Card {
    name = "Tax";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    describe = "Gain 1 [GOLD]. Draw 1";
    async resolve(): Promise<void> {
        Game.gold++;
        Collection.draw();
    }
}
