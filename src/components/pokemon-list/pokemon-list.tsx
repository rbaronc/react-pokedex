import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonList } from '../../redux/states/pokemon-list.state';
import PokemonListed from '../pokemon-listed/pokemon-listed';
import { AppDispatch, RootState } from '../../redux/store';

const PokemonList = () => {
    const pokemonList = useSelector((state: RootState) => {
      return Object.values(state.pokemonList);
    });
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
      dispatch(getPokemonList());
    }, [dispatch]);

    if(pokemonList.length === 0) {
        return (
          <div>
            <p>Pokemon List is empty</p>
          </div>
        );
    }

    return(
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
        <div className='list-group'>
          {
            pokemonList.length > 0 && pokemonList.map(({id, name, pokedexListImage, species}) => (
              <div key={id} className='list-group-item'>
                <PokemonListed pokemonId={id} pokemonName={name} pokemonImage={pokedexListImage} pokemonSpecies={species}/>
              </div>
            ))
          } 
        </div>
      </div>
    );

    
  }
  
  export default PokemonList;
