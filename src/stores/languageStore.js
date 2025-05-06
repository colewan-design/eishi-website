import { defineStore } from 'pinia';
import translations from '@/lang/translation';

export const useLanguageStore = defineStore('language', {
    state: () => ({
        selectedLanguage: 'English',
        translations,
    }),
    getters: {
        t(state) {
            return state.translations[state.selectedLanguage];
        }
    },
    actions: {
        changeLanguage(lang) {
            this.selectedLanguage = lang;
        }
    }
});
