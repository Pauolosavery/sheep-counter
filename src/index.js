/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import './index.css';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
