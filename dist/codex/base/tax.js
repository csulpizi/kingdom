import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
export class Tax extends Card {
    name = "Tax";
    rarity = "base";
    food = 2;
    gold = 0;
    describe = "Gain 1 [GOLD]. Draw 1";
    async resolve() {
        Game.gold++;
        Collection.draw();
    }
}
//# sourceMappingURL=tax.js.map