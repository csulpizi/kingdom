import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
import { Prompt } from "../../prompt.js";
import { noopPromise } from "../../util.js";

export function commonStarters(): Array<Card> {
    return [new Tax(), new Draw(), new Expand(), new GoldLand(), new Harvest()];
}

class Tax extends Card {
    name = "Tax";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    describe = "Gain 1 [GOLD]. Draw 1";
    async resolve(): Promise<void> {
        Game.gold++;
        Collection.draw();
    }
}

class Draw extends Card {
    name = "Trade";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    describe = "Draw 2";
    async resolve(): Promise<void> {
        Collection.draw(2);
    }
}

class Expand extends Card {
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

class GoldLand extends Card {
    name = "Amber Fields";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    isLand = true;
    describe = "Gain 1 [GOLD]";
    async resolve(): Promise<void> {
        Game.gold++;
    }
}

class Harvest extends Card {
    name = "Harvest";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    describe = "Gain 1 [GOLD] per [LAND] in play";
    async resolve(): Promise<void> {
        Game.gold += Collection.inPlay.length;
    }
}
