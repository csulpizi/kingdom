import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
export class Harvest extends Card {
    name = "Harvest";
    rarity = "base";
    food = 2;
    gold = 0;
    describe = "Gain 1 [GOLD] per [LAND] in play";
    async resolve() {
        Game.gold += Collection.inPlay.length;
    }
}
//# sourceMappingURL=harvest.js.map