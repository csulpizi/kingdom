import { Card } from "../game/card.js";
import { coloredName } from "../pretty.js";
import { Abyssinia } from "./factions/abyssinia.js";

export abstract class Faction {
    abstract name: string;
    abstract describe: string;
    abstract spawnStarterCards(): Array<Card>;

    toString(): string {
        return `${coloredName(this.name)} - ${this.describe}`;
    }

    onGameStart() {}
    onTurnStart() {}
}

export const factions: Array<Faction> = [new Abyssinia()];
