import { Card, Rarity } from "../../game/card.js";
import { Game } from "../../game/game.js";

const n = 8;
export class Abundance extends Card {
    name = "Abundance";
    rarity: Rarity = "kingdom";
    food = 0;
    gold = 2;
    burns = true;
    art = "abundance";
    describe = `Gain ${n} [FOOD].`;
    async resolve(): Promise<void> {
        Game.food += n;
    }
}
