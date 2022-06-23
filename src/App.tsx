import { Outlet } from 'react-router-dom';

import { Header } from 'components';

const App = () => {
    return (
        <div className="bg-white">
            <Header />

            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
                <Outlet />
            </div>
        </div>
    );
};

export default App;
