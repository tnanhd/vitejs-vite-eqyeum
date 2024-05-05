import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-so4ctl6dkj0yqhnd.us.auth0.com";
const clientId = "6Zn04EhSQT8wwzvO5pNIf3I6SaBKX0Zw";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider domain={domain} 
  clientId={clientId} 
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
