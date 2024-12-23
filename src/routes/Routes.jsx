import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../main/Main";
import Home from "../page/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,

            }
        ],
    },
]);