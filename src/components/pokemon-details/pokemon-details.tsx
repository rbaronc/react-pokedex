import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPokemonData } from '../../redux/states/pokemon-list.state';
import { AppDispatch, RootState } from '../../redux/store';
import pokemonDetailsModule from './pokemon-details.module.scss';

const PokemonDetails = () => {
    const pokemonSelected = useSelector((state: RootState) => {
        return state.pokemonSelected;
    });
    const dispatch: AppDispatch = useDispatch();
    const flavoredText = 
    pokemonSelected.flavor_text_entries && pokemonSelected.flavor_text_entries.length? 
        pokemonSelected.flavor_text_entries[0].flavor_text : 'No Description';

    useEffect(() => {
        if(pokemonSelected.id) {
            dispatch(setPokemonData(pokemonSelected));
        }
    }, [dispatch]);

    return(
        <div className='col-xs-6 col-sm-6 col-md-8 col-lg-8'>
            <div className={`card ${pokemonDetailsModule.pokemonDetails}`}>
                <img src={pokemonSelected.pokedexListImage} className={`card-img-top ${pokemonDetailsModule.image}`} alt={pokemonSelected.name}/>
                <div className="card-body">
                    <p className={`card-title ${pokemonDetailsModule.name}`}>{ pokemonSelected.name }</p>
                    <p className={`card-text ${pokemonDetailsModule.details}`}>{ flavoredText }</p>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails;