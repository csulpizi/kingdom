import { Collection } from "../game/collection.js";
import { pretty } from "./pretty.js";
import { asInline } from "./cardView.js";

const header = document.getElementsByName("landsinplayheader").item(0);
const grid = document.getElementsByName("landsinplaygrid").item(0);
var stashedVisibility = false;

export function stash() {
    clearNoStash();
}

export function stashPop() {
    if (stashedVisibility) refresh();
}

function clearNoStash() {
    header.innerHTML = "";
    grid.innerHTML = "";
}

export function clear() {
    clearNoStash();
    stashedVisibility = false;
}

export function refresh() {
    clear();
    stashedVisibility = true;
    if (Collection.inPlay.length > 0) {
        const txt = document.createTextNode("Lands in play:");
        header.appendChild(txt);
    }
    for (const card of Collection.inPlay) {
        const item = document.createElement("div");
        item.className = "land-in-play";
        item.innerHTML = pretty(asInline(card, false, ""));
        item.style.backgroundImage = `url("images/${card.art}.png")`;
        grid.appendChild(item);
    }
}
