import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Prompt } from "../../prompt.js";

export class EminentDomain extends Card {
    name = "Eminent Domain";
    rarity: Rarity = "expansion";
    food = 2;
    gold = 3;
    describe = "Discard a [LAND] in play. [DISCOVER] a [KINGDOM] card";
    protected gateKeep(): { playable: boolean; reason: string } {
        return {
            playable: Collection.inPlay.length > 0,
            reason: "No [LAND]s in play",
        };
    }
    async resolve(): Promise<void> {
        var prompt = new Prompt("Choose a [LAND] to discard:");
        prompt.addCards(Collection.inPlay, async (card) => {
            card.location = "graveyard";
        });
        await prompt.invoke();
        await Collection.discoverKingdomCards();
    }
}
