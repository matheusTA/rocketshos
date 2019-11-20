import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import store from './store';
import Header from './components/Header';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
