import { Card } from "../game/card.js";
import { pretty } from "./pretty.js";
import { cardElement } from "./cardView.js";

const mainDisplay = document.getElementsByName("maindisplay").item(0);
var transientDisplay = mainDisplay;

export function stash() {
    transientDisplay = <HTMLElement>mainDisplay.cloneNode();
    mainDisplay.parentElement?.appendChild(transientDisplay);
    mainDisplay.hidden = true;
    clear();
}

export function stashPop() {
    transientDisplay.remove();
    transientDisplay = mainDisplay;
    mainDisplay.hidden = false;
}

export function showMessage(txt: string) {
    const node = document.createElement("span");
    node.innerHTML = pretty(txt);
    transientDisplay.appendChild(node);
}

export function showOptions(
    options: Array<{ text: string; isDud: boolean; onClick: () => void }>,
) {
    const list = document.createElement("div");
    list.className = "option-list";

    for (const { text, isDud, onClick } of options) {
        const item = document.createElement("div");
        item.className = isDud ? "option-dud" : "option";
        item.innerHTML = pretty(text);
        if (!isDud) item.addEventListener("click", (_) => onClick());
        list.appendChild(item);
    }
    transientDisplay.appendChild(list);
}

export function showCards(
    cards: Array<{
        card: Card;
        isDud: boolean;
        dudReason: string;
        onClick: () => void;
    }>,
) {
    const list = document.createElement("div");
    list.className = "card-grid";

    for (const { card, isDud, dudReason, onClick } of cards) {
        const item = cardElement(card, isDud, dudReason);
        if (!isDud) item.addEventListener("click", (_) => onClick());
        list.appendChild(item);
    }
    transientDisplay.appendChild(list);
}

export function clear() {
    transientDisplay.innerHTML = "";
}
