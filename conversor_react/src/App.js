import React from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./components/Conversor"

function App() {
  return (
    <div className="App">
      <h2>Currency Converter with <span>React.js</span></h2>
      <div className="linha">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
      <Conversor moedaA="EUR"moedaB="BRL"></Conversor>
      <Conversor moedaA="EUR"moedaB="BRL"></Conversor>
      </div>

      <div className="linha">
      <Conversor moedaA="GBP"moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL"moedaB="GBP"></Conversor>
      </div>
      <div className="attention">
        <p>Please, to use this conversor use dot notation.</p> 
      </div> 
    </div>
  );
}

export default App;
