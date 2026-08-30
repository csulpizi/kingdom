import { Card, Rarity } from "../../game/card.js";
import { Game } from "../../game/game.js";

export class InexpensiveGlory extends Card {
    name = "Coronation Feast";
    rarity: Rarity = "kingdom";
    food = 4;
    gold = 4;
    describe = `Gain 1 [GLORY]`;
    burns = true;
    async resolve(): Promise<void> {
        Game.gainGlory();
    }
}
