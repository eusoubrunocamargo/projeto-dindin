import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main/';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    <SignIn />
    <Dashboard />
  </React.StrictMode>
);

