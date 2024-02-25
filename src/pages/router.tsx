import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
]);

  