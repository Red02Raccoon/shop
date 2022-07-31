import { useEffect } from 'react';

interface Props {
    canUseLogger: boolean;
}

function withLog<T extends Props>(Component: React.ComponentType<T>) {
    return (props: T) => {
        useEffect(() => {
            console.log('withLog ->', Component.displayName || Component.name);
        }, []);

        return <Component {...props} />;
    };
}

export default withLog;
