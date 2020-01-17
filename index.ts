export interface LuaIterable<T> extends Iterable<T> {
    ():T;
}

export function makeEmptyLuaIterable<T>() : LuaIterable<T> {
    const ret: LuaIterable<T> = <LuaIterable<T>>(() => { return <T><unknown>undefined});
    ret[Symbol.iterator] = () => {
        return { next: () => { return { done: true, value: undefined }} }
    }
    return ret;
}

export function makeLuaIterable<T>(iterable: Iterable<T>) {
    const iterator = iterable[Symbol.iterator]();
    const ret:LuaIterable<T> = <LuaIterable<T>>(() => {
        return iterator.next().value;        
    });
    ret[Symbol.iterator] = () => iterator;
    return ret;
}

export function wrap<T>(f:() => IterableIterator<T>) {
    return makeLuaIterable(f());
}