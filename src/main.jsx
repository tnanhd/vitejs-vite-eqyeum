import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.DOMAIN;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider domain={domain}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
