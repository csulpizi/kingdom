import { Card, Rarity } from "../../game/card.js";
import { Game } from "../../game/game.js";

export class GoldLandPlus extends Card {
    name = "Bountiful Mountains";
    rarity: Rarity = "expansion";
    food = 3;
    gold = 0;
    isLand = true;
    describe = "Gain 2 [GOLD]";
    art = "mountains";
    async resolve(): Promise<void> {
        Game.gold += 2;
    }
}
