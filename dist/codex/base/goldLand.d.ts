import { Card, Rarity } from "../../game/card.js";
export declare class GoldLand extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    isLand: boolean;
    describe: string;
    resolve(): Promise<void>;
}
//# sourceMappingURL=goldLand.d.ts.map