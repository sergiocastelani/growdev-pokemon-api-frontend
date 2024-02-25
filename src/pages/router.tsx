import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { PokedexPage } from "./PokedexPage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/pokedex",
        element: <PokedexPage/>,
    },
]);

  