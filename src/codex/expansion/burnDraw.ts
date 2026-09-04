import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Prompt } from "../../prompt.js";

export class BurnDraw extends Card {
    name = "Pilgrimage";
    rarity: Rarity = "expansion";
    food = 1;
    gold = 0;
    describe = `[BURN] a card in your hand. Draw 2`;
    gateKeep(): { playable: boolean; reason: string } {
        return {
            playable: Collection.hand.length > 1,
            reason: "You do not have any other cards in hand to [BURN]",
        };
    }
    art = "pilgrimage";
    async resolve(): Promise<void> {
        var prompt = new Prompt("Choose a card to [BURN]:");
        prompt.addInlineCards(
            Collection.hand.filter((c) => c != this),
            async (card) => {
                card.location = "burn";
            },
            undefined,
            true,
        );
        await prompt.invoke();
        Collection.draw(2);
    }
}
