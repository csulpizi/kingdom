import { promptPlayerActions } from "./dist/actions/gameRouter.js";
import { Game } from "./dist/game/game.js";
import { gloryPointsToWin } from "./dist/game/consts.js";
import * as header from "./dist/display/header.js";
import * as landsInPlay from "./dist/display/landsInPlay.js";
import * as display from "./dist/display/display.js";
import * as codex from "./dist/codex/initialize.js";
import { showMainMenu } from "./dist/actions/mainMenu.js";

codex.initialize();
header.initialize();

await showMainMenu();

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
