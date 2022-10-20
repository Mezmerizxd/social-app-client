// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import App from './app';

// Styles
import './styles.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <div className="Application">
        <Router>
            <div className="Page-container">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    {/* Auth */}
                    <Route path="auth/login" element={<Login />} />
                    <Route path="auth/signup" element={<SignUp />} />
                    {/* Conversel */}
                    <Route path="/app" element={<App />} />
                </Routes>
            </div>
        </Router>
    </div>
);
