/* eslint-disable no-unused-vars */

import './App.css'
import React, { useContext } from 'react';
import { LanguageProvider, LanguageContext } from './components/languageContext';
import Clock from './components/clock';

const App = () => {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Clock />
    </LanguageProvider>
  );
};

const LanguageSelector = () => {
  const { changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
    </select>
  );
};

export default App;