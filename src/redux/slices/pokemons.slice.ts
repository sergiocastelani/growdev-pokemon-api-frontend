import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../models/pokemon.model";
import { api } from "../../services/api";

export const loadPokemon = createAsyncThunk('pokemons/loadPokemon', async (id: number) => 
{
    return await api.loadPokemon(id);
});

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [] as (Pokemon | null)[],
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(loadPokemon.fulfilled, (state, action: any) => {
            const newState = [...state];

            if (action.payload)
                newState[action.payload.id] = action.payload;
            else
                newState.splice(action.meta.arg, 1);

            return newState;
        })
    },
});

export const pokemonsReducer = pokemonsSlice.reducer;
export const pokemonsActions = pokemonsSlice.actions;
