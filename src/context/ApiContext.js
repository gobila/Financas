import { createContext } from 'react';

const ApiContext = createContext({
  despesas: [],
  totais: [],
});

export default ApiContext;
