import { Card, Rarity } from "../../game/card.js";
export declare class Wastes extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    isLand: boolean;
    describe: string;
    resolve(): Promise<void>;
}
//# sourceMappingURL=wastes.d.ts.map