import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider as StoreProvider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics en dpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
