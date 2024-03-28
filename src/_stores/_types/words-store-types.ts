import type { Word } from '../../app/_shared/types/types';

export type WordsStore = {
    words: Word[];

    loadWordsToWordsStoreFromDB: () => void;
    addWord: (word: Word) => void;
    editWord: (word: Word) => void;
    deleteWords: (spellingsOfwordsToDelete: string[]) => void;
};
