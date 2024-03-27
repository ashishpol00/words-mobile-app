import type { NonEmptyArray, TypeObjectKeys, UniqueKeyValuesArray } from '../app/_shared/types/custom-generic-types';
import type { CommonStore } from './_types/common-store-types';
import type { WordsStore } from './_types/words-store-types';
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { __commonStoreStateCreator } from './common-store/main';
import { __wordsStoreStateCreator } from './words-store/main';

type ObjectFromListOfkeys<T, KK extends ReadonlyArray<TypeObjectKeys<T>>> = {
    [K in KK extends ReadonlyArray<infer U> ? U : never]: T[K];
};

// stores ceration:
const useCommonStore = create<CommonStore, []>(__commonStoreStateCreator);
const useIPStore = create<WordsStore, []>(__wordsStoreStateCreator);

// store multi extractores:
const { useCommonStoreMultiExtractor, useWordsStoreMultiExtractor } = (() => {
    const useCommonStoreMultiExtractor = <T extends TypeObjectKeys<CommonStore>[]>(
        ...names: NonEmptyArray<TypeObjectKeys<CommonStore>> & UniqueKeyValuesArray<T>
    ): ObjectFromListOfkeys<CommonStore, T> =>
        useCommonStore(useShallow(state => names.reduce((r, key) => ({ ...r, [key]: state[key] }), {} as ObjectFromListOfkeys<CommonStore, T>)));

    const useWordsStoreMultiExtractor = <T extends TypeObjectKeys<WordsStore>[]>(
        ...names: NonEmptyArray<TypeObjectKeys<WordsStore>> & UniqueKeyValuesArray<T>
    ): ObjectFromListOfkeys<WordsStore, T> =>
        useIPStore(useShallow(state => names.reduce((r, key) => ({ ...r, [key]: state[key] }), {} as ObjectFromListOfkeys<WordsStore, T>)));

    return {
        useCommonStoreMultiExtractor,
        useWordsStoreMultiExtractor,
    };
})();

export { useCommonStoreMultiExtractor, useWordsStoreMultiExtractor };
