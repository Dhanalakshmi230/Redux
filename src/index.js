import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer from './folder/reducer';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const stack = configureStore({reducer:reducer});
const store=ReactDOM.createRoot(document.getElementById('root'));
store.render(<Provider store={stack}><App /></Provider>); 
// export default configureStore;