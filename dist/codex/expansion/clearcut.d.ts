import { Card, Rarity } from "../../game/card.js";
export declare class Clearcut extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    describe: string;
    protected gateKeep(): {
        playable: boolean;
        reason: string;
    };
    resolve(): Promise<void>;
}
//# sourceMappingURL=clearcut.d.ts.map