export declare class DeferredPromise<T> {
    promise: Promise<T>;
    resolve: (x: T) => void;
    reject: (reason: string) => void;
    constructor();
}
//# sourceMappingURL=deferredPromise.d.ts.map