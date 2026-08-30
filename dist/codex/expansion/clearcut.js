import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
import { Prompt } from "../../prompt.js";
export class Clearcut extends Card {
    name = "Clearcut";
    rarity = "expansion";
    food = 2;
    gold = 0;
    describe = `[BURN] a [LAND] in play. Gain 1 [FARM]`;
    gateKeep() {
        return {
            playable: Collection.inPlay.length > 0,
            reason: "No [LAND]s in play",
        };
    }
    async resolve() {
        var prompt = new Prompt("Choose a [LAND] to [BURN]:");
        prompt.addCards(Collection.inPlay, async (card) => {
            card.location = "burn";
        });
        await prompt.invoke();
        Game.gainFarm();
    }
}
//# sourceMappingURL=clearcut.js.map