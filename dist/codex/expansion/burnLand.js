import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
import { Prompt } from "../../prompt.js";
const n = 2;
export class BurnLand extends Card {
    name = "Strip Mines";
    rarity = "expansion";
    food = 1;
    gold = 0;
    describe = `[BURN] a card in your hand. Gain ${n} [GOLD]`;
    isLand = true;
    gateKeep() {
        return {
            playable: Collection.hand.length > 1,
            reason: "You do not have any other cards in hand to [BURN]",
        };
    }
    async resolve() {
        var prompt = new Prompt("Choose a card to [BURN]:");
        prompt.addCards(Collection.hand.filter((c) => c != this), async (card) => {
            card.location = "burn";
        });
        await prompt.invoke();
        Game.gold += n;
    }
}
//# sourceMappingURL=burnLand.js.map