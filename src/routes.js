import React from 'react'
import { useRoutes } from "react-router-dom";
import LANDINGPAGE from './pages/landing/landingPage';
import LOGIN from './pages/login';
import SIGNUP from './pages/signup';
import CONFIRMATIONPAGE from './pages/confirmationpage';
import CART from './pages/cart';
import FOODNEARBY from './pages/foodnearby';
import FREQUENTLYORDER from './pages/frequentlyorder';
import TOPRATED from './pages/toprated'
import VENDOR from './pages/vendor'
import SUPRISEME from './pages/supriseme'
import NUMBERPAGE from './pages/numberpage'
import FoodBuddyDirectory from './pages/foodBuddyDirectory';

export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: <LANDINGPAGE />,
            index: true,
          },


          {
            path: "login",
            element: <LOGIN />,
            index: true,
          },

          {
            path: "signup",
            element: <SIGNUP />,
            index: true,
          },

          {
            path: "confirmationpage",
            element: <CONFIRMATIONPAGE />,
            index: true,
          },

          {
            path: "cart",
            element: <CART />,
            index: true,
          },

          {
            path: "foodnearby",
            element: <FOODNEARBY />,
            index: true,
          },

          {
            path: "frequentlyorder",
            element: <FREQUENTLYORDER />,
            index: true,
          },

          {
            path: "toprated",
            element: <TOPRATED />,
            index: true,
          },

          {
            path: "vendor",
            element: <VENDOR />,
            index: true,
          },

          {
            path: "supriseme",
            element: <SUPRISEME />,
            index: true,
          },
          {
            path: "foodBuddyDirectory",
            element: <FoodBuddyDirectory />,
            index: true,
          },
          {
            path: "numberpage",
            element: <NUMBERPAGE />,
            index: true,
          },
        
    ]);
    return routes;
}