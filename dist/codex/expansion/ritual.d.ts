import { Card, Rarity } from "../../game/card.js";
export declare class Ritual extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    describe: string;
    resolve(): Promise<void>;
}
//# sourceMappingURL=ritual.d.ts.map