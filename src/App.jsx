import { useState } from 'react';
import Registro from './components/Registro';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card"> {/* Agrega la clase "card" aquí */}
        <Registro />
      </div>
    </div>
  );
}

export default App;
