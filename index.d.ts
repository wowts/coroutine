export interface LuaIterable<T> extends Iterable<T> {
    (): T;
}
export declare function makeEmptyLuaIterable<T>(): LuaIterable<T>;
export declare function makeLuaIterable<T>(iterable: Iterable<T>): LuaIterable<T>;
export declare function wrap<T>(f: () => IterableIterator<T>): LuaIterable<T>;
