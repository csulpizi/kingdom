var globalCount_ = 0;
export function globalCount() {
    return globalCount_++;
}
export function randNth(coll) {
    var n = coll.length;
    var index = Math.floor(Math.random() * n);
    return coll[index];
}
export function noopPromise() {
    return new Promise((resolve) => resolve());
}
//# sourceMappingURL=util.js.map