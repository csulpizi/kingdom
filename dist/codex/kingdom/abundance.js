import { Card } from "../../game/card.js";
import { Game } from "../../game/game.js";
const n = 8;
export class Abundance extends Card {
    name = "Abundance";
    rarity = "kingdom";
    food = 0;
    gold = 2;
    burns = true;
    describe = `Gain ${n} [FOOD].`;
    async resolve() {
        Game.food += n;
    }
}
//# sourceMappingURL=abundance.js.map