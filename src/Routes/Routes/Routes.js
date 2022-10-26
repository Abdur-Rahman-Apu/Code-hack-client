import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";

import PageNotFound from '../../Components/PageNotFound/PageNotFound'
import Main from "../../layout/Main";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: <Home></Home>
            }
        ]

    },
])