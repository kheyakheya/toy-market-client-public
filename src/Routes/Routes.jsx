import {createBrowserRouter} from "react-router-dom";
import Register from "../Pages/Register";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddToy from "../Pages/AddToy";
import SingleToy from "../Pages/SingleToy";
import PrivateRout from "./PrivateRout";
import AllToys from "../Pages/AllToys";

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
        },
        {
          path:'/toy/:id',
          element:<PrivateRout><SingleToy></SingleToy></PrivateRout>,
          loader: ({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
          
        },
        {
          path:'/allToy',
          element: <AllToys></AllToys>,
          loader: ()=>fetch('http://localhost:5000/allToys')
        }
      ]
    },
    

    
  ]);

  export default router;