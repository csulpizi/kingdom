import { Card, Rarity } from "../../game/card.js";
import { Game } from "../../game/game.js";

export class InexpensiveGlory extends Card {
    n = 2;
    name = "Coronation Feast";
    rarity: Rarity = "kingdom";
    food = 4;
    gold = 4;
    describe = `Gain ${this.n} [GLORY]`;
    burns = true;
    async resolve(): Promise<void> {
        Game.gainGlory(this.n);
    }
}
