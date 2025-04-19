import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Campaigns from "../Components/Campaigns";
import Addcampaign from "../Components/Addcampaign";
import UpdateCampaign from "../Components/UpdateCampaign";
import CampaignDetails from "../Components/CampaignDetails";
import MyDonations from "../Components/MyDonations";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import MyCampaign from "../Components/MyCampaign";
import ErrorPages from "../Components/ErrorPages";

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://tulip-server.vercel.app/campaign')
            },
            {
                path: "/campaigns",
                element: <Campaigns></Campaigns>,
                loader: () => fetch('https://tulip-server.vercel.app/campaign')
            },
            {
                path: "/addCampaign",
                element: <PrivateRoute> <Addcampaign></Addcampaign> </PrivateRoute>
            },
            {
                path: "/updateCampaign/:id",
                element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tulip-server.vercel.app/campaign/${params.id}`)
                
              
                
            },
            {
                path: "campaign/:id",
                element: <PrivateRoute><CampaignDetails></CampaignDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://tulip-server.vercel.app/campaign/${params.id}`)
            },
            {
                
                path: "/myDonations",
                element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
               
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path:"/myCampaign",
                element:<PrivateRoute><MyCampaign></MyCampaign></PrivateRoute> 
            }
        ]
    }

]);

export default router;
