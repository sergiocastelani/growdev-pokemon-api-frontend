import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PokemonPagedList } from "../../models/pokemon.model";

const initialState = {
    allIds: [] as number[],
    pagination: {
        ids: [] as number[],
        total: 0,
        page: 1,
        pageSize: 15,
    } as PokemonPagedList,
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
                allIds: [...state.allIds],
                pagination: {
                    ids,
                    total: state.pagination.total,
                    page: action.payload.page,
                    pageSize: action.payload.pageSize,
                }
            }
        },

        add: (state, action: PayloadAction<number>) => 
        {
console.log(typeof(action.payload));
            const existingIndex = state.allIds.indexOf(action.payload);
            if (existingIndex >= 0)
                return state;

            const newList = [...state.allIds, action.payload];
            const offset = (state.pagination.page - 1) * state.pagination.pageSize;
            const ids = newList.slice(offset, offset + state.pagination.pageSize);

            return {
                allIds: newList,
                pagination: {
                    ids,
                    total: newList.length,
                    page: state.pagination.page,
                    pageSize: state.pagination.pageSize,
                }
            }
        },

        remove: (state, action: PayloadAction<number>) => 
        {
            const existingIndex = state.allIds.indexOf(action.payload);
            if (existingIndex < 0)
                return state;

            const newList = state.allIds.filter( e => e != action.payload );
            const offset = (state.pagination.page - 1) * state.pagination.pageSize;
            const ids = newList.slice(offset, offset + state.pagination.pageSize);

            return {
                allIds: newList,
                pagination: {
                    ids,
                    total: newList.length,
                    page: state.pagination.page,
                    pageSize: state.pagination.pageSize,
                }
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

