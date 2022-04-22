import Pokemon from "../models/Pokemon";
import axios from "axios";
import { ISimplifiedPokemon, IPokemonList, IPokeAPIResponse} from './interfaces/poke-api-service';
import { IRawPokemon } from "./interfaces/raw-pokemon";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

let previousPage = null;
let nextPage = null;

const PokeAPIService = {        
    getPokemonList: async (): Promise<ISimplifiedPokemon[]> => {
        const apiResponse: IPokeAPIResponse<IPokemonList> = await axios.get<IPokemonList>(BASE_URL);
        const pokemonList = apiResponse.data;

        previousPage = pokemonList.previous;
        nextPage = pokemonList.next;

        return apiResponse.data.results;
    },

    getPokemon: async(pokemonName: string): Promise<Pokemon> => {
        const apiResponse: IPokeAPIResponse<IRawPokemon> = await axios.get<IRawPokemon>(`${BASE_URL}${pokemonName}`);
        const rawPokemon = apiResponse.data;

        return new Promise((resolve) => {
            resolve(new Pokemon(
                rawPokemon.id,
                rawPokemon.name,
                rawPokemon.sprites.versions['generation-iii']['firered-leafgreen'].front_default
            ));
        });
    }
}

export { PokeAPIService };