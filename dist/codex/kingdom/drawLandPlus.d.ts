import { Card, Rarity } from "../../game/card.js";
export declare class DrawLandPlus extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    describe: string;
    isLand: boolean;
    resolve(): Promise<void>;
}
//# sourceMappingURL=drawLandPlus.d.ts.map