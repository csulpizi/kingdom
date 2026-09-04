import { promptPlayerActions } from "./dist/actions/gameRouter.js";
import { Game } from "./dist/game/game.js";
import { gloryPointsToWin } from "./dist/game/consts.js";
import * as header from "./dist/display/header.js";
import * as landsInPlay from "./dist/display/landsInPlay.js";
import * as display from "./dist/display/display.js";
import * as codex from "./dist/codex/initialize.js";
import { showMainMenu } from "./dist/actions/mainMenu.js";
import { Prompt } from "./dist/prompt.js";
import { coloredName } from "./dist/display/pretty.js";

//FIXME
import { DeferredPromise } from "./dist/deferredPromise.js";
const d = new DeferredPromise();
d.resolve("Hello");
d.resolve("Goodbye");
var txt = document.createTextNode(await d.promise);
document.head.appendChild(txt);

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
display.showMessage(coloredName("<h3>YOU WIN!<br></h3>"));
display.showMessage("You won on turn " + Game.turn);

const replayPrompt = new Prompt("");
replayPrompt.addOption(
    "Play again",
    false,
    () => window.location.reload(),
    undefined,
);
await replayPrompt.invoke(false);
