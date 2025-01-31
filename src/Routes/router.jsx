import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import SportsEquipment from "../components/SportsEquipment";
import AddEquipment from "../components/AddEquipment";
import MyEquipment from "../components/MyEquipment";
import Register from "../components/Register";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Update from "../components/Update";
import Profile from "../components/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
            path: "/",
            element: <HomeLayout />
        },
        {
            path: '/sportsEquipment',
            element: <PrivateRoute><SportsEquipment /></PrivateRoute>,
            loader: ()=> fetch('https://assignment-10-server-sepia-two.vercel.app/equipment')
        },
        {
            path: "/addEquipment",
            element: <PrivateRoute><AddEquipment /></PrivateRoute>
        },
        {
            path: "/myEquipment",
            element: <MyEquipment />,
            loader: ()=> fetch('https://assignment-10-server-sepia-two.vercel.app/equipment')
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update /></PrivateRoute>,
          loader: ({params})=> fetch(`https://assignment-10-server-sepia-two.vercel.app/equipment/${params.id}`)
        },
        {
          path: '/profile',
          element: <Profile />
        }
      ]
    },
  ]);

  
export default router;