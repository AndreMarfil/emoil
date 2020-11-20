import React,{useState,useCallback,useEffect} from 'react';
import * as Yup from 'yup';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import FormContainer from '../../components/FormContainer';
import Select from '../../components/Select';
import { useToast } from '../../hooks/toast';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

interface ISelectOptions{
  id:string
  name:string
}

const OilChangeRegister: React.FC = () => {
  const {addToast} = useToast();

  const history = useHistory();

  const [customers,setCustomers] = useState<ISelectOptions[]>([]);
  const [oils,setOils] = useState<ISelectOptions[]>([]);

  const [name,setName] = useState('');
  const [expirationInMonth,setExpirationInMonth] = useState('');

  useEffect(()=>{
    api.get('/customers').then(response=> setCustomers(response.data));
    api.get('/oils').then(response=> setOils(response.data));
  },[]);

  const handleButtonPress = useCallback(async ()=>{
    try{
      // const schema = Yup.object().shape({
      //   name:Yup.string().required('O nome do óleo é obrigatório'),
      //   expirationInMonth : Yup.number().required('A validade do óleo em meses é obrigatória').moreThan(0,'A validade deve ser maior que zero')
      // })

      // const newOil = {
      //   name,
      //   expirationInMonth,
      // }

      // await schema.validate(newOil);

      await api.post('/change',);

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
