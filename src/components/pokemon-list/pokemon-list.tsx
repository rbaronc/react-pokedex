import { useState, useEffect } from 'react';
import Pokemon from '../../models/Pokemon';
import { PokeAPIService } from '../../services/poke-api-service';
import PokemonListed from '../pokemon-listed/pokemon-listed';

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

    if(pokemonList.length === 0) {
        return (
          <div>
            <p>Pokemon List is empty</p>
          </div>
        );
    }

    return(
      <div className='list-group'>
          {
            pokemonList.length > 0 && pokemonList.map(({id, name, pokedexListImage}) => (
              <div key={id} className='list-group-item'>
                <PokemonListed pokemonId={id} pokemonName={name} pokemonImage={pokedexListImage}/>
              </div>
              ))
          } 
        </div>
    );

    
  }
  
  export default PokemonList;
