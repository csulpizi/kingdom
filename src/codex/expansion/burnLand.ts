import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
import { Prompt } from "../../prompt.js";

const n = 2;
export class BurnLand extends Card {
    name = "Strip Mines";
    rarity: Rarity = "expansion";
    food = 1;
    gold = 0;
    describe = `[BURN] a card in your hand. Gain ${n} [GOLD]`;
    isLand = true;
    gateKeep(): { playable: boolean; reason: string } {
        return {
            playable: Collection.hand.length > 1,
            reason: "You do not have any other cards in hand to [BURN]",
        };
    }
    async resolve(): Promise<void> {
        var prompt = new Prompt("Choose a card to [BURN]:");
        prompt.addCards(
            Collection.hand.filter((c) => c != this),
            async (card) => {
                card.location = "burn";
            },
        );
        await prompt.invoke();
        Game.gold += n;
    }
}
