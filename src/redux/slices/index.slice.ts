import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import { PokemonPagedList } from "../../models/pokemon.model";

export interface ChangePageParams {
    page: number, 
    pageSize: number
}
export const changeIndexList = createAsyncThunk('index/changeIndexList', async (params: ChangePageParams) => 
{
    return await api.loadIndexList(params.page, params.pageSize);
});

const initialState : PokemonPagedList = {
    ids: [],
    total: 0,
    page: 1,
    pageSize: 15
}

const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(changeIndexList.fulfilled, (_, action: PayloadAction<PokemonPagedList>) => {
            return action.payload;
        })
    },
});

export const indexReducer = indexSlice.reducer;
export const indexActions = indexSlice.actions;
