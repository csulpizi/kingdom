import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Prompt } from "../../prompt.js";

export class Draw extends Card {
    name = "Trade";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    describe = "Discard a card. Draw 2";
    gateKeep(): { playable: boolean; reason: string } {
        return {
            playable: Collection.hand.length > 1,
            reason: "You do not have any other cards in hand to discard",
        };
    }
    async resolve(): Promise<void> {
        var prompt = new Prompt("Choose a card to discard:");
        prompt.addCards(
            Collection.hand.filter((c) => c != this),
            async (card) => {
                card.location = "graveyard";
            },
        );
        await prompt.invoke();
        Collection.draw(2);
    }
}
