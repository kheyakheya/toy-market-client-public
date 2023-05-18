import {createBrowserRouter} from "react-router-dom";
import Register from "../Pages/Register";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddToy from "../Pages/AddToy";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path: '/addToy',
          element:<AddToy></AddToy>
        }
      ]
    },
    

    
  ]);

  export default router;