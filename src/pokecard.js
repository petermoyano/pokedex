import React from "react";
import pokemons from "./pokemons";
import './pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/'

/** Individual Pokemon card. */
const Pokecard = ({pokeId}) => {
     const pokemon = pokemons.find(ele => ele.id === pokeId); // pokemon object
     return <div className="Pokecard">
         <h3  className="Pokecard-title">{pokemon.name}</h3>
         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`} alt="" />
         <p>Type: {pokemon.type}</p>
         <p>Base experience: {pokemon.base_experience}</p>
         </div>
}
     
export default Pokecard;
