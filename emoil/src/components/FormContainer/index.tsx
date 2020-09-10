import React from 'react';

import WarningIcon from '../../assets/warning.png';

import './styles.css';

const FormContainer: React.FC = ({ children }) => {
  return (
    <main>
      {children}
      <footer>
        <p>
          <img src={WarningIcon} width="35" alt="Aviso Importante" />
          Importante
          <br />
          Preencha todos os dados
        </p>
        <button type="button">Salvar cadastro</button>
      </footer>
    </main>
  );
};

export default FormContainer;
