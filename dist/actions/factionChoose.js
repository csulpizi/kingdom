import { factions } from "../codex/factions.js";
import { Game } from "../game/game.js";
export function addFactionChooseActions(prompt) {
    for (var tup of factions.entries()) {
        prompt.addOption(`${tup[0]}`, tup[1], async () => {
            Game.faction = tup[1];
        });
    }
}
//# sourceMappingURL=factionChoose.js.map