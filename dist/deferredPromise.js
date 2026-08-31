export class DeferredPromise {
    promise;
    resolve;
    reject;
    constructor() {
        this.resolve = (_) => { };
        this.reject = (_) => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
//# sourceMappingURL=deferredPromise.js.map