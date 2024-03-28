import type { StateCreator } from 'zustand';
import type { WordsStore } from '../_types/words-store-types';
import { showToastMessage } from '../../app/_shared/utils/toaster';

export const __wordsStoreStateCreator: StateCreator<WordsStore> = (set, get, store) => {
    const words: WordsStore['words'] = [];

    const loadWordsToWordsStoreFromDB: WordsStore['loadWordsToWordsStoreFromDB'] = function () {
        set({ words: [] });
    };
    const addWord: WordsStore['addWord'] = function (word) {
        const state = get();
        const existingWord = state.words.find(value => value.spelling === word.spelling);
        if (existingWord) {
            showToastMessage('This word already exists');
        } else {
            set(state => ({ words: [word, ...state.words] }));
        }
    };
    const editWord: WordsStore['editWord'] = function (word) {
        const state = get();
        const existingWord = state.words.find(value => value.spelling === word.spelling);
        if (existingWord) {
            existingWord.spelling = word.spelling;
            existingWord.meaning = word.meaning;
            existingWord.sentences = word.sentences;
            set({ words: [...state.words] });
        } else {
            showToastMessage('Word not found');
        }
    };
    const deleteWords: WordsStore['deleteWords'] = function (spellingsOfwordsToDelete) {
        const filteredWords = get().words.filter(value => !spellingsOfwordsToDelete.includes(value.spelling));
        set({ words: [...filteredWords] });
    };

    return {
        words,
        loadWordsToWordsStoreFromDB,
        addWord,
        editWord,
        deleteWords,
    };
};
