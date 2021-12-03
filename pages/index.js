import React from 'react';
import styles from '../styles/Home.module.css';
import FormWallet from '../src/components/Form';
import Table from '../src/components/Tabelas';
import Header from '../src/components/Header';
import Total from '../src/components/Total';

const Home = function () {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Header />
        <FormWallet />
        <Total />
        <Table />
      </main>
    </div>
  );
};

export default Home;
