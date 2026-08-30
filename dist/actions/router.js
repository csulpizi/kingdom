import { Prompt } from "../prompt.js";
import { addCardActions } from "./cards.js";
import { describeAction } from "./describe.js";
import { endTurnAction } from "./endturn.js";
import { helpAction } from "./help.js";
export async function promptPlayerActions() {
    var prompt = new Prompt("Choose an action:");
    addCardActions(prompt);
    prompt.addOption("a", "Describe board state", describeAction);
    prompt.addOption("s", "Help", helpAction);
    prompt.addOption("e", "End turn", endTurnAction);
    await prompt.invoke();
}
//# sourceMappingURL=router.js.map