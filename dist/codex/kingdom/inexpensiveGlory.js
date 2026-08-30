import { Card } from "../../game/card.js";
import { Game } from "../../game/game.js";
export class InexpensiveGlory extends Card {
    name = "Coronation Feast";
    rarity = "kingdom";
    food = 4;
    gold = 4;
    describe = `Gain 1 [GLORY]`;
    burns = true;
    async resolve() {
        Game.gainGlory();
    }
}
//# sourceMappingURL=inexpensiveGlory.js.map