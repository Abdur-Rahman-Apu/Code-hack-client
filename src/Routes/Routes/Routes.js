import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Cart from "../../Components/Cart/Cart"
import Courses from "../../Components/Courses/Courses";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import PageNotFound from '../../Components/PageNotFound/PageNotFound'
import Register from "../../Components/Register/Register";
import Details from "../../Components/Details/Details";
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                element: <CourseLayout></CourseLayout>,
                children: [

                    {
                        path: '/courses',
                        element: <Courses></Courses>
                    },
                    {
                        path: '/courses/course/:id',
                        element: <Details></Details>,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
                    },
                    {
                        path: '/courses/cart/course/:id',
                        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
                    },
                ]

            },
        ]

    }
])