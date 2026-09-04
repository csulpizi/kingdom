import { Collection } from "../game/collection.js";
import { Prompt } from "../prompt.js";
import { endTurnAction } from "./endturn.js";

export async function promptPlayerActions(): Promise<void> {
    var prompt = new Prompt("Choose an action:");
    addCardActions(prompt);
    prompt.addOption("End turn", false, endTurnAction, "e");
    await prompt.invoke();
}

function addCardActions(prompt: Prompt) {
    prompt.addFullscaleCards(
        Collection.hand,
        (card) => card.play(),
        (card) => {
            const { playable, reason } = card.canPlay();
            return { dud: !playable, reason };
        },
        true,
    );
}
