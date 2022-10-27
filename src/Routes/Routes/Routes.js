import { createBrowserRouter } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import Courses from "../../Components/Courses/Courses";
import CourseShow from "../../Components/CourseShow/CourseShow";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";

import PageNotFound from '../../Components/PageNotFound/PageNotFound'
import Register from "../../Components/Register/Register";
import CourseLayout from "../../layout/CourseLayout";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/courses',
                element: <CourseLayout></CourseLayout>,
                children: [

                    {
                        path: '/courses',
                        element: <Courses></Courses>
                    }
                ]

            },
        ]

    }
])