// Preload patch: V8's Function.prototype.apply throws RangeError when argsArray
// has >~65535 entries. Next.js internally calls `Array.prototype.push.apply(arr, bigArr)`
// when collecting generateStaticParams results from a single page route, which
// crashes builds with 100k+ static paths.
//
// This patch detects the high-arg case and falls back to a push-loop, which is
// linear and unbounded.
"use strict";
console.error("[v8_apply_patch] loaded in pid=" + process.pid);
const _origApply = Function.prototype.apply;
const _arrPush = Array.prototype.push;
const _sliceCall = Function.prototype.call.bind(Array.prototype.slice);

Function.prototype.apply = function (thisArg, args) {
  const n = args && args.length;
  if (typeof n === "number" && n > 60000) {
    console.error("[v8_apply_patch] intercept apply n=" + n + " fn=" + (this && this.name));
    if (this === _arrPush) {
      let len = thisArg.length | 0;
      for (let i = 0; i < n; i++) thisArg[len++] = args[i];
      thisArg.length = len;
      return len;
    }
    // Generic chunked apply
    let lastRet;
    for (let i = 0; i < n; i += 60000) {
      const slice = _sliceCall(args, i, i + 60000);
      lastRet = _origApply.call(this, thisArg, slice);
    }
    return lastRet;
  }
  return _origApply.call(this, thisArg, args);
};
