import { Prompt } from "../prompt.js";
import { showKeywords } from "./glossary.js";
import { showHowToPlay } from "./howToPlay.js";
import * as display from "../display/display.js";
import * as lands from "../display/landsInPlay.js";
import * as header from "../display/header.js";
import * as inspect from "./inspectDeck.js";

const helpButton = <HTMLElement>document.getElementsByName("helpbutton")[0];

export function initialize() {
    helpButton.addEventListener("click", (_) => {
        if (enabled) showHelpMenu();
    });
}

var enabled = true;
export function setVisibility(value: boolean) {
    helpButton.style.visibility = value ? "visible" : "hidden";
    enabled = value;
}

async function showHelpMenu() {
    setVisibility(false);
    inspect.setVisibility(false);
    display.stash();
    lands.stash();
    header.stash();

    var exit = false;
    header.hide();
    while (!exit) {
        display.clear();
        const introPrompt = new Prompt("");
        introPrompt.addOption("How to play", false, async () => {
            await showHowToPlay();
        });
        introPrompt.addOption("Glossary", false, async () => {
            await showKeywords();
        });
        introPrompt.addOption("Back", false, async () => {
            exit = true;
        });
        await introPrompt.invoke(false);
    }

    setVisibility(true);
    inspect.setVisibility(true);
    display.stashPop();
    lands.stashPop();
    header.stashPop();
}
