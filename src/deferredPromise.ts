export class DeferredPromise<T> {
    promise: Promise<T>;
    resolve: (x: T) => void;
    reject: (reason: string) => void;

    constructor() {
        this.resolve = (x: T) => {};
        this.reject = (reason: string) => {};
        this.promise = new Promise<T>((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
