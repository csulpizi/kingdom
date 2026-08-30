import { Card } from "../../game/card.js";
import { Game } from "../../game/game.js";
export class GoldLand extends Card {
    name = "Amber Fields";
    rarity = "base";
    food = 2;
    gold = 0;
    isLand = true;
    describe = "Gain 1 [GOLD]";
    async resolve() {
        Game.gold++;
    }
}
//# sourceMappingURL=goldLand.js.map