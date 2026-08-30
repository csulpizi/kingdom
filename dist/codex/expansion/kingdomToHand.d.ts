import { Card, Rarity } from "../../game/card.js";
export declare class KingdomToHand extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    burns: boolean;
    describe: string;
    resolve(): Promise<void>;
}
//# sourceMappingURL=kingdomToHand.d.ts.map