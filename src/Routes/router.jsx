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

const router = createBrowserRouter([

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
                path: "/campaigns",
                element: <Campaigns></Campaigns>,
                loader: () => fetch('http://localhost:5000/campaign')
            },
            {
                path: "/addCampaign",
                element: <PrivateRoute> <Addcampaign></Addcampaign> </PrivateRoute>
            },
            {
                path: "/updateCampaign",
                element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>
            },
            {
                path: "campaign/:id",
                element: <PrivateRoute><CampaignDetails></CampaignDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`)
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
            }
        ]
    }

]);

export default router;
