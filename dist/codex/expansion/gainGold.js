import { Card } from "../../game/card.js";
import { Game } from "../../game/game.js";
const n = 4;
export class GainGold extends Card {
    name = "Symposium";
    rarity = "expansion";
    food = 3;
    gold = 0;
    describe = `Gain ${n} [GOLD]`;
    async resolve() {
        Game.gold += n;
    }
}
//# sourceMappingURL=gainGold.js.map