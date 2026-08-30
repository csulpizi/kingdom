import { Card, Rarity } from "../../game/card.js";
export declare class Abundance extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    burns: boolean;
    describe: string;
    resolve(): Promise<void>;
}
//# sourceMappingURL=abundance.d.ts.map