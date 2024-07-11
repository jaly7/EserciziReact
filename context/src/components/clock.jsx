/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from './languageContext';

const translations = {
    en: 'Current time',
    es: 'Hora actual',
    fr: 'Heure actuelle'
  };
  
  const Clock = () => {
    const { language } = useContext(LanguageContext);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div>
        <p>{translations[language]}: {currentTime}</p>
      </div>
    );
  };
  
  export default Clock;