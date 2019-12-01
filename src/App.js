import React from 'react';
import Layout from './shared/Layout';
import Controller from './components/Controller/Controller';
import Animals from './components/Animals/Animals';

function App() {
  return (
    <Layout>
      <Controller/>
      <Animals/>
    </Layout>
  );
}

export default App;
