import { Collection } from "./game/collection.js";
import { Game } from "./game/game.js";
import { coloredString } from "./pretty.js";
import { pretty } from "./pretty.js";

const element = document.getElementsByName("maindisplay").item(0);

class MainDisplayObj {
    showDefaultHud() {
        this.clearContent();
        this.writeLine(coloredString(`Turn ${Game.turn}`, "cyan"));
        this.writeLine(coloredString(`---`, "gray"));
        this.writeLine(coloredString(`Farms: ${Game.farms}`, "farm"));
        this.writeLine(coloredString(`Acres: ${Game.acres}`, "farm"));
        this.writeLine(coloredString(`Glory: ${Game.glory}`, "glory"));
        this.writeLine(coloredString(`---`, "gray"));
        this.writeLine(coloredString(`Gold: ${Game.gold}`, "gold"));
        this.writeLine(coloredString(`Food: ${Game.food}`, "food"));
        this.writeLine(coloredString(`---`, "gray"));
        this.writeLine(
            `Cards in hand (${Collection.hand.length}): ${Collection.hand.map((c) => c.name).join(", ")}`,
        );
        this.writeLine(
            `Lands in play (${Collection.inPlay.length}): ${Collection.inPlay.map((c) => c.name).join(", ")}`,
        );
        this.writeLine(`Cards in deck: ${Collection.deck.length}`);
        this.writeLine(`Cards in graveyard: ${Collection.graveyard.length}`);
        this.writeLine(coloredString(`---`, "gray"));
        this.writeLine("");
        this.writeLine("");
    }

    writeLine(message: string) {
        element.innerHTML += "<br>" + pretty(message);
    }

    clearContent() {
        element.innerHTML = "";
    }
}

export const MainDisplay = new MainDisplayObj();
