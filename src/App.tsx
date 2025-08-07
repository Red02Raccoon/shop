import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageNotFound, Shop, Home, Welcome, Activity } from 'pages';
import { I18nProvider } from 'components';

const App = () => {
    return (
        <I18nProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<Welcome />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/activity" element={<Activity />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </I18nProvider>
    );
};

export default App;
