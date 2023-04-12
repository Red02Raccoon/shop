import { useState, useMemo, useCallback, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import { defaultLocale } from 'common';
import { TranslationProvider } from 'context';
import { translations } from 'translations';
import { saveSettings, loadSettings } from 'services';

interface Props {
    children: React.ReactNode;
}

const I18nProvider: React.FC<Props> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(defaultLocale);

    useEffect(() => {
        loadSettings()
            .then(({ lang }) => {
                setCurrentLanguage(lang || defaultLocale);
            })
            .catch((e) => console.log(e.message));
    }, []);

    const updateLanguage = useCallback((lang: string) => {
        setCurrentLanguage(lang);
        saveSettings({ lang });

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
