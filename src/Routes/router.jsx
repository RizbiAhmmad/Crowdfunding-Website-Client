import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Campaigns from "../Components/Campaigns";

const router = createBrowserRouter ([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        
        children: [
            {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"/campaigns",
            element:<Campaigns></Campaigns>
        }
    ]
    }

])

export default router;