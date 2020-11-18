import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import Select from '../../components/Select';

const OilChangeRegister: React.FC = () => {
  return (
    <div className="container" id="page-registeroilchange-form">
      <PageHeader
        isMenu={false}
        title="Cadastre a troca do óleo"
        description="Informe todos os campos para o cadastro da troca do óleo"
      />
      <FormContainer>
        <fieldset>
          <Select
            name="customer"
            label="Cliente"
            options={[
              { value: 'Francisco', label: 'Francisco' },
              { value: 'Márcio', label: 'Márcio' },
            ]}
          />
          <Select
            name="oil"
            label="Óleo"
            options={[
              { value: '1', label: 'Óleo 1' },
              { value: '2', label: 'Óleo 2' },
            ]}
          />
          <Input type="date" name="date" label="Data da troca" />
        </fieldset>
      </FormContainer>
    </div>
  );
};

export default OilChangeRegister;
