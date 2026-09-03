import { Card, Rarity } from "../../game/card.js";
import { Game } from "../../game/game.js";

export class ExpensiveGlory extends Card {
    name = "Grand Tournament";
    rarity: Rarity = "kingdom";
    food = 3;
    gold = 7;
    describe = `Gain 1 [GLORY]`;
    async resolve(): Promise<void> {
        Game.gainGlory();
    }
    art = "tournament";
}
