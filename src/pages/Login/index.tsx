import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { } from 'react-icons/fa';

import {
} from './styles';

const Login = () => {
  const history = useHistory();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    localStorage.setItem('token', '94a08da1fecbb6e8b46990538c7b50b2');

    history.push('/');
  }

  return (
    <div id="page-login">
      <button onClick={handleSubmit}>
        Entrar
      </button>
    </div>
  )
}

export default Login;