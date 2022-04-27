import  pokemonListedModule from './pokemon-listed.module.scss';

interface IPokemonListedProps {
    pokemonId: number;
    pokemonName: string;
    pokemonImage: string;
}


const PokemonListed = ({pokemonId, pokemonName, pokemonImage}: IPokemonListedProps) => {
    console.log(pokemonListedModule);
    return(
        <div className={`row pokemon-listed ${pokemonListedModule.pokemonListed}`}>
            <div className={`col-xs-1 col-md-2 col-lg-2 ${pokemonListedModule.id}`}>{ pokemonId }.</div>

            <div className={`col-xs-5 col-md-5 col-lg-4 ${pokemonListedModule.name}`}>{ pokemonName }</div>

            <div className={`col-xs-6 col-md-5 col-lg-6 ${pokemonListedModule.image}`}>
                <img src={pokemonImage} alt="" />
            </div>
        </div>
    );
};

export default PokemonListed;
