import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IPokemon from "../../interfaces/pokemon";
import PokeAPIService from "../../services/poke-api-service";

export const getPokemonDetails = createAsyncThunk(
    'pokemon-selected/getSelectedPokemon',
    async (speciesId: number) => {
        const pokemonSpecies = await PokeAPIService.getPokemonSpeciesDataById(speciesId);
        const pokemon = await PokeAPIService.getPokemonById(speciesId);

        return { ...pokemon, ...pokemonSpecies };
    }
);

const initialState: IPokemon = {
    id: 0,
    name: '',
    pokedexListImage: '',
    species: 0
};

const pokemonSelectedSlice = createSlice({
    name: 'pokemon-selected',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
            state = { ...action.payload };
            return state;
        })
    }
});

export default pokemonSelectedSlice.reducer;