import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { pokemonsReducer } from "./slices/pokemons.slice";

const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
});

const rootPersistConfig = {
    key: "pokemons",
    storage: storage,
};

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);