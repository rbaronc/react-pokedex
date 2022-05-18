import IPokemon from "../interfaces/pokemon";
import axios from "axios";
import { ISimplifiedPokemon, IPokemonList, IPokeAPIResponse } from './interfaces/poke-api-service';
import { IRawPokemon } from "./interfaces/raw-pokemon";
import { IRawSpecies } from "./interfaces/raw-pokemon-species";
import IPokemonSpecies from "../interfaces/pokemon-species";
import PokeStringNormalizationService from './poke-string-normalization';

interface ICachedPokemon { [key: string | number]: IPokemon };
interface ICachedPokemonSpecies {[key: number]: IPokemonSpecies};

const BASE_URL = "https://pokeapi.co/api/v2";

let previousPage = null;
let nextPage = null;
const cachedPokemons: ICachedPokemon = {};
const cachedPokemonSpecies: ICachedPokemonSpecies = {};

const getRawPokemonList = async (): Promise<ISimplifiedPokemon[]> => {
    const apiResponse: IPokeAPIResponse<IPokemonList> = await axios.get<IPokemonList>(`${BASE_URL}/pokemon`);
    const pokemonList = apiResponse.data;

    previousPage = pokemonList.previous;
    nextPage = pokemonList.next;

    return apiResponse.data.results;
};

const getPokemonById = async(pokemonId: number): Promise<IPokemon> => {
    if(cachedPokemons[pokemonId] !== undefined) {
        return new Promise( (resolve) => {
            resolve(cachedPokemons[pokemonId]);
        });
    }        

    const apiResponse: IPokeAPIResponse<IRawPokemon> = await axios.get<IRawPokemon>(`${BASE_URL}/pokemon/${pokemonId}`);
    const rawPokemon = apiResponse.data;
    const species = parseInt(rawPokemon.species.url.split('/').at(-2) || '');

    return new Promise((resolve) => {
        const pokemon = {
            id: rawPokemon.id,
            name: rawPokemon.name,
            pokedexListImage: rawPokemon.sprites.versions['generation-iii']['firered-leafgreen'].front_default,
            species
        }

        cachedPokemons[pokemonId] = pokemon;
        cachedPokemons[rawPokemon.name] = pokemon;

        resolve(cachedPokemons[pokemonId]);
    });
};

const getPokemonByName = async(pokemonName: string): Promise<IPokemon> => {
    if(cachedPokemons[pokemonName] !== undefined) {
        return new Promise( (resolve) => {
            resolve(cachedPokemons[pokemonName]);
        });
    }        

    const apiResponse: IPokeAPIResponse<IRawPokemon> = await axios.get<IRawPokemon>(`${BASE_URL}/pokemon/${pokemonName}`);
    const rawPokemon = apiResponse.data;
    const species = parseInt(rawPokemon.species.url.split('/').at(-2) || '');

    const pokemon = {
        id: rawPokemon.id,
        name: rawPokemon.name,
        pokedexListImage: rawPokemon.sprites.versions['generation-iii']['firered-leafgreen'].front_default,
        species 
    }

    cachedPokemons[pokemonName] = pokemon;
    cachedPokemons[rawPokemon.id] = pokemon;

    return cachedPokemons[pokemonName];
};


const getPokemonSpeciesDataById = async(pokemonSpecies: number): Promise<IPokemonSpecies> => {
    if(cachedPokemonSpecies[pokemonSpecies] !== undefined) {
        return new Promise((resolve) => {
            resolve(cachedPokemonSpecies[pokemonSpecies]);
        });
    }

    const apiResponse: IPokeAPIResponse<IRawSpecies> = await axios.get<IRawSpecies>(`${BASE_URL}/pokemon-species/${pokemonSpecies}`);
    const rawSpecies = apiResponse.data;
    const genera = rawSpecies.genera.find(g => g.language.name === 'en');
    const genus = (genera?.genus)?.replace('/n', '') || '';
    const { evolves_from_species, is_baby, is_legendary, is_mythical, flavor_text_entries } = rawSpecies;
    const normalizedFlavorTextEntries = flavor_text_entries.map(entry => {
        return {...entry, flavor_text: PokeStringNormalizationService.normalizePokemonDetails(entry.flavor_text)};
    });

    cachedPokemonSpecies[pokemonSpecies] = { 
        genus,
        evolves_from_species, 
        is_baby,
        is_legendary,
        is_mythical,
        flavor_text_entries: normalizedFlavorTextEntries
    };
    
    return cachedPokemonSpecies[pokemonSpecies];
};

const PokeAPIService = {
    getPokemonList: async (): Promise<IPokemon[]> => {
        const rawPokemonList = await getRawPokemonList();
        return Promise.all(
            rawPokemonList.map(async ({name}) => await getPokemonByName(name))
        );
    },
    getPokemonByName,
    getPokemonSpeciesDataById,
    getPokemonById
};

export default PokeAPIService;