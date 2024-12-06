import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Campaigns from "../Components/Campaigns";
import Addcampaign from "../Components/Addcampaign";
import UpdateCampaign from "../Components/UpdateCampaign";
import CampaignDetails from "../Components/CampaignDetails";

const router = createBrowserRouter ([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        
        children: [
            {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/campaign')
        },
        {
            path:"/campaigns",
            element:<Campaigns></Campaigns>,
            loader: ()=> fetch('http://localhost:5000/campaign')
        },
        {
            path:"/addCampaign",
            element: <Addcampaign></Addcampaign>
        },
        {
            path: "/updateCampaign",
            element: <UpdateCampaign></UpdateCampaign>
        },
        {
            path: "campaign/:id",
            element: <CampaignDetails></CampaignDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
        }
    ]
    }

])

export default router;