import React, { useState, useCallback, useEffect } from 'react';
import * as Yup from 'yup';

import './styles.css';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import FormContainer from '../../components/FormContainer';
import Select from '../../components/Select';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface ISelectOptions {
  id: string;
  name: string;
}

const OilChangeRegister: React.FC = () => {
  const { addToast } = useToast();

  const history = useHistory();

  const [customers, setCustomers] = useState<ISelectOptions[]>([]);
  const [oils, setOils] = useState<ISelectOptions[]>([]);

  const [name, setName] = useState('');
  const [expirationInMonth, setExpirationInMonth] = useState('');

  useEffect(() => {
    api
      .get('/customers', {
        headers: {
          Authorization: `Bearear ${localStorage.getItem('@Emoil:token')}`,
        },
      })
      .then(response => setCustomers(response.data));
    api
      .get('/oils', {
        headers: {
          Authorization: `Bearear ${localStorage.getItem('@Emoil:token')}`,
        },
      })
      .then(response => setOils(response.data));
  }, []);

  const handleButtonPress = useCallback(async () => {
    try {
      // const schema = Yup.object().shape({
      //   name:Yup.string().required('O nome do óleo é obrigatório'),
      //   expirationInMonth : Yup.number().required('A validade do óleo em meses é obrigatória').moreThan(0,'A validade deve ser maior que zero')
      // })

      // const newOil = {
      //   name,
      //   expirationInMonth,
      // }

      // await schema.validate(newOil);

      await api.post('/change');

      history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const yupErrors = err.errors.map(error => error);

        addToast({
          title: 'Erro',
          description: yupErrors.join('\r\n'),
        });

        return;
      }

      addToast({
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao cadastrar a troca de óleo',
      });
    }
  }, [addToast, history]);

  return (
    <div className="container" id="page-registeroilchange-form">
      <PageHeader
        isMenu={false}
        title="Cadastre a troca do óleo"
        description="Informe todos os campos para o cadastro da troca do óleo"
      />
      <FormContainer handleButtonPress={handleButtonPress}>
        <fieldset>
          <Select
            name="customer"
            label="Cliente"
            options={[
              { value: '-1', label: '' },
              ...customers.map(customer => {
                return {
                  value: customer.id,
                  label: customer.name,
                };
              }),
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
        </fieldset>
      </FormContainer>
    </div>
  );
};

export default OilChangeRegister;
