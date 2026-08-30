import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
export class DrawLandPlus extends Card {
    name = "Thriving Port";
    rarity = "kingdom";
    food = 2;
    gold = 0;
    describe = `Draw 2`;
    isLand = true;
    async resolve() {
        Collection.draw(2);
    }
}
//# sourceMappingURL=drawLandPlus.js.map