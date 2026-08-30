import { Card } from "../../game/card.js";
import { Game } from "../../game/game.js";
export class Forge extends Card {
    name = "Tireless Forge";
    rarity = "expansion";
    food = 2;
    gold = 0;
    describe = `While in play, lose 1 [FOOD] and gain 1 [GOLD] at the start turn`;
    isLand = true;
    async resolve() { }
    turnStartWhileInPlay() {
        Game.food--;
        Game.gold++;
    }
}
//# sourceMappingURL=forge.js.map