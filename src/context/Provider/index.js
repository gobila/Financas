import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../ApiContext';

const { Provider } = ApiContext;

const ApiProvider = function ({ children }) {
  const [data, setData] = useState([]);
  const [totais, setTotais] = useState('');

  useEffect(() => {
    const localStore = localStorage.getItem('despesas');
    if (localStore !== null) {
      const localArr = JSON.parse(localStore);
      setData(localArr);
    }
  }, []);
  useEffect(() => {
    const dados = JSON.stringify(data);
    localStorage.setItem('despesas', dados);
  }, [data]);

  return (
    <Provider value={{
      despesas: [data, setData],
      totais: [totais, setTotais],
    }}
    >
      {children}
    </Provider>
  );
};
ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
