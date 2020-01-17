"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeEmptyLuaIterable() {
    const ret = (() => { return undefined; });
    ret[Symbol.iterator] = () => {
        return { next: () => { return { done: true, value: undefined }; } };
    };
    return ret;
}
exports.makeEmptyLuaIterable = makeEmptyLuaIterable;
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
