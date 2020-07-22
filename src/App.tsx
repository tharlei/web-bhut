import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import { ToastContainer } from 'react-toastify';

import './App.css';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;