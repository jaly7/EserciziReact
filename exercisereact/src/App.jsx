import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Hello from './components/conditionalRendering';

function App() {
  return (
    <div>
      <Hello name="John" age={28} />
    </div>
  );
};

export default App;

