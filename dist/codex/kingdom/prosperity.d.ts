import { Card, Rarity } from "../../game/card.js";
export declare class Prosperity extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    describe: string;
    burns: boolean;
    resolve(): Promise<void>;
}
//# sourceMappingURL=prosperity.d.ts.map