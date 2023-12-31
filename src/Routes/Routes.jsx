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
import ErroePage from "../Pages/ErroePage";
import Blog from "../Pages/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErroePage></ErroePage>,
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
          loader: ({params})=>fetch(`https://assignment-eleven-server-wine.vercel.app/toy/${params.id}`)
          
        },
        {
          path:'/allToy',
          element: <AllToys></AllToys>,
          loader: ()=>fetch('https://assignment-eleven-server-wine.vercel.app/allToys'),

        },
        {
          path:'/myToys',
          element:<PrivateRout><MyToys></MyToys></PrivateRout>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    },
    

    
  ]);

  export default router;