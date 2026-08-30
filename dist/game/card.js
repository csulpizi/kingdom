import { Game } from "./game.js";
import { log as log } from "../logging.js";
import { coloredName, nFood, nGold, pretty } from "../pretty.js";
import { globalCount } from "../util.js";
import { MainDisplay } from "../mainDisplay.js";
import { Collection } from "./collection.js";
export class Card {
    location_ = "reserve";
    locationChangedIndex_ = 0;
    burns = false;
    isLand = false;
    get location() {
        return this.location_;
    }
    set location(val) {
        if (val == "burn")
            log("[BURN]ing " + coloredName(this.name));
        if (val == "graveyard" && this.location == "hand")
            log("Discarding " + coloredName(this.name));
        this.locationChangedIndex_ = globalCount();
        this.location_ = val;
    }
    get order() {
        return this.locationChangedIndex_;
    }
    turnStartWhileInPlay() { }
    gateKeep() {
        return { playable: true, reason: "" };
    }
    canPlay() {
        var gateKeep = this.gateKeep() ?? { playable: true, reason: "" };
        if (gateKeep.playable) {
            if (Game.gold < this.gold)
                return { playable: false, reason: "Not enough [GOLD]" };
            if (Game.food < this.food)
                return { playable: false, reason: "Not enough [FOOD]" };
        }
        return gateKeep;
    }
    async play() {
        log("Playing " + coloredName(this.name));
        this.location = "stack";
        Game.gold -= this.gold;
        Game.food -= this.food;
        MainDisplay.showDefaultHud(); // refresh to show updated resources
        await this.resolve();
        if (this.isLand)
            this.location = "inplay";
        else if (this.burns)
            this.location = "burn";
        else
            this.location = "graveyard";
    }
    clone() {
        const clone = new (Object.getPrototypeOf(this).constructor)();
        Collection.add(clone);
        return clone;
    }
    toString() {
        const landEmbed = this.isLand ? " ([LAND])" : "";
        const costEmbed = nFood(this.food) +
            (this.food > 0 && this.gold > 0 ? " " : "") +
            nGold(this.gold);
        const burnEmbed = this.burns ? " - [BURN]" : "";
        return pretty(`${coloredName(this.name)}${landEmbed} - ${costEmbed} - ${this.describe}${burnEmbed}`);
    }
}
//# sourceMappingURL=card.js.map