import { createContext, useContext } from 'react';

import { defaultLocale } from './translationSettings';

export const I18nContext = createContext({
    currentLanguage: defaultLocale,
    updateLanguage: (lang: string) => lang,
});

export const useI18n = () => useContext(I18nContext);
