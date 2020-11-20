import React, {useState,useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

import './styles.css';

const SignUp: React.FC = () => {
  const {addToast} = useToast();

  const history = useHistory();

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleButtonPress = useCallback(async ()=>{
    try{
      const schema = Yup.object().shape({
        username:Yup.string().required('O nome de usuário é obrigatório'),
        password : Yup.string().required('A senha é obrigatória').min(8,'A senha deve possuir pelo menos oito digitos')
      })

      const newUser = {
        name,
        password,
      }

      await schema.validate(newUser);

      await api.post('/users',newUser);

      history.push('/');
    }catch(err){
      if (err instanceof Yup.ValidationError) {
       const errorYup =  err.inner.map(error=>error.message);

       if(errorYup)
        addToast({title:'Erro',description: errorYup[0]});
      }
    }
  },[addToast,name,password,history])

  return (
    <div className="container" id="page-registeremployee-form">
      <PageHeader
        isMenu={false}
        title="Novo usuário"
        description="Informe todos os campos para o cadastro"
      />
      <FormContainer>
        <fieldset>
          <legend>Dados do novo usuário</legend>
          <Input type="text" name="name" label="Nome de usuário" />
          <Input type="password" name="password" label="Senha" />
        </fieldset>
      </FormContainer>
    </div>
  );
};

export default SignUp;
