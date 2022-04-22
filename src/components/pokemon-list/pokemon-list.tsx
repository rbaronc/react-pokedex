import { useState, useEffect } from 'react';
import Pokemon from '../../models/Pokemon';
import { PokeAPIService } from '../../services/poke-api-service';

const PokemonList = () => {
    const [pokemonList, setCurrentPokemonList] = useState<Pokemon[]>([]);

    useEffect(() =>{
        const getPokemons = async() => {
            const rawPokemonList = await PokeAPIService.getPokemonList();

            const pokeList = await Promise.all(
              rawPokemonList.map(async ({name}) => await PokeAPIService.getPokemon(name))
            );
            setCurrentPokemonList(pokeList);
        }

        getPokemons();
    }, []);

    if(pokemonList.length == 0) {
        return (
          <div>
            <p>Pokemon List is empty</p>
          </div>
        );
    }

    return(
      <div>
        {
          pokemonList.length > 0 && pokemonList.map(({id, name, pokedexListImage}) => (
            <div key={id}>
              <p><b>{id}</b></p>
              <p>name: {name}</p>
              <img src={pokedexListImage} alt="" />
            </div>
            ))
        } 
      </div>
    );

    
  }
  
  export default PokemonList;
