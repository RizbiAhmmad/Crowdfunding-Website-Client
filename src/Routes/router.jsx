import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Campaigns from "../Components/Campaigns";
import Addcampaign from "../Components/Addcampaign";
import UpdateCampaign from "../Components/UpdateCampaign";

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
        },
        {
            path:"/addCampaign",
            element: <Addcampaign></Addcampaign>
        },
        {
            path: "/updateCampaign",
            element: <UpdateCampaign></UpdateCampaign>
        }
    ]
    }

])

export default router;