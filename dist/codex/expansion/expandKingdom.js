import { Card } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
import { Prompt } from "../../prompt.js";
import { noopPromise } from "../../util.js";
const addCost = 3;
export class ExpandKingdom extends Card {
    name = "Ascend";
    rarity = "expansion";
    food = 2;
    gold = 4;
    describe = `[DISCOVER] a [KINGDOM] card. Spend ${addCost} more [GOLD]: add that card into your hand`;
    async resolve() {
        var card = await Collection.discoverKingdomCards();
        if (card && Game.gold >= addCost) {
            var prompt = new Prompt(`Add the card to your hand for ${addCost}?:`);
            prompt.addOption("1", "Yes", async () => {
                Game.gold -= addCost;
                if (card) {
                    card.location = "hand";
                }
            });
            prompt.addOption("2", "No", noopPromise);
            await prompt.invoke();
        }
    }
}
//# sourceMappingURL=expandKingdom.js.map