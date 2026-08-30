import { Card, Rarity } from "../../game/card.js";
export declare class DrawLand extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    describe: string;
    isLand: boolean;
    resolve(): Promise<void>;
}
//# sourceMappingURL=drawLand.d.ts.map