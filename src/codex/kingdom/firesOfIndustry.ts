import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
import { Prompt } from "../../prompt.js";

export class FiresOfIndustry extends Card {
    name = "Fires of Industry";
    rarity: Rarity = "kingdom";
    food = 3;
    gold = 0;
    art = "firesindustry";
    describe = `[BURN] two lands in play. Gain 1 [GLORY]`;
    protected gateKeep(): { playable: boolean; reason: string } {
        return {
            playable: Collection.inPlay.length >= 2,
            reason: "Not enough [LAND]s in play",
        };
    }
    async resolve(): Promise<void> {
        var prompt = new Prompt("Choose a [LAND] to [BURN]:");
        prompt.addInlineCards(
            Collection.inPlay,
            async (card) => {
                card.location = "burn";
            },
            undefined,
            true,
        );
        await prompt.invoke();
        prompt = new Prompt("Choose a second [LAND] to [BURN]:");
        prompt.addInlineCards(
            Collection.inPlay,
            async (card) => {
                card.location = "burn";
            },
            undefined,
            true,
        );
        await prompt.invoke();
        Game.gainGlory();
    }
}
