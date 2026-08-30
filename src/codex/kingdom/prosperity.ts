import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";

const n = 3;
export class Prosperity extends Card {
    name = "Prosperity";
    rarity: Rarity = "kingdom";
    food = 0;
    gold = 3;
    describe = `Gain ${n} [FOOD]. Draw 2. Gain 1 [FARM]`;
    burns = true;
    async resolve(): Promise<void> {
        Game.food += n;
        Collection.draw(2);
        Game.gainFarm();
    }
}
