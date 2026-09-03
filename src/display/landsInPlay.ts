import { Collection } from "../game/collection.js";
import { pretty } from "../pretty.js";
import { asInline } from "./cardView.js";

const display = document.getElementsByName("landsinplay").item(0);

export function clear() {
    display.innerHTML = "";
}

export function refresh() {
    clear();
    if (Collection.inPlay.length > 0) {
        const txt = document.createTextNode("Lands in play:");
        display.appendChild(txt);
    }
    for (const card of Collection.inPlay) {
        const item = document.createElement("div");
        item.className = "land-in-play";
        item.innerHTML = pretty(asInline(card, false, ""));
        item.style.backgroundImage = `url("images/${card.art}.png")`;
        display.appendChild(item);
    }
}
