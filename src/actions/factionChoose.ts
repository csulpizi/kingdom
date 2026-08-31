import { factions } from "../codex/factions.js";
import { Game } from "../game/game.js";
import { Prompt } from "../prompt.js";

export function addFactionChooseActions(prompt: Prompt) {
    for (var tup of factions.entries()) {
        prompt.addOption(`${tup[0] + 1}`, tup[1].toString(), async () => {
            Game.faction = tup[1];
        });
    }
}
