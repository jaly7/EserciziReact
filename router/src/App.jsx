/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import './App.css'


function App() {
  function handleHome() {
    Home();
    Navigate('/home')
  }
  function handleAbout() {
    About();
    Navigate('/about')
  }
  function handleContact() {
    Contact();
    Navigate('/contact')
  }
  return (
    <div className='main'>
      <a className='uno' onClick={handleHome} href="/home">HOME</a>
      <a className='due' onClick={handleAbout} href="/about">ABOUT</a>
      <a className='tre' onClick={handleContact} href="/contact">CONTACT</a>
    <Router>     
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
