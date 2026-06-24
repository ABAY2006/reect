import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Counter from "../pages/counter/Counter";
import NotFound from "../pages/notfound/NotFound";
import Layout from "../layout/Layout";
import Todos from "../pages/todos/Todos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "todos",
                element: <Todos />
            },
            {
                path: "counter",
                element: <Counter />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router