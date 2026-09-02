import { Card, Rarity } from "../../game/card.js";

export class CloneLand extends Card {
    name = "Frontier Town";
    rarity: Rarity = "expansion";
    food = 3;
    gold = 0;
    describe = `Put a copy of this [LAND] into play`;
    isLand = true;
    async resolve(): Promise<void> {
        this.clone().location = "inplay";
    }
}
