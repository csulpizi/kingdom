import { promptPlayerActions } from "./dist/actions/router.js";
import { Game } from "./dist/game/game.js";
import { gloryPointsToWin } from "./dist/game/consts.js";
import { Prompt } from "./dist/prompt.js";
import * as header from "./dist/display/header.js";
import * as landsInPlay from "./dist/display/landsInPlay.js";
import * as display from "./dist/display/display.js";
import * as codex from "./dist/codex/initialize.js";

codex.initialize();

var gameStarted = false;
var message = "Welcome";
while (!gameStarted) {
    const introPrompt = new Prompt(message);
    introPrompt.addOption("Start game", false, () => {
        gameStarted = true;
    });
    introPrompt.addOption("How to play", false, () => {
        message = "not implemented yet sorry";
    });
    introPrompt.addOption("Glossary", false, () => {
        message = "not implemented yet sorry";
    });
    introPrompt.addOption("Show all cards", false, () => {
        message = "not implemented yet sorry";
    });

    await introPrompt.invoke();
}

Game.firstTurn();
header.show();
while (Game.glory < gloryPointsToWin) {
    header.refresh();
    landsInPlay.refresh();
    try {
        await promptPlayerActions();
    } catch (e) {
        console.error(e);
    }
}
landsInPlay.clear();
header.refresh();
display.clear();
display.showMessage("YOU WIN!<br>");
display.showMessage("You won on turn " + Game.turn);
