import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Prompt } from "../../prompt.js";

export class EminentDomain extends Card {
    name = "Eminent Domain";
    rarity: Rarity = "expansion";
    food = 2;
    gold = 3;
    art = "eminentdomain";
    describe = "Discard a [LAND] in play. [DISCOVER] a [KINGDOM] card";
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
        await Collection.discoverKingdomCards();
    }
}
