import React, { ReactNode } from 'react';
import { Router } from 'react-router-dom';
import { RawIntlProvider, createIntl, createIntlCache } from 'react-intl';
import { createMemoryHistory, MemoryHistory } from 'history';

import { render } from '@testing-library/react';

import { translations } from 'translations';

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

const AllProviders = ({ children, history }: { children: ReactNode; history: MemoryHistory }) => {
    return (
        <RawIntlProvider value={intl}>
            <Router location={history.location} navigator={history}>
                {children}
            </Router>
        </RawIntlProvider>
    );
};

export const renderComponent = (component: React.ReactElement, options?: {}) => {
    const history = createMemoryHistory();

    return {
        ...render(component, {
            wrapper: (props) => <AllProviders history={history} {...props} />,
            ...options,
        }),
        history,
    };
};

export const flushPromises = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));
