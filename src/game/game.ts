import {
    startingAcres,
    startingGold,
    startingFarms,
    startingHand,
    gloryPointsToWin,
} from "./consts.js";
import { log } from "../display/logging.js";
import { Collection } from "./collection.js";
import { turnString } from "../display/pretty.js";

const state = {
    food: 0,
    gold: startingGold,
    acres: startingAcres,
    farms: startingFarms,
    glory: 0,
    turn: 1,
};

class GameObj {
    get food(): number {
        return state.food;
    }
    get gold(): number {
        return state.gold;
    }
    get acres(): number {
        return state.acres;
    }
    get farms(): number {
        return state.farms;
    }
    get glory(): number {
        return state.glory;
    }
    get turn(): number {
        return state.turn;
    }
    set food(val) {
        var diff = val - state.food;
        if (diff > 0) log(`+${diff} [FOOD]`);
        if (diff < 0) log(`${diff} [FOOD]`);
        state.food = val;
    }
    set gold(val) {
        var diff = val - state.gold;
        if (diff > 0) log(`+${diff} [GOLD]`);
        if (diff < 0) log(`${diff} [GOLD]`);
        state.gold = val;
    }

    expireFood() {
        if (state.food > 0) {
            log(`${this.food} unused [FOOD] expired`);
            this.food = 0;
        }
    }

    convertFarmland() {
        if (this.acres > 0) {
            state.acres--;
            state.farms++;
            log("Converted 1 [ACRE] into 1 [FARM]");
        }
    }

    gainGlory(n: number = 1) {
        log(`+${n} [GLORY]`);
        state.glory = Math.min(state.glory + n, gloryPointsToWin);
    }

    gainFarm() {
        log(`+1 [FARM]`);
        state.farms++;
    }

    incTurn() {
        state.turn++;
        log(turnString(`Turn ${this.turn}`));
    }

    firstTurn() {
        log(turnString(`Turn ${this.turn}`));
        Collection.draw(startingHand);
        this.food = this.farms;
    }

    async endTurn() {
        Game.expireFood();
        Game.incTurn();
        Collection.draw();
        Game.convertFarmland();
        Game.food = Game.farms;
        for (var card of Collection.inPlay) {
            card.turnStartWhileInPlay();
        }
    }

    gainAcre(n: number) {
        log(`+${n} [ACRE]`);
        state.acres += n;
    }

    loseFarm(n: number) {
        log(`-${n} [FARM]`);
        state.farms -= n;
    }
}

export const Game = new GameObj();
