import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.scss';

import { Shop } from './pages';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Shop />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
