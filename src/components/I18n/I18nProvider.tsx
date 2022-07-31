import { useState, useMemo, useCallback } from 'react';
import { IntlProvider } from 'react-intl';

import { defaultLocale } from 'common';
import { TranslationProvider } from 'context';
import { translations } from 'translations';

interface Props {
    locale: string;
    children: React.ReactNode;
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
        <TranslationProvider value={value}>
            <IntlProvider
                locale={currentLanguage}
                defaultLocale={defaultLocale}
                messages={translations[currentLanguage] || {}}
            >
                {children}
            </IntlProvider>
        </TranslationProvider>
    );
};

export default I18nProvider;
