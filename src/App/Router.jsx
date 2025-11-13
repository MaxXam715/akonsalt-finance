import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Home from "@Pages/Home/Home.jsx";
import PageNotFound from "@Pages/PageNotFound/PageNotFound.jsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "*",
                element: <PageNotFound/>
            }
        ]
    }
]);

export default Router;