import { Card, Rarity } from "../../game/card.js";
export declare class BurnDraw extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    describe: string;
    gateKeep(): {
        playable: boolean;
        reason: string;
    };
    resolve(): Promise<void>;
}
//# sourceMappingURL=burnDraw.d.ts.map