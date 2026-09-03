/*import { Card } from "../game/card.js";
import { Collection } from "../game/collection.js";
import { waitForAnyKeyPress } from "../input.js";
import { MainDisplay } from "../mainDisplay.js";
import { coloredString } from "../pretty.js";

export async function describeAction() {
    MainDisplay.clearContent();
    MainDisplay.writeLine(coloredString("Explorer", "cyan"));
    MainDisplay.writeLine(coloredString("---", "gray"));
    describePile("Cards in hand:", "Your hand is empty", Collection.hand);
    for (var card of Collection.hand) {
        var { playable, reason } = card.canPlay();
        if (playable) continue;
        MainDisplay.writeLine(
            coloredString(`(You cannot play ${card.name}: ${reason})`, "gray"),
        );
    }
    MainDisplay.writeLine("");

    describePile("[LAND]s in play:", "No [LAND]s in play", Collection.inPlay);
    MainDisplay.writeLine("");

    describePile("Cards in deck:", "No cards in deck", Collection.deck);
    MainDisplay.writeLine("");

    describePile(
        "Cards in graveyard:",
        "No cards in graveyard",
        Collection.graveyard,
    );
    MainDisplay.writeLine("");

    describePile("Cards in [EXPANSION] pool:", "", Collection.expansionPool);
    MainDisplay.writeLine("");

    describePile("Cards in [KINGDOM] pool:", "", Collection.kingdomPool);
    MainDisplay.writeLine("");

    MainDisplay.writeLine("Press any key to return");
    await waitForAnyKeyPress();
}

function describePile(header: string, emptyHeader: string, cards: Array<Card>) {
    if (cards.length > 0) {
        MainDisplay.writeLine(header);
        MainDisplay.writeLine("<ul>");
        for (var card of cards) {
            MainDisplay.writeLine(`<li>${card.toString()}</li>`);
        }
        MainDisplay.writeLine("</ul>");
    } else {
        MainDisplay.writeLine(emptyHeader);
    }
}
*/
