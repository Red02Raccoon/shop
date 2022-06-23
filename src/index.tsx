import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.scss';

import { PageNotFound, Shop } from 'pages';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route
                        index
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>Select a page</p>
                                <p>I am checking how index prop works in react-router</p>
                            </main>
                        }
                    />
                    <Route path="/shop" element={<Shop />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
