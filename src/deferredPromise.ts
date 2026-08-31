export class DeferredPromise<T> {
    promise: Promise<T>;
    resolve: (x: T) => void;
    reject: (reason: string) => void;

    constructor() {
        this.resolve = (_: T) => {};
        this.reject = (_: string) => {};
        this.promise = new Promise<T>((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
