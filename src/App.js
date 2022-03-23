import React from 'react';
import Pokedex from './pokedex';
import pokemons from'./pokemons';

import './App.css';

function App() {
  return (
    <Pokedex className="Pokedex" pokemons={pokemons}/>
  );
}

export default App;
