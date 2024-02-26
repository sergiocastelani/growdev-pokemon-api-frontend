import { Outlet, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { PokedexPage } from "./PokedexPage";
import { PokemonPage } from "./PokemonPage";
import { TopBar } from "../components/TopBar";

export const appRouter = createBrowserRouter([
    {
        element: (
            <>
                <TopBar/>
                <Outlet/>
            </>
        ),
        children: [
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
        ]
    }
]);

  