import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
import { Prompt } from "../../prompt.js";
export class FiresOfIndustry extends Card {
    name = "Fires of Industry";
    rarity = "kingdom";
    food = 3;
    gold = 0;
    describe = `[BURN] two lands in play. Gain 1 [GLORY]`;
    gateKeep() {
        return {
            playable: Collection.inPlay.length >= 2,
            reason: "Not enough [LAND]s in play",
        };
    }
    async resolve() {
        var prompt = new Prompt("Choose a [LAND] to [BURN]:");
        prompt.addCards(Collection.inPlay, async (card) => {
            card.location = "burn";
        });
        await prompt.invoke();
        prompt = new Prompt("Choose a second [LAND] to [BURN]:");
        prompt.addCards(Collection.inPlay, async (card) => {
            card.location = "burn";
        });
        await prompt.invoke();
        Game.gainGlory();
    }
}
//# sourceMappingURL=firesOfIndustry.js.map