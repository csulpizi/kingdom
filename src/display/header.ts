import { gloryPointsToWin } from "../game/consts.js";
import { Game } from "../game/game.js";

const stats: Array<[string, () => number]> = [
    ["turn", () => Game.turn],
    ["food", () => Game.food],
    ["gold", () => Game.gold],
    ["farms", () => Game.farms],
    ["acres", () => Game.acres],
];

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
