import { useState, useMemo, useCallback, ReactElement } from 'react';
import { IntlProvider } from 'react-intl';

import { I18nContext } from './Context';
import { translations } from './translations';
import { defaultLocale } from './translationSettings';

interface Props {
    locale: string;
    children: ReactElement;
}

const I18nProvider: React.FC<Props> = ({ locale, children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(locale || defaultLocale);

    const updateLanguage = useCallback((lang: string) => {
        setCurrentLanguage(lang);

        return lang;
    }, []);

    const value = useMemo(
        () => ({
            currentLanguage,
            updateLanguage,
        }),
        [currentLanguage, updateLanguage]
    );

    return (
        <I18nContext.Provider value={value}>
            <IntlProvider
                locale={currentLanguage}
                defaultLocale={defaultLocale}
                messages={translations[currentLanguage] || {}}
            >
                {children}
            </IntlProvider>
        </I18nContext.Provider>
    );
};

export default I18nProvider;
