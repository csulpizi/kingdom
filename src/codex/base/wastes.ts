import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";

export class Wastes extends Card {
    name = "Barren Wastes";
    rarity: Rarity = "base";
    food = 1;
    gold = 0;
    isLand = true;
    art = "barren";
    describe = "<i>*crickets*</i>";
    async resolve(): Promise<void> {}
}
