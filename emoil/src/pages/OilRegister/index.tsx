import React,{useState,useCallback} from 'react';
import * as Yup from 'yup';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import FormContainer from '../../components/FormContainer';
import { useToast } from '../../hooks/toast';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

const OilRegister: React.FC = () => {
  const {addToast} = useToast();

  const history = useHistory();

  const [name,setName] = useState('');
  const [expirationInMonth,setExpirationInMonth] = useState('');

  const handleButtonPress = useCallback(async ()=>{
    try{
      const schema = Yup.object().shape({
        name:Yup.string().required('O nome do óleo é obrigatório'),
        expirationInMonth : Yup.number().required('A validade do óleo em meses é obrigatória').moreThan(0,'A validade deve ser maior que zero')
      })

      const newOil = {
        name,
        expirationInMonth,
      }

      await schema.validate(newOil);

      await api.post('/oils',newOil);

      history.push('/dashboard');
    }catch(err){
      if (err instanceof Yup.ValidationError) {
       const errorYup =  err.inner.map(error=>error.message);

       if(errorYup)
        addToast({title:'Erro',description: errorYup[0]});
      }
    }
  },[addToast,name,expirationInMonth,history]);

  return (
    <div className="container" id="page-registeroil-form">
      <PageHeader
        isMenu={false}
        title="Cadastre um óleo"
        description="Informe todos os campos para o cadastro do óleo"
      />

      <FormContainer handleButtonPress={handleButtonPress}>
        <fieldset>
          <legend>Dados do óleo</legend>
          <Input onChange={e=>setName(e.target.value)} type="text" name="name" label="Nome do óleo" />
          <Input onChange={e=>setExpirationInMonth(e.target.value)} type="number" name="expiration" label="Validade (Em meses)" />
        </fieldset>
      </FormContainer>
    </div>
  );
};

export default OilRegister;
