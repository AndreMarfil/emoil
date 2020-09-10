import React from 'react';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import './styles.css';

const EmployeeRegister: React.FC = () => {
  return (
    <div className="container" id="page-registeremployee-form">
      <PageHeader
        title="Cadastre um funcionário"
        description="Informe todos os campos para o cadastro do funcionário"
      />
      <FormContainer>
        <fieldset>
          <legend>Dados do funcionário</legend>
          <Input type="text" name="name" label="Nome do funcionário" />
        </fieldset>
        <fieldset>
          <legend>Dados do a</legend>
          <Input type="text" name="name" label="Nome do funcionário" />
        </fieldset>
      </FormContainer>
    </div>
  );
};

export default EmployeeRegister;
