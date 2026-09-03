import { Prompt } from "../prompt.js";
import { addCardActions } from "./cards.js";
//import { describeAction } from "./describe.js";
import { endTurnAction } from "./endturn.js";
//import { helpAction } from "./help.js";

export async function promptPlayerActions(): Promise<void> {
    var prompt = new Prompt("Choose an action:");
    addCardActions(prompt);
    //  prompt.addOption("d", "Describe board state", describeAction);
    //prompt.addOption("h", "Rules", helpAction);
    prompt.addOption("End turn", false, endTurnAction);
    await prompt.invoke();
}
