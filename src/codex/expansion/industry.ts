import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Prompt } from "../../prompt.js";

export class Industry extends Card {
    name = "Logging Roads";
    rarity: Rarity = "expansion";
    food = 1;
    gold = 0;
    describe = "Discard a [LAND] in play. Draw 2";
    art = "logging";
    protected gateKeep(): { playable: boolean; reason: string } {
        return {
            playable: Collection.inPlay.length > 0,
            reason: "No [LAND]s in play",
        };
    }
    async resolve(): Promise<void> {
        var prompt = new Prompt("Choose a [LAND] to discard:");
        prompt.addInlineCards(
            Collection.inPlay,
            async (card) => {
                card.location = "graveyard";
            },
            undefined,
            true,
        );
        await prompt.invoke();
        Collection.draw(2);
    }
}
