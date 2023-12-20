// A cache to store results for previously completed units of work
// The purpose of the cache is to avoid performing the same work more than once
export const memoize = fn => new Proxy(fn, {
    cache: new Map(),
    apply (target, arg, args) {
        let cacheKey = args.toString();

        if (!this.cache.has(cacheKey)) {
            this.cache.set(cacheKey, target.apply(arg, args));
        }

        return this.cache.get(cacheKey);
    }
})

// const fibonacci = n => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
// const memoizedFibonacci = memoize(fibonacci);
// for (let i = 0; i < 100; i ++)
//   fibonacci(30);                      // ~5000ms
// for (let i = 0; i < 100; i ++)
//   memoizedFibonacci(30);              // ~50ms
