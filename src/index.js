import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>

  </BrowserRouter>


);


