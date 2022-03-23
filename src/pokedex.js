import React from "react";
import Pokecard from './pokecard';
import './pokedex.css';


const Pokedex = (props) => {
// props = {pokemons: [{},{},{}...]}
    return (
        <>
        <h1>Test</h1>
        {props.pokemons.map(pokemon => <Pokecard key={pokemon.id} pokeId={pokemon.id} />)}
        </>
    )
}
export default Pokedex;