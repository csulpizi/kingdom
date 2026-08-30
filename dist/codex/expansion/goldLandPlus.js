import { Card } from "../../game/card.js";
import { Game } from "../../game/game.js";
export class GoldLandPlus extends Card {
    name = "Bountiful Mountains";
    rarity = "expansion";
    food = 3;
    gold = 0;
    isLand = true;
    describe = "Gain 2 [GOLD]";
    async resolve() {
        Game.gold += 2;
    }
}
//# sourceMappingURL=goldLandPlus.js.map