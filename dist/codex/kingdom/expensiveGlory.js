import { Card } from "../../game/card.js";
import { Game } from "../../game/game.js";
export class ExpensiveGlory extends Card {
    name = "Grand Tournament";
    rarity = "kingdom";
    food = 3;
    gold = 7;
    describe = `Gain 1 [GLORY]`;
    async resolve() {
        Game.gainGlory();
    }
}
//# sourceMappingURL=expensiveGlory.js.map