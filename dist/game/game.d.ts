declare class GameObj {
    get food(): number;
    get gold(): number;
    get acres(): number;
    get farms(): number;
    get glory(): number;
    get turn(): number;
    set food(val: number);
    set gold(val: number);
    expireFood(): void;
    convertFarmland(): void;
    gainGlory(): void;
    gainFarm(): void;
    incTurn(): void;
    firstTurn(): void;
    endTurn(): Promise<void>;
    gainAcre(n: number): void;
    loseFarm(n: number): void;
}
export declare const Game: GameObj;
export {};
//# sourceMappingURL=game.d.ts.map