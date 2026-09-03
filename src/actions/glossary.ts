import { coloredName } from "../display/pretty.js";
import * as display from "../display/display.js";
import { gloryPointsToWin } from "../game/consts.js";
import { Prompt } from "../prompt.js";

export async function showKeywords() {
    display.clear();
    display.showMessage(coloredName("<h2>Glossary</h2>"));

    const lines: Array<string> = [
        "[GOLD] -&#9;Resource used to pay for cards",
        "[FOOD] -&#9;Resource used to pay for cards. [FOOD] expires at the end of each turn",
        "[FARM] -&#9;How much [FOOD] you generate each turn",
        "[ACRE] -&#9;At the start of each turn, convert 1 [ACRE] into 1 [FARM]",
        `[GLORY] -&#9;When you gain ${gloryPointsToWin} [GLORY], you win.`,
        "",
        "[LAND] -&#9;[LAND] cards stay in play when you play them. Certain cards discard or [BURN] lands in play",
        "[BURN] -&#9;Cards that are [BURN]ed are permanently removed from the game",
        "",
        "[EXPANSION] -&#9;[EXPANSION] cards are cards that are more powerful than your starting cards",
        "[KINGDOM] -&#9;[KINGDOM] cards are even more powerful than [EXPANSION] cards",
        "[DISCOVER] -&#9;Whenever you [DISCOVER] either [EXPANSION] cards or [KINGDOM] cards, looking at 2 options, choose 1, and put it into your graveyard",
        "",
    ];
    display.showMessage(lines.join("<br>"));

    const prompt = new Prompt("");
    prompt.addOption("Continue", false, async () => {});
    await prompt.invoke(false);
}
