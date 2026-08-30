import { Card } from "./card.js";
declare class CollectionObj {
    cards: Array<Card>;
    discoverCardsSeen: Map<string, number>;
    get hand(): Array<Card>;
    get deck(): Array<Card>;
    get graveyard(): Array<Card>;
    get inPlay(): Array<Card>;
    get expansionPool(): Array<Card>;
    get kingdomPool(): Array<Card>;
    draw(n?: number): void;
    add(card: Card): void;
    discoverSortScore(card: Card): number;
    incDiscoverSeenCount(card: Card): void;
    private discover;
    discoverExpansionCards(): Promise<Card | null>;
    discoverKingdomCards(): Promise<Card | null>;
}
export declare const Collection: CollectionObj;
export {};
//# sourceMappingURL=collection.d.ts.map