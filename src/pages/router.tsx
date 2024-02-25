import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { PokedexPage } from "./PokedexPage";
import { PokemonPage } from "./PokemonPage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/pokedex",
        element: <PokedexPage/>,
    },
    {
        path: "/pokemon/:id",
        element: <PokemonPage/>,
    },
]);

  