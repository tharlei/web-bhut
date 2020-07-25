import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import { ToastContainer } from 'react-toastify';

import './App.css';

function App() {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;