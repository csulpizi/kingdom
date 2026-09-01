import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
import { Prompt } from "../../prompt.js";
import { noopPromise } from "../../util.js";

export class Expand extends Card {
    addCost = 2;
    name = "Expand";
    rarity: Rarity = "base";
    food = 2;
    gold = 2;
    describe = `[DISCOVER] an [EXPANSION] card. Spend ${this.addCost} more [GOLD]: add that card into your hand`;
    async resolve(): Promise<void> {
        var card = await Collection.discoverExpansionCards();
        if (card && Game.gold >= this.addCost) {
            var prompt = new Prompt(
                `Add the card to your hand for ${this.addCost}?:`,
            );
            prompt.addOption("1", "Yes", async () => {
                Game.gold -= this.addCost;
                if (card) {
                    card.location = "hand";
                }
            });
            prompt.addOption("2", "No", noopPromise);
            await prompt.invoke();
        }
    }
}
