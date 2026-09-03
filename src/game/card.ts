import { Game } from "./game.js";
import { log as log } from "../display/logging.js";
import { coloredName } from "../display/pretty.js";
import { globalCount } from "../util.js";
import { Collection } from "./collection.js";
import * as header from "../display/header.js";
import * as landsinplay from "../display/landsInPlay.js";

export abstract class Card {
    abstract name: string;
    private location_: Location = "reserve";
    private locationChangedIndex_ = 0;
    abstract rarity: Rarity;
    abstract food: number;
    abstract gold: number;
    abstract describe: string;
    abstract art: string;
    burns: boolean = false;
    isLand: boolean = false;

    get location(): Location {
        return this.location_;
    }
    set location(val) {
        if (val == "burn") log("[BURN]ing " + coloredName(this.name));
        if (val == "graveyard" && this.location == "hand")
            log("Discarding " + coloredName(this.name));
        if (this.location_ != val) this.locationChangedIndex_ = globalCount();
        this.location_ = val;
    }

    get order(): number {
        return this.locationChangedIndex_;
    }

    protected abstract resolve(): Promise<void>;
    turnStartWhileInPlay() {}
    protected gateKeep(): { playable: boolean; reason: string } {
        return { playable: true, reason: "" };
    }

    canPlay(): { playable: boolean; reason: string } {
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
        header.refresh(); // refresh to show updated resources
        landsinplay.clear(); // for future actions related to this card, hide the lands in play
        await this.resolve();
        if (this.isLand) this.location = "inplay";
        else if (this.burns) this.location = "burn";
        else this.location = "graveyard";
    }

    clone(): Card {
        const clone = new (Object.getPrototypeOf(this).constructor)();
        Collection.add(clone);
        return clone;
    }
}

export type Rarity = "base" | "expansion" | "kingdom";
export type Location =
    | "reserve"
    | "hand"
    | "deck"
    | "graveyard"
    | "inplay"
    | "burn"
    | "stack";
