import * as help from "../actions/helpMenu.js";
import * as inspect from "../actions/inspectDeck.js";
import { Collection } from "../game/collection.js";
import { gloryPointsToWin } from "../game/consts.js";
import { Game } from "../game/game.js";

const stats: Array<[string, () => number]> = [
    ["turn", () => Game.turn],
    ["food", () => Game.food],
    ["gold", () => Game.gold],
    ["farms", () => Game.farms],
    ["acres", () => Game.acres],
    ["deck", () => Collection.deck.length],
    ["graveyard", () => Collection.graveyard.length],
];

export function initialize() {
    inspect.initialize();
    help.initialize();
}

var stashedVisibility = false;
export function stash() {
    const statElement = <HTMLElement>document.getElementsByName("stats")[0];
    stashedVisibility = !statElement.hidden;
    statElement.hidden = true;
}

export function stashPop() {
    const statElement = <HTMLElement>document.getElementsByName("stats")[0];
    statElement.hidden = !stashedVisibility;
}

export function show() {
    const statElement = <HTMLElement>document.getElementsByName("stats")[0];
    statElement.hidden = false;
}

export function hide() {
    const statElement = <HTMLElement>document.getElementsByName("stats")[0];
    statElement.hidden = true;
}

export function refresh() {
    for (const [stat, getter] of stats) {
        const element = <HTMLElement>(
            document.getElementsByName("stat:" + stat)[0]
        );
        element.innerHTML = "" + getter();
    }
    const gloryElement = <HTMLElement>(
        document.getElementsByName("stat:glory")[0]
    );
    gloryElement.innerHTML =
        "⬤".repeat(Game.glory) + "○".repeat(gloryPointsToWin - Game.glory);
}
