import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
const nGold = 2;
const nDraw = 1;
export class taxPlus extends Card {
    name = "Tithes";
    rarity = "expansion";
    food = 3;
    gold = 0;
    describe = `Gain ${nGold} [GOLD]. Draw ${nDraw}`;
    async resolve() {
        Game.gold += nGold;
        Collection.draw(nDraw);
    }
}
//# sourceMappingURL=taxPlus.js.map