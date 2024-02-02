import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";


const Routes = () => {
    const Route = [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <Home />,
        }, {
            path: "/service",
            element: <Home />,
        }, {
            path: "/logo",
            element: <Home />,
        }, {
            path: "/resume",
            element: <Home />,

        }, {
            path: "/project",
            element: <Home />,
        },
        {
            path: "/contact",
            element: <Home />,
        },
    ]
    const router = createBrowserRouter(Route);
    return (<RouterProvider router={router} />
    )
}

export default Routes;