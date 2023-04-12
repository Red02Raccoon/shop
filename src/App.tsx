import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { PageNotFound, Shop, Home } from 'pages';
import { I18nProvider } from 'components';

const App = () => {
    return (
        <I18nProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route
                            index
                            element={
                                <main style={{ padding: '1rem' }}>
                                    <p>
                                        <FormattedMessage id="tr_selectPage" />
                                    </p>

                                    <FormattedMessage
                                        id="tr_myMessage"
                                        values={{ ts: Date.now() }}
                                    />

                                    <p>
                                        <FormattedMessage id="tr_description" />
                                    </p>
                                </main>
                            }
                        />
                        <Route path="/shop" element={<Shop />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </I18nProvider>
    );
};

export default App;
