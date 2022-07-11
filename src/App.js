import './App.css';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
