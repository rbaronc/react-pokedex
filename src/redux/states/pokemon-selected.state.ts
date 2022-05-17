import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPokemon from "../../interfaces/pokemon";

interface IPokemonSelected {
    selected: null | IPokemon;
}

const initialState: IPokemonSelected = { selected: null }

const pokemonSelectedSlice = createSlice({
    name: 'pokemon-selected',
    initialState,
    reducers: {
        setPokemonSelected: (state, action: PayloadAction<IPokemon>) => { state.selected = action.payload; }
    }
});


export const { setPokemonSelected } = pokemonSelectedSlice.actions;
export default pokemonSelectedSlice.reducer;