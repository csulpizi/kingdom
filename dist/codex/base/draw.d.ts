import { Card, Rarity } from "../../game/card.js";
export declare class Draw extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    describe: string;
    resolve(): Promise<void>;
}
//# sourceMappingURL=draw.d.ts.map