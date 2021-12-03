import React, { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import dumbData from '../../assets/dumbData.json';
import ApiContext from '../../context/ApiContext';
import Button from '../Button';
import Tag from '../Tag';
import Style from './Table.module.scss';

// eslint-disable-next-line react/function-component-definition
export default function Table() {
  const [data, setData] = useContext(ApiContext).despesas;

  const onDel = (e) => {
    const { name } = e.target.name;
    const newArr = [data.filter((item) => item.timeStamp === name)];
    setData(...newArr);
  };

  return (
    <table className={Style.Table}>
      <tr className={Style.Table__head}>
        <th>Titulo</th>
        <th>Valor</th>
        <th>Categoria</th>
        <th>Tipo</th>
        <th>Data</th>
        <th>Excluir</th>
      </tr>
      {data !== null && data.map((item) => (
        <tr className={Style.Table__body}>
          <td>{item.title}</td>
          <td>
            R$
            {' '}
            {parseFloat(item.value).toFixed(2)}
          </td>
          <td>{item.category}</td>
          <td>
            <Tag style={item.tipo}>
              {item.tipo}
            </Tag>
          </td>
          <td>{item.date}</td>
          <td>
            <Button onClick={onDel} name={item.timeStamp}>Excluir</Button>
          </td>
        </tr>
      ))}
    </table>
  );
}
