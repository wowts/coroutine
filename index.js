"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeLuaIterable(iterable) {
    const iterator = iterable[Symbol.iterator]();
    const ret = (() => {
        return iterator.next().value;
    });
    ret[Symbol.iterator] = () => iterator;
    return ret;
}
exports.makeLuaIterable = makeLuaIterable;
function wrap(f) {
    return makeLuaIterable(f());
}
exports.wrap = wrap;
