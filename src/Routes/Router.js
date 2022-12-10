import { createBrowserRouter } from "react-router-dom";
import AddBlogs from "../Dashboard/AddBlogs/AddBlogs";
import Dashboard from "../Dashboard/Dashboard";
import ErrorElement from "../Error/ErrorElement";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Hero from "../Pages/Hero/Hero";
import Main from "../Pages/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorElement></ErrorElement>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Hero></Hero>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard/addblogs',
                        element: <AddBlogs></AddBlogs>
                    }
                ]
            }
        ]
    }
])

export default router;