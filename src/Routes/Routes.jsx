import {createBrowserRouter} from "react-router-dom";
import Register from "../Pages/Register";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddToy from "../Pages/AddToy";
import SingleToy from "../Pages/SingleToy";
import PrivateRout from "./PrivateRout";
import AllToys from "../Pages/AllToys";
import MyToys from "../Pages/MyToys";

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
          element:<PrivateRout><AddToy></AddToy></PrivateRout>
        },
        {
          path:'/toy/:id',
          element:<PrivateRout><SingleToy></SingleToy></PrivateRout>,
          loader: ({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
          
        },
        {
          path:'/allToy',
          element: <AllToys></AllToys>,
          loader: ()=>fetch('http://localhost:5000/allToys'),

        },
        {
          path:'/myToys',
          element:<PrivateRout><MyToys></MyToys></PrivateRout>
        }
      ]
    },
    

    
  ]);

  export default router;