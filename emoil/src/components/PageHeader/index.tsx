import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/back.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  description?: string;
  isMenu: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = props => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        {!props.isMenu && (
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
        )}
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
