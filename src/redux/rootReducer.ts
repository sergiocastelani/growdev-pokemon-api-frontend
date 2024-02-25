import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { pokemonsReducer } from "./slices/pokemons.slice";
import { indexReducer } from "./slices/index.slice";

const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    index: indexReducer,
});

const rootPersistConfig = {
    key: "pokemons",
    storage: storage,
};

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);