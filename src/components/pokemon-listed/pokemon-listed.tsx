import './pokemon-listed.scss';

interface IPokemonListedProps {
    pokemonId: number;
    pokemonName: string;
    pokemonImage: string;
}


const PokemonListed = ({pokemonId, pokemonName, pokemonImage}: IPokemonListedProps) => {
    return(
        <div className='row pokemon-listed'>
            <div className='col-xs-1 col-md-2 col-lg-2 id'>{ pokemonId }.</div>

            <div className='col-xs-5 col-md-4 col-lg-4 name'>{ pokemonName }</div>

            <div className="col-xs-6 col-md-4 col-lg-4">
                <img src={pokemonImage} alt="" />
            </div>
        </div>
    );
};

export default PokemonListed;
