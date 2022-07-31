import { defaultLocale } from 'common';
import createContext from './createContext';

export const { useContext: useI18n, Provider: TranslationProvider } = createContext({
    currentLanguage: defaultLocale,
    updateLanguage: (lang: string) => lang,
});
