import React from 'react';

import { FaOilCan, FaCarAlt, FaRegIdCard } from 'react-icons/fa';
import { IoIosPerson } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import './styles.css';

const Main: React.FC = () => {
  const history = useHistory();

  return (
    <div id="page-main-container">
      <PageHeader
        isMenu
        title="Menu de opções"
        description="Escolha uma opção"
      />
      <div className="container">
        <div className="row">
          <div className="icon-container">
            <FaRegIdCard onClick={() => history.push('/customer')} size={100} />
          </div>
          <div className="hide">Cadastro do consumidor</div>
          <div className="icon-container">
            <FaCarAlt onClick={() => history.push('/oilchange')} size={100} />
          </div>
          <div className="hide">Cadastro da troca de óleo</div>
        </div>
        <div className="row">
          <div className="icon-container">
            <FaOilCan onClick={() => history.push('/oil')} size={100} />
          </div>
          <div className="hide">Cadastro do óleo</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
