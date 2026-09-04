import * as display from "../display/display.js";
import { Card } from "../game/card.js";
import { Collection } from "../game/collection.js";
import { Prompt } from "../prompt.js";
import * as header from "../display/header.js";
import * as lands from "../display/landsInPlay.js";
import * as help from "./helpMenu.js";

const showdeckbutton = <HTMLElement>(
    document.getElementsByName("showdeckbutton")[0]
);

export function initialize() {
    showdeckbutton.addEventListener("click", (_) => {
        if (enabled) inspectDeck();
    });
}

var enabled = true;
export function setVisibility(value: boolean) {
    showdeckbutton.style.visibility = value ? "visible" : "hidden";
    enabled = value;
}

async function inspectDeck() {
    display.stash();
    lands.stash();
    header.stash();

    header.show();

    setVisibility(false);
    help.setVisibility(false);

    showList("Cards in hand", Collection.hand);
    display.showMessage("<br>");
    showList("Lands in play", Collection.inPlay);
    display.showMessage("<br>");
    showList("Cards in deck", Collection.deck);
    display.showMessage("<br>");
    showList("Cards in graveyard", Collection.graveyard);
    display.showMessage("<br>");

    const prompt = new Prompt("");
    prompt.addOption("Back", false, async () => {});
    await prompt.invoke(false);

    setVisibility(true);
    help.setVisibility(true);
    display.stashPop();
    lands.stashPop();
    header.stashPop();
}

function showList(message: string, cards: Array<Card>) {
    if (cards.length == 0) {
        display.showMessage("No " + message.toLowerCase());
        display.showMessage("<br>");
    } else {
        display.showMessage(`${message} (${cards.length}):`);
        display.showCards(
            cards.map((card) => {
                return {
                    card,
                    isDud: false,
                    dudReason: "",
                    onClick: async () => {},
                    hotkey: undefined,
                };
            }),
        );
    }
}
