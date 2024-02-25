import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { pokemonsReducer } from "./slices/pokemons.slice";
import { indexReducer } from "./slices/index.slice";
import { pokedexReducer } from "./slices/pokedex.slice";

const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    index: indexReducer,
    pokedex: pokedexReducer,
});

const rootPersistConfig = {
    key: "pokemons",
    storage: storage,
};

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);