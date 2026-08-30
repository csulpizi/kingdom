export declare abstract class Card {
    abstract name: string;
    private location_;
    private locationChangedIndex_;
    abstract rarity: Rarity;
    protected abstract food: number;
    protected abstract gold: number;
    protected abstract describe: string;
    protected burns: boolean;
    protected isLand: boolean;
    get location(): Location;
    set location(val: Location);
    get order(): number;
    protected abstract resolve(): Promise<void>;
    turnStartWhileInPlay(): void;
    protected gateKeep(): {
        playable: boolean;
        reason: string;
    };
    canPlay(): {
        playable: boolean;
        reason: string;
    };
    play(): Promise<void>;
    clone(): Card;
    toString(): string;
}
export type Rarity = "base" | "expansion" | "kingdom";
export type Location = "reserve" | "hand" | "deck" | "graveyard" | "inplay" | "burn" | "stack";
//# sourceMappingURL=card.d.ts.map