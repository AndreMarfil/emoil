import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import FormContainer from '../../components/FormContainer';
import Textarea from '../../components/Textarea';

const OilRegister: React.FC = () => {
  return (
    <div className="container" id="page-registeroil-form">
      <PageHeader
        isMenu={false}
        title="Cadastre um óleo"
        description="Informe todos os campos para o cadastro do óleo"
      />

      <FormContainer>
        <fieldset>
          <legend>Dados do óleo</legend>
          <Input type="text" name="name" label="Nome do óleo" />
          <Input type="number" name="expiration" label="Validade (Em meses)" />
          <Textarea name="info" label="Informações adicionais" />
        </fieldset>
      </FormContainer>
    </div>
  );
};

export default OilRegister;
