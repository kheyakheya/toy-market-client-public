import { Link } from 'react-router-dom';

const ErroePage = () => {
    
        
        return (
            <div className='relative'>
                <img className='h-[100vh] w-full' src="https://img.freepik.com/premium-photo/error-page-found-system-updates-system-maintenance-installation-programs-concept_73903-948.jpg?w=2000" alt="" />
               <Link to='/'><button className=' absolute bg-pink-300 border-none top-[25%] left-[45%] btn btn-secondary'>Go Back Home</button></Link> 
            </div>
        );
};

export default ErroePage;