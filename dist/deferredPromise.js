export class DeferredPromise {
    promise;
    resolve;
    reject;
    constructor() {
        this.resolve = (x) => { };
        this.reject = (reason) => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
//# sourceMappingURL=deferredPromise.js.map