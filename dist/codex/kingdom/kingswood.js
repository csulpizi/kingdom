import { Card } from "../../game/card.js";
import { Game } from "../../game/game.js";
const n = 3;
export class Kingswood extends Card {
    name = "Kingswood";
    rarity = "kingdom";
    food = 6;
    gold = 2;
    isLand = true;
    describe = `Gain 1 [GLORY]`;
    async resolve() {
        Game.gainGlory();
    }
}
//# sourceMappingURL=kingswood.js.map