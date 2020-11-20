import React, {useState,useCallback} from 'react';
import * as Yup from 'yup';

import PageHeader from '../../components/PageHeader';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';

import './styles.css';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const CustomerRegister: React.FC = () => {
  const {addToast} = useToast();

  const history = useHistory();

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  const handleButtonPress = useCallback(async ()=>{
    try{
      const schema = Yup.object().shape({
        name:Yup.string().required('O nome é obrigatório'),
        email:Yup.string().required('O email é obrigatório').email('Informe um email válido'),
      })

      const customer = {
        name,
        email,
      }

      await schema.validate(customer);

      await api.post('/customers',customer);

      history.push('/dashboard');
    }catch(err){
      if (err instanceof Yup.ValidationError) {
       const errorYup =  err.inner.map(error=>error.message);

       if(errorYup)
        addToast({title:'Erro',description: errorYup[0]});
      }
    }
  },[addToast,name,email,history])

  return (
    <div className="container" id="page-registercustomer-form">
      <PageHeader
        isMenu={false}
        title="Cadastre um cliente"
        description="Informe todos os campos para o cadastro do cliente"
      />
      <FormContainer handleButtonPress={handleButtonPress}>
        <fieldset>
          <Input onChange={e=>setName(e.target.value)} value={name} type="text" name="name" label="Nome" />
          <Input onChange={e=>setEmail(e.target.value)} value={email} type="email" name="email" label="Email" />
        </fieldset>
      </FormContainer>
    </div>
  );
};

export default CustomerRegister;
