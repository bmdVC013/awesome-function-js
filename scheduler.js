const schedulerPolyfill = () => {
  globalThis.scheduler = globalThis.scheduler || {};
  globalThis.scheduler.yield =
    globalThis.scheduler.yield || 
    (() => new Promise((r) => setTimeout(r, 0)));
}