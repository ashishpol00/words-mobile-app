import type { StateCreator } from 'zustand';
import type { WordsStore } from '../_types/words-store-types';

export const __wordsStoreStateCreator: StateCreator<WordsStore> = (set, get, store) => {
    const words: WordsStore['words'] = [];

    return {
        words,
    };
};
