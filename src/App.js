import React from 'react';
import './App.css';
import CandyShop from './components/CandyShop';
import './components/CandyShop.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CandyShop />
    </div>
  );
}

export default App;
