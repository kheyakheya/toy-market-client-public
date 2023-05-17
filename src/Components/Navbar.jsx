import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const {user,logOut}= useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
        })
        .catch(error=>console.log(error))
    }
    const navItems = <>
        
        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700 font-bold' : 'myMenu')}>Home</NavLink>
        </li>
        <li><NavLink to='/allToy' className={({ isActive }) => (isActive ? 'text-blue-700 font-bold' : 'myMenu')}>All Toys</NavLink>
        </li> 
         {user?.email ? 
        <>
        <li><NavLink to='/myToys' className={({ isActive }) => (isActive ? 'text-blue-700 font-bold' : 'myMenu')}>My Toys</NavLink>
         </li>
        <li><NavLink to='/addToy' className={({ isActive }) => (isActive ? 'text-blue-700 font-bold' : 'myMenu')}>Add Toys</NavLink>
         </li>
        <li><NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-700 font-bold' : 'myMenu')}>Blog</NavLink>
         </li>

        
            <img className='h-12 w-12 -m-3 rounded-full' src={user?.photoURL || 'https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg'} alt="" title={user.displayName} />
        
        <li><Link  className= 'myMenu'><button onClick={handleLogOut}>Logout</button></Link>
        </li>
        </> : <li><NavLink to='/login' className={({ isActive }) => (isActive ? 'text-blue-700 font-bold' : 'myMenu')}>Login</NavLink>
        </li> } 
    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-4 myContainer">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-secondary italic text-2xl">
                    <img className='w-18 h-12' src={logo} alt="" />
                    <p>TOYOMOY</p>
                </Link>
            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="flex space-x-6 text-xl px-1">
                    {navItems}
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;