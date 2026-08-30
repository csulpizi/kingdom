var globalCount_ = 0;
export function globalCount(): number {
    return globalCount_++;
}

export function randNth<T>(coll: Array<T>): T {
    var n = coll.length;
    var index = Math.floor(Math.random() * n);
    return <T>coll[index];
}

export function noopPromise(): Promise<void> {
    return new Promise<void>((resolve) => resolve());
}
