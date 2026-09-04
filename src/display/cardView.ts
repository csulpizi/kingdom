import { Card } from "../game/card.js";
import { pretty, nFood, nGold, dudSpan, greySpan } from "./pretty.js";

//FIXME: Display 'land'
export function cardElement(
    card: Card,
    isDud: boolean,
    dudReason: string,
    hotkey: string = "1",
) {
    const element = document.createElement("div");
    element.className = isDud ? "card-dud" : "card";
    for (const txt of [
        displayName(card),
        lineBreak,
        displayCost(card),
        lineBreak,
        displayDud(isDud, dudReason),
        displayLand(card),
        displayText(card),
        displayBurn(card),
    ]) {
        conditionalAddTextNode(element, txt);
    }
    element.style.backgroundImage = `url("images/${card.art}.png")`;
    element.setAttribute("rarityColor", card.rarity);

    const hotkeyElement = document.createElement("div");
    hotkeyElement.className = "hotkey";
    hotkeyElement.innerHTML = hotkey;
    element.appendChild(hotkeyElement);

    return element;
}

const lineBreak = "<br>";

function displayName(card: Card) {
    return `<span class="name-text">${card.name}</span>`;
}

function displayCost(card: Card) {
    return nFood(card.food) + nGold(card.gold);
}

function displayDud(isDud: boolean, dudReason: string): string {
    if (!isDud) return "";
    return dudSpan(`(${pretty(dudReason)})`) + lineBreak;
}

function displayLand(card: Card) {
    if (!card.isLand) return "";
    return pretty("[LAND]") + lineBreak;
}

function displayText(card: Card) {
    return `<span class="card-text">${pretty(card.describe)}</span>`;
}

function displayBurn(card: Card): string {
    return card.burns ? lineBreak + pretty("[BURN]s") : "";
}

function conditionalAddTextNode(element: Element, txt: string) {
    if (txt == "") return;
    const node = document.createElement("span");
    node.innerHTML = txt;
    element.appendChild(node);
}

//FIXME: Display 'land'
export function asInline(
    card: Card,
    isDud: boolean,
    dudReason: string,
): string {
    var s = "";
    if (isDud) s += `(${dudReason})`;
    s += displayName(card);
    s += " - ";
    s += displayCost(card);
    s += " - ";
    s += displayText(card);
    if (card.burns) {
        s += " - ";
        s += "[BURN]s";
    }

    return isDud ? greySpan(s) : s;
}
