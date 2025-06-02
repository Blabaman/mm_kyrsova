import React from 'react';
import ReactDOM from 'react-dom/client'; // ← use 'react-dom/client' instead of 'react-dom'
import App from './App';

import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);