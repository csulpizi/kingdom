import { Card, Rarity } from "../../game/card.js";
export declare class Harvest extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    describe: string;
    resolve(): Promise<void>;
}
//# sourceMappingURL=harvest.d.ts.map