import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Prompt } from "../../prompt.js";

export class InnovateLandDiscard extends Card {
    name = "Deforestation";
    rarity: Rarity = "expansion";
    food = 2;
    gold = 0;
    describe =
        "Discard a [LAND] in play. [DISCOVER] an [EXPANSION] card and add it to your hand";
    art = "deforest";
    protected gateKeep(): { playable: boolean; reason: string } {
        return {
            playable: Collection.inPlay.length > 0,
            reason: "No [LAND]s in play",
        };
    }
    async resolve(): Promise<void> {
        var prompt = new Prompt("Choose a [LAND] to discard:");
        prompt.addInlineCards(Collection.inPlay, async (card) => {
            card.location = "graveyard";
        });
        await prompt.invoke();
        var card = await Collection.discoverExpansionCards();
        if (card) {
            card.location = "hand";
        }
    }
}
