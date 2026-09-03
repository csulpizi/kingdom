import { Card, Rarity } from "../../game/card.js";
import { Game } from "../../game/game.js";

export class GoldLand extends Card {
    name = "Amber Fields";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    isLand = true;
    art = "amberfields";
    describe = "Gain 1 [GOLD]";
    async resolve(): Promise<void> {
        Game.gold++;
    }
}
