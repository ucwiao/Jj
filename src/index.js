import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Imports all the styling
import App from './App';

// This finds the 'root' div in your public/index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));

// This tells React to render your entire App component inside that div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
