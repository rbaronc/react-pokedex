import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IPokemon from "../../interfaces/pokemon";
import PokeAPIService from "../../services/poke-api-service";

interface IPokemonList {
    [key: string]: IPokemon;
};

const initialState: IPokemonList = {};

export const getPokemonList = createAsyncThunk(
    'pokemon-list/getList',
    async () => {
        const pokemonList = await PokeAPIService.getPokemonList();
        return pokemonList;
    }
);

export const pokemonListSlice = createSlice({
    name: 'pokemon-list',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPokemonList.fulfilled, (state, action) => {
            action.payload.forEach(pokemon => {
                if(state[pokemon.name] === undefined) {
                    state[pokemon.name] = pokemon;
                }                
            });
        })
    },
    reducers: {}
});

export default pokemonListSlice.reducer;