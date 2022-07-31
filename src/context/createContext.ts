import React from 'react';

const createContext = <T>(defaultValue: T) => {
    const context = React.createContext<T>(defaultValue);

    const useContext = () => {
        const c = React.useContext(context);

        if (c === undefined) {
            throw new Error('Problem with context');
        }

        return c;
    };

    return {
        useContext,
        Provider: context.Provider,
    };
};

export default createContext;
