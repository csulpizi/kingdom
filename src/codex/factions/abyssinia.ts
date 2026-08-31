import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
import { Prompt } from "../../prompt.js";
import { Faction } from "../factions.js";

export class Abyssinia extends Faction {
    name = "Abyssinia";
    describe = `Nothing`;
    spawnStarterCards(): Array<Card> {
        return [new RitualLand(), new SacLandForGold()];
    }
}

class RitualLand extends Card {
    name = "Tax";
    rarity: Rarity = "base";
    food = 0;
    gold = 1;
    describe = "Gain 2 [FOOD].";
    isLand = true;
    async resolve(): Promise<void> {
        Game.food += 2;
    }
}

class SacLandForGold extends Card {
    name = "Expropriate";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    describe = "Discard a [LAND] in play. Gain 2 [GOLD]";
    isLand = true;
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
        Collection.draw(2);
    }
}
