import React from 'react';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header bgColor='red' textColor='blue' />
      <div className='container'>
        <h1 className='title'>MY APP</h1>
      </div>
    </>
  );
};

export default App;
