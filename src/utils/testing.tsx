import React, { ReactNode } from 'react';
import { Router } from 'react-router-dom';
import { RawIntlProvider, createIntl, createIntlCache } from 'react-intl';
import { createMemoryHistory } from 'history';

import { render } from '@testing-library/react';

import { translations } from 'translations';
import { resolve } from 'path';

const defaultLocale = 'en';
const cache = createIntlCache();

const intl = createIntl(
    {
        locale: defaultLocale,
        defaultLocale,
        messages: translations[defaultLocale],
    },
    cache
);

export const renderComponent = (component: ReactNode) => {
    const history = createMemoryHistory();

    return {
        ...render(
            <RawIntlProvider value={intl}>
                <Router location={history.location} navigator={history}>
                    {component}
                </Router>
            </RawIntlProvider>
        ),
        history,
    };
};

export const flushPromises = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));
