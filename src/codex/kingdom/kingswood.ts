import { Card, Rarity } from "../../game/card.js";
import { Game } from "../../game/game.js";

const n = 3;
export class Kingswood extends Card {
    name = "Kingswood";
    rarity: Rarity = "kingdom";
    food = 7;
    gold = 2;
    isLand = true;
    describe = `Gain 1 [GLORY]`;
    async resolve(): Promise<void> {
        Game.gainGlory();
    }
}
