import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";

export class Harvest extends Card {
    name = "Harvest";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    describe = "Gain 1 [GOLD] per [LAND] in play";
    art = "harvest";
    protected gateKeep(): { playable: boolean; reason: string } {
        return {
            playable: Collection.inPlay.length > 0,
            reason: "No [LAND]s in play",
        };
    }
    async resolve(): Promise<void> {
        Game.gold += Collection.inPlay.length;
    }
}
