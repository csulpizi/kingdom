import { Card, Rarity } from "../../game/card.js";
import { Game } from "../../game/game.js";

const n = 4;
export class GainGold extends Card {
    name = "Symposium";
    rarity: Rarity = "expansion";
    food = 3;
    gold = 0;
    describe = `Gain ${n} [GOLD]`;
    art = "symposium";
    async resolve(): Promise<void> {
        Game.gold += n;
    }
}
