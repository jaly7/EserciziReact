import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Clock from './components/events';

function App(){
  function checkTime () {
    const time = new Date().toLocaleTimeString();
    alert(`ORA ATTUALE: ${time}`);
  };

  return (
    <div>
      <Clock onBtnClick={checkTime} />
    </div>
  );
};

export default App;
