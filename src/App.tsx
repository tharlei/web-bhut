import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Routes />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Router>
  );
}

export default App;