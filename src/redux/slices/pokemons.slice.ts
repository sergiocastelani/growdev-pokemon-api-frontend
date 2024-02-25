import { createSlice } from "@reduxjs/toolkit";
import { Pokemons } from "../../models/pokemons.model";

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [] as Pokemons[],
    reducers: {
    }
});

export const pokemonsReducer = pokemonsSlice.reducer;
export const pokemonsActions = pokemonsSlice.actions;
