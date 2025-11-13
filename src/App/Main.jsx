import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import Router from "./Router.jsx";
import "../App/Style/reset.scss";
import "../App/Style/fonts.scss";
import "../App/Style/global.scss";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router}/>
);