import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Proyectos from './components/proyectos';
import Contact from './components/contact';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
