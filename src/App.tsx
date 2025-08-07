import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageNotFound, Shop, Home } from 'pages';
import { I18nProvider } from 'components';
import Welcome from 'pages/Welcome/Welcome';

const App = () => {
    return (
        <I18nProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<Welcome />} />
                        <Route path="/shop" element={<Shop />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </I18nProvider>
    );
};

export default App;
