import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";

const nGold = 2;
const nDraw = 1;
export class taxPlus extends Card {
    name = "Tithes";
    rarity: Rarity = "expansion";
    food = 3;
    gold = 0;
    describe = `Gain ${nGold} [GOLD]. Draw ${nDraw}`;
    async resolve(): Promise<void> {
        Game.gold += nGold;
        Collection.draw(nDraw);
    }
    art = "tithes";
}
