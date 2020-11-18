import React, { useCallback, useState } from 'react';

import './styles.css';

import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(async () => {
    try {
      await signIn({ username, password });

      history.push('/dashboard');
    } catch {
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      });
    }
  }, [addToast, history, password, signIn, username]);

  return (
    <div id="page-login">
      <div className="container">
        <strong className="strong-text">Realizar login</strong>
        <Input
          onChange={e => setUsername(e.target.value)}
          name="user"
          label="Usuário"
          value={username}
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          name="password"
          label="Senha"
          type="password"
          value={password}
        />
        <button onClick={handleSubmit} type="button">
          Logar
        </button>
      </div>
    </div>
  );
};

export default Login;
