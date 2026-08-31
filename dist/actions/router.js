import { Prompt } from "../prompt.js";
import { addCardActions } from "./cards.js";
import { describeAction } from "./describe.js";
import { endTurnAction } from "./endturn.js";
import { helpAction } from "./help.js";
import { addFactionChooseActions } from "./factionChoose.js";
import { Game } from "../game/game.js";
export async function promptPlayerActions() {
    var prompt = new Prompt("Choose an action:");
    addCardActions(prompt);
    prompt.addOption("d", "Describe board state", describeAction);
    prompt.addOption("e", "End turn", endTurnAction);
    prompt.addOption("h", "Help", helpAction);
    await prompt.invoke();
}
export async function promptChooseFaction() {
    while (!Game.faction) {
        var prompt = new Prompt("Choose a faction:");
        addFactionChooseActions(prompt);
        prompt.addOption("h", "Help", helpAction);
        await prompt.invoke();
    }
}
//# sourceMappingURL=router.js.map