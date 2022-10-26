import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";

import PageNotFound from '../../Components/PageNotFound/PageNotFound'
import Register from "../../Components/Register/Register";
import Main from "../../layout/Main";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]

    }
])