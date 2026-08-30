import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
export class Draw extends Card {
    name = "Trade";
    rarity = "base";
    food = 2;
    gold = 0;
    describe = "Draw 2";
    async resolve() {
        Collection.draw(2);
    }
}
//# sourceMappingURL=draw.js.map