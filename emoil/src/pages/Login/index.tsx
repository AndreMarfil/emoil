import React from 'react';

import './styles.css';

import Input from '../../components/Input';

const Login: React.FC = () => {
  return (
    <div id="page-login">
      <div className="container">
        <strong className="strong-text">Realizar login</strong>
        <Input name="user" label="Usuário" />
        <Input name="password" label="Senha" type="password" />
        <button type="button">Logar</button>
      </div>
    </div>
  );
};

export default Login;
