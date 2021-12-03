import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../context/ApiContext';
import Styles from './Total.module.scss';

const InitData = {
  totalEntradas: 0,
  totalSaidas: 0,
};
const Total = function () {
  const [data] = useContext(ApiContext).despesas;
  const [totais, setTotais] = useContext(ApiContext).totais;
  const [total, setTotal] = useState(InitData);

  function sum() {
    const entradas = data.filter((item) => item.tipo === 'entrada').map((item) => parseFloat(item.value));
    const saidas = data.filter((item) => item.tipo === 'saida').map((item) => parseFloat(item.value));

    const totalEntradas = entradas.length > 0
      ? entradas.reduce((acc, cur) => acc + cur) : '';
    const totalSaidas = saidas.length > 0
      ? saidas.reduce((acc, cur) => acc + cur) : '';
    setTotal({
      totalEntradas,
      totalSaidas,
    });
    setTotais(-totalSaidas + totalEntradas);
  }
  useEffect(() => {
    if (data !== null) {
      sum();
    }
  }, [data]);

  return (
    <table className={Styles.table}>
      <thead className={Styles.table__head}>
        <tr>
          <th>Total de entrada</th>
          <th>Total de saidas</th>
          <th>Saldo Final</th>
        </tr>
      </thead>
      <tbody className={Styles.table__body}>
        <tr>
          <td>
            {'R$ '}
            {total.totalEntradas}
          </td>
          <td className={Styles.table__saida}>
            {'R$ '}
            {total.totalSaidas}
          </td>
          <td
            className={totais < 0
              ? Styles.table__negative
              : Styles.table__positive}
          >
            {'R$ '}
            {totais}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Total;
