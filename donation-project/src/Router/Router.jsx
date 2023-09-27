import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";
import Error from "../Components/Error/Error";
import DonationDetail from "../Components/Home/DonationDetail";
import InformationDetail from "../Components/InformationDetail/InformationDetail";


const createdRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/donation.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/informationDetail',
        element: <InformationDetail></InformationDetail>
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donationCards/:id',
        element: <DonationDetail></DonationDetail>,
        loader:()=> fetch('/donation.json')
      },
    ]
  }
]);

export default createdRouter;