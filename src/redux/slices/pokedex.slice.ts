import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PokemonPagedList } from "../../models/pokemon.model";

export interface PokedexState extends PokemonPagedList
{
    allIds: number[],
};

const initialState: PokedexState = {
    allIds: [],
    ids: [],
    total: 0,
    page: 1,
    pageSize: 20,
};

const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<ChangePageParams>) => 
        {
            const offset = (action.payload.page - 1) * action.payload.pageSize;
            const ids = state.allIds.slice(offset, offset + action.payload.pageSize);

            return {
                ...state,
                ids,
                page: action.payload.page,
                pageSize: action.payload.pageSize,
            }
        },

        add: (state, action: PayloadAction<number>) => 
        {
            const existingIndex = state.allIds.indexOf(action.payload);
            if (existingIndex >= 0)
                return state;

            const newList = [...state.allIds, action.payload];
            const offset = (state.page - 1) * state.pageSize;
            const ids = newList.slice(offset, offset + state.pageSize);
            return {
                ...state,
                allIds: newList,
                total: newList.length,
                ids,
            }
        },

        remove: (state, action: PayloadAction<number>) => 
        {
            const existingIndex = state.allIds.indexOf(action.payload);
            if (existingIndex < 0)
                return state;

            const newList = state.allIds.filter( e => e != action.payload );
            const offset = (state.page - 1) * state.pageSize;
            const ids = newList.slice(offset, offset + state.pageSize);
            return {
                ...state,
                allIds: newList,
                total: newList.length,
                ids,
            }
        },
    },
});

export const pokedexReducer = pokedexSlice.reducer;
export const pokedexActions = pokedexSlice.actions;

export interface ChangePageParams {
    page: number, 
    pageSize: number
}

