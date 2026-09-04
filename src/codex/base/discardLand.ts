import { Card, Rarity } from "../../game/card.js";
import { Collection } from "../../game/collection.js";
import { Game } from "../../game/game.js";
import { Prompt } from "../../prompt.js";

export class DiscardLand extends Card {
    private n = 2;
    name = "Migration";
    rarity: Rarity = "base";
    food = 2;
    gold = 0;
    describe = `Discard a [LAND] in play. Gain ${this.n} [GOLD]`;
    art = "migration";
    protected gateKeep(): { playable: boolean; reason: string } {
        return {
            playable: Collection.inPlay.length > 0,
            reason: "No [LAND]s in play",
        };
    }
    async resolve(): Promise<void> {
        var prompt = new Prompt("Choose a [LAND] to discard:");
        prompt.addInlineCards(
            Collection.inPlay,
            async (card) => {
                card.location = "graveyard";
            },
            undefined,
            true,
        );
        await prompt.invoke();
        Game.gold += this.n;
    }
}
