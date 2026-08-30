import { Card, Rarity } from "../../game/card.js";
export declare class BurnLand extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    describe: string;
    isLand: boolean;
    gateKeep(): {
        playable: boolean;
        reason: string;
    };
    resolve(): Promise<void>;
}
//# sourceMappingURL=burnLand.d.ts.map