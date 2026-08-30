import { promptPlayerActions } from "./dist/actions/router.js";
import { Game } from "./dist/game/game.js";
import { gloryPointsToWin } from "./dist/game/consts.js";
import { MainDisplay } from "./dist/mainDisplay.js";
import { coloredString } from "./dist/pretty.js";
import { waitForAnyKeyPress } from "./dist/input.js";
import { initialize } from "./dist/codex/initialize.js"; // FORCE inclusion of cards

await waitForAnyKeyPress();

initialize();
Game.firstTurn();

while (Game.glory < gloryPointsToWin) {
    MainDisplay.showDefaultHud();
    try {
        await promptPlayerActions();
    } catch (e) {
        console.error(e);
        MainDisplay.writeLine(coloredString(e, "red"));
        MainDisplay.writeLine("Press any key to continue");
        await waitForAnyKeyPress();
    }
}
MainDisplay.showDefaultHud();
MainDisplay.writeLine("YOU WIN!");
MainDisplay.writeLine("You won on turn " + Game.turn);
