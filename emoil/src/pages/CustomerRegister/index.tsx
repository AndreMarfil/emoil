import React from 'react';
import PageHeader from '../../components/PageHeader';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';

import './styles.css';

const CustomerRegister: React.FC = () => {
  return (
    <div className="container" id="page-registercustomer-form">
      <PageHeader
        title="Cadastre um cliente"
        description="Informe todos os campos para o cadastro do cliente"
      />
      <FormContainer>
        <fieldset>
          <Input type="text" name="name" label="Nome" />
          <Input type="email" name="email" label="Email" />
        </fieldset>
      </FormContainer>
    </div>
  );
};

export default CustomerRegister;
