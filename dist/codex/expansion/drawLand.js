import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
export class DrawLand extends Card {
    name = "Bustling Market";
    rarity = "expansion";
    food = 2;
    gold = 0;
    describe = `Draw a card`;
    isLand = true;
    async resolve() {
        Collection.draw();
    }
}
//# sourceMappingURL=drawLand.js.map