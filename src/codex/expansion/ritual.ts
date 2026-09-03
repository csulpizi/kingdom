import { Card, Rarity } from "../../game/card.js";
import { Game } from "../../game/game.js";

const n = 5;
export class Ritual extends Card {
    name = "Mercenaries";
    rarity: Rarity = "expansion";
    food = 0;
    gold = 2;
    describe = `Gain ${n} [FOOD]`;
    art = "mercenaries";
    async resolve(): Promise<void> {
        Game.food += n;
    }
}
