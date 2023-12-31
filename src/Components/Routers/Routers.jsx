import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Main/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import CardSection from "../Pages/CardSection/CardSection";
import Dinning from "../Pages/Dinning/Dinning";
import Entertainment from "../Pages/Entertainment/Entertainment";
import Food from "../Pages/Food/Food";
import MyBooking from "../Pages/MyBooking/MyBooking";
import Booking from "../Pages/Booking/Booking";
import Order from "../Pages/Order/Order";
import MyOrder from "../Pages/MyOrder/MyOrder";
import DinningExplore from "../Pages/Dinning/DinningExplore";

const router = createBrowserRouter([
    {
      path: "/",
      element:   <Main></Main> ,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/Login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/Stays',
            element: <CardSection></CardSection>
        },
        {
            path: '/Dinning',
            element: <Dinning></Dinning>
        },
        {
            path: '/Entertainment',
            element: <Entertainment></Entertainment>
        },
        {
            path: '/Foods',
            element: <Food></Food>
        },
        {
            path: '/rooms/:id',
            element: <Booking></Booking>,
            loader:  ({params}) => fetch(`https://royal-zamaluxe-hotel-server.vercel.app/rooms/${params.id}`),
            
        },
        {
            path: '/Foods/:id',
            element: <Order></Order>,
            loader:  ({params}) => fetch(`https://royal-zamaluxe-hotel-server.vercel.app/Foods/${params.id}`),
            
        },
        {
            path: '/myBooking',
            element: <MyBooking></MyBooking>
        },
        {
            path: '/myOrder',
            element: <MyOrder></MyOrder>
        },
        {
            path: '/dinning/:id',
            element: <DinningExplore></DinningExplore>,
            loader:  ({params}) => fetch(`https://royal-zamaluxe-hotel-server.vercel.app/dinning/${params.id}`),
        },


      ]
    },
   
]);

export default router;