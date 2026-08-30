import { Card } from "./game/card.js";
export declare class Prompt {
    message: string;
    options: Array<{
        key: string;
        describe: string;
        enabled: boolean;
        callback: () => Promise<void>;
    }>;
    constructor(message: string);
    addCards(cards: Array<Card>, callback: (card: Card) => Promise<void>, enable?: (card: Card) => {
        playable: boolean;
        reason: string;
    }): void;
    addOption(key: string, describe: string, callback: () => Promise<void>): void;
    addDud(key: string, describe: string): void;
    invoke(): Promise<void>;
    drawOptions(): void;
    Clear(): void;
}
//# sourceMappingURL=prompt.d.ts.map