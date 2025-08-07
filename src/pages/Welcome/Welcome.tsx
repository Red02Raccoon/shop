import React from 'react';
import { FormattedMessage } from 'react-intl';

const Welcome: React.FC = () => (
    <main style={{ padding: '1rem' }}>
        <p>
            <FormattedMessage id="tr_selectPage" />
        </p>

        <FormattedMessage id="tr_myMessage" values={{ ts: Date.now() }} />

        <p>
            <FormattedMessage id="tr_description" />
        </p>
    </main>
);

export default Welcome;