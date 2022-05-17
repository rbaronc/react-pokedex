import IPokemon from "../interfaces/pokemon";
import axios from "axios";
import { ISimplifiedPokemon, IPokemonList, IPokeAPIResponse} from './interfaces/poke-api-service';
import { IRawPokemon } from "./interfaces/raw-pokemon";
import { IRawSpecies } from "./interfaces/pokemon-species";

interface ICachedPokemon { [key: string | number]: IPokemon };

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

let previousPage = null;
let nextPage = null;
let cachedPokemons: ICachedPokemon = {};

const getRawPokemonList = async (): Promise<ISimplifiedPokemon[]> => {
    const apiResponse: IPokeAPIResponse<IPokemonList> = await axios.get<IPokemonList>(BASE_URL);
    const pokemonList = apiResponse.data;

    previousPage = pokemonList.previous;
    nextPage = pokemonList.next;

    return apiResponse.data.results;
}

const getPokemonByName = async(pokemonName: string): Promise<IPokemon> => {
    if(cachedPokemons[pokemonName] !== undefined) {
        return new Promise( (resolve) => {
            resolve(cachedPokemons[pokemonName]);
        });
    }        

    const apiResponse: IPokeAPIResponse<IRawPokemon> = await axios.get<IRawPokemon>(`${BASE_URL}${pokemonName}`);
    const rawPokemon = apiResponse.data;

    return new Promise((resolve) => {
        const pokemon = {
            id: rawPokemon.id,
            name: rawPokemon.name,
            pokedexListImage: rawPokemon.sprites.versions['generation-iii']['firered-leafgreen'].front_default
        }

        cachedPokemons[pokemonName] = pokemon;
        cachedPokemons[rawPokemon.id] = pokemon;

        resolve(cachedPokemons[pokemonName]);
    });
}


const getPokemonSpeciesById = async(pokemonSpecies: number) => {
    const apiResponse: IPokeAPIResponse<IRawSpecies> = await axios.get<IRawSpecies>(`${BASE_URL}${pokemonSpecies}`);
    const rawSpecies = apiResponse.data;
}

const PokeAPIService = {
    getPokemonList: async (): Promise<IPokemon[]> => {
        const rawPokemonList = await getRawPokemonList();
        return Promise.all(
            rawPokemonList.map(async ({name}) => await getPokemonByName(name))
        );
    },
    getPokemonByName,

}

export default PokeAPIService;