import { promptPlayerActions } from "./dist/actions/router.js";
import { Game } from "./dist/game/game.js";
import { gloryPointsToWin } from "./dist/game/consts.js";
import { Prompt } from "./dist/prompt.js";
import * as collection from "./dist/game/collection.js";
import * as header from "./dist/display/header.js";
import * as landsInPlay from "./dist/display/landsInPlay.js";
import * as display from "./dist/display/display.js";
import * as codex from "./dist/codex/initialize.js";

codex.initialize();

// fixme
const cards = [];

for (const card of collection.Collection.deck) {
    cards.push(card);
}
for (const card of collection.Collection.expansionPool) {
    cards.push(card);
}
for (const card of collection.Collection.kingdomPool) {
    cards.push(card);
}

const prompt = new Prompt("MSG");
prompt.addFullscaleCards(
    cards,
    (_) => {},
    () => {
        return { dud: false, reason: "hello" };
    },
);
await prompt.invoke();

Game.firstTurn();

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
display.showMessage("YOU WIN!");
display.showMessage("You won on turn " + Game.turn);
