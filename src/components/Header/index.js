import React, { useContext } from 'react';
import ApiContext from '../../context/ApiContext';
import Style from './Heder.module.scss';

const Header = function () {
  const [totais] = useContext(ApiContext).totais;
  return (
    <div className={Style.header}>
      <div className={Style.header__logo}>
        <img src="/images/logo.png" alt="logo" className={Style.header__img} />
        <h1 className={Style.header__Title}>Controle suas finanças</h1>
      </div>
      <h2 className={totais < 0
        ? Style.header__saldo_neg
        : Style.header__saldo_pos}
      >
        Saldo:
        {' R$ '}
        {totais}
      </h2>
    </div>
  );
};

export default Header;
