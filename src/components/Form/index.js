/* eslint-disable no-prototype-builtins */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import Toggle from './Toggle.module.scss';
import Style from './Wallet.module.scss';
import Button from '../Button';
import ApiContext from '../../context/ApiContext';

const FormWallet = function () {
  const [data, setData] = useContext(ApiContext).despesas;
  const [info, setInfo] = useState({});
  const [errors, setErrors] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString('pt-br');
    const timeStamp = Date.now();
    if (info.hasOwnProperty('tipo')
    && info.hasOwnProperty('title')) {
      const dados = { ...info, date, timeStamp };
      setData([...data, dados]);
    } else {
      setErrors('Preencha todos os campos');
    }
  };

  const onChange = (elem) => {
    const { value } = elem.target;
    const fildName = elem.target.name;

    setInfo({
      ...info,
      [fildName]: value,
    });
  };

  return (
    <>
      <span className={Style.errors}>{errors}</span>
      <form className={Style.Wallet} onSubmit={onSubmit}>
        <label className={Style.Wallet__Label}>
          Titulo:*
          <input
            className={Style.Wallet__Input}
            type="text"
            name="title"
            placeholder="digite o título da movimentação"
            onChange={onChange}
          />
        </label>
        <label className={Style.Wallet__Label}>
          {' '}
          Categoria:
          <input
            className={Style.Wallet__Input}
            type="text"
            name="category"
            placeholder="Digite a categoria da movimentação"
            onChange={onChange}
          />
        </label>
        <label className={Style.Wallet__Label}>
          Valor:*
          <input
            className={Style.Wallet__Input}
            name="value"
            placeholder="Qual o valor"
            onChange={onChange}
            pattern="^\d*(\.\d{0,2})?$"
            title="Utilize ponto em vez de vigula para decimal"
          />
        </label>
        <div className={Toggle.Switch}>

          Tipo:*
          <div
            className={Toggle.Switch__Box}
          >
            <input
              className={`${Toggle.Switch_saida} ${Toggle.Switch__Input}`}
              type="radio"
              id="saida"
              name="tipo"
              value="saida"
              onChange={onChange}
            />
            <label
              className={`${Toggle.Switch__Input_label} ${Toggle.Switch_label_out}`}
              htmlFor="saida"
            >
              Saida
            </label>
            <input
              className={`${Toggle.Switch_entrada} ${Toggle.Switch__Input}`}
              type="radio"
              id="entrada"
              name="tipo"
              value="entrada"
              onChange={onChange}
            />
            <label
              className={`${Toggle.Switch__Input_label} ${Toggle.Switch_label_in}`}
              htmlFor="entrada"
            >
              Entrada
            </label>

          </div>
        </div>
        <Button
          type="submit"
        >
          Adicionar

        </Button>
      </form>
    </>
  );
};

export default FormWallet;
