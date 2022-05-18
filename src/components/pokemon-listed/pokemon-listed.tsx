import { useDispatch } from 'react-redux';
import  pokemonListedModule from './pokemon-listed.module.scss';
import { getPokemonDetails } from '../../redux/states/pokemon-selected.state';
import { AppDispatch } from '../../redux/store';

interface IPokemonListedProps {
    pokemonId: number;
    pokemonName: string;
    pokemonImage: string;
    pokemonSpecies: number;
}

const PokemonListed = ({pokemonId, pokemonName, pokemonImage, pokemonSpecies}: IPokemonListedProps) => {
    const dispatch: AppDispatch = useDispatch();

    const handleClick = async () => {
        dispatch(getPokemonDetails(pokemonSpecies));        
    };

    return(
        <div className={`row ${pokemonListedModule.pokemonListed}`} onClick={handleClick}>
            <div className={`col-xs-1 col-md-2 col-lg-2 ${pokemonListedModule.id}`}>{ pokemonId }.</div>

            <div className={`col-xs-5 col-md-5 col-lg-4 ${pokemonListedModule.name}`}>{ pokemonName }</div>

            <div className={`col-xs-6 col-md-5 col-lg-6 ${pokemonListedModule.image}`}>
                <img src={pokemonImage} alt="" />
            </div>
        </div>
    );
};

export default PokemonListed;
