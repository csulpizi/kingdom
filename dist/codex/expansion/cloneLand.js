import { Card } from "../../game/card.js";
export class CloneLand extends Card {
    name = "Frontier Town";
    rarity = "expansion";
    food = 2;
    gold = 0;
    describe = `Put a copy of this [LAND] into play`;
    isLand = true;
    async resolve() {
        this.clone().location = "inplay";
    }
}
//# sourceMappingURL=cloneLand.js.map