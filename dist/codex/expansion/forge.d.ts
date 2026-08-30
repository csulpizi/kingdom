import { Card, Rarity } from "../../game/card.js";
export declare class Forge extends Card {
    name: string;
    rarity: Rarity;
    food: number;
    gold: number;
    describe: string;
    isLand: boolean;
    resolve(): Promise<void>;
    turnStartWhileInPlay(): void;
}
//# sourceMappingURL=forge.d.ts.map