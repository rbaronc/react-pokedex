import { useDispatch } from 'react-redux';
import  pokemonListedModule from './pokemon-listed.module.scss';
import { setPokemonSelected } from '../../redux/states/pokemon-selected.state';
import { AppDispatch } from '../../redux/store';
import PokeAPIService from '../../services/poke-api-service';

interface IPokemonListedProps {
    pokemonId: number;
    pokemonName: string;
    pokemonImage: string;
}

const PokemonListed = ({pokemonId, pokemonName, pokemonImage}: IPokemonListedProps) => {
    const dispatch: AppDispatch = useDispatch();

    const handleClick = async () => {
        const pokemon = await PokeAPIService.getPokemonByName(pokemonName);
        dispatch(setPokemonSelected(pokemon));
    };

    return(
        <div className={`row pokemon-listed ${pokemonListedModule.pokemonListed}`} onClick={handleClick}>
            <div className={`col-xs-1 col-md-2 col-lg-2 ${pokemonListedModule.id}`}>{ pokemonId }.</div>

            <div className={`col-xs-5 col-md-5 col-lg-4 ${pokemonListedModule.name}`}>{ pokemonName }</div>

            <div className={`col-xs-6 col-md-5 col-lg-6 ${pokemonListedModule.image}`}>
                <img src={pokemonImage} alt="" />
            </div>
        </div>
    );
};

export default PokemonListed;
