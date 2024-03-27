type TypeObjectKeys<T> = keyof T;

type NonEmptyArray<T extends any> = [T, ...T[]];
type __CheckAreAllElementspresentOnlyOneTimeRecursion<A extends unknown[]> =
    //
    A extends [infer X, ...infer Rest] //
        ? X extends Rest[number]
            ? false
            : __CheckAreAllElementspresentOnlyOneTimeRecursion<Rest>
        : true;
type UniqueKeyValuesArray<T extends string[]> = __CheckAreAllElementspresentOnlyOneTimeRecursion<T> extends true ? T : [];

export type { TypeObjectKeys, NonEmptyArray, UniqueKeyValuesArray };
