import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2'

const PrivateRout = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    if(loading){ 
        return (<div className='flex justify-center items-center h-[calc(100vh-68px)]'><button className="btn bg-orange-400 border-none btn-square loading"></button></div>)
    }
    if(user){
        return children;
    }
    Swal.fire({
        title: 'Login!',
        text: '“You have to log in first to view details”',
        icon: 'error',
        confirmButtonText: 'Login'
      })
    return ( <Navigate to="/login" state={{from:location}} replace></Navigate>)
    
};

export default PrivateRout;