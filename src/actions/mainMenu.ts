import { Prompt } from "../prompt.js";
import { showKeywords } from "./glossary.js";
import { showHowToPlay } from "./howToPlay.js";
import { previewCodex } from "./previewCodex.js";
import * as display from "../display/display.js";

export async function showMainMenu() {
    var gameStarted = false;
    while (!gameStarted) {
        display.clear();
        display.showMessage(
            `<img class="main-menu-img" src="images/mainmenu.png"><br>`,
        );
        const introPrompt = new Prompt("");
        introPrompt.addOption("Start game", false, async () => {
            gameStarted = true;
        });
        introPrompt.addOption("How to play", false, async () => {
            await showHowToPlay();
        });
        introPrompt.addOption("Glossary", false, async () => {
            await showKeywords();
        });
        introPrompt.addOption("Show all cards", false, async () => {
            await previewCodex();
        });

        await introPrompt.invoke(false);
    }
}
