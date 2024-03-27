import type { StateCreator } from 'zustand';
import type { CommonStore } from '../_types/common-store-types';

export const __commonStoreStateCreator: StateCreator<CommonStore> = (set, get, store) => {
    const theme: CommonStore['theme'] = 'light';

    return {
        theme,
    };
};
