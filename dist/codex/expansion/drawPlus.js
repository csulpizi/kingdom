import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
export class DrawPlus extends Card {
    name = "Galleons";
    rarity = "expansion";
    food = 3;
    gold = 0;
    describe = "Draw 3";
    async resolve() {
        Collection.draw(3);
    }
}
//# sourceMappingURL=drawPlus.js.map