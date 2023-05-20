import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const CategoryToy = () => {
    const [toys,setToys]=useState([]);
    const [active,setActive]=useState('princess')
    useEffect(()=>{
        fetch(`http://localhost:5000/allToys/${active}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[active])


    const handleActive=(status)=>{
        setActive(status);
    }
    // aos
    useEffect(() => {
        AOS.init();
      }, []);


    return (
        <div>
            <h2  data-aos="fade-left" className='text-center text-5xl tracking-wide font-bold text-secondary mt-6 mb-24'>Shop by Category</h2>
            {/* tab */}
            <div className=" myContainer text-center mb-12">
                <div className="text-center w-full m-auto">
                    <div className="tabs d-flex justify-center items-center">
                        <div
                            onClick={() => handleActive("princess")}
                            className={`tab rounded-lg text-xl  font-bold ${active == "princess" ? " bg-[#f36ea5] text-white" : ""
                                }`}
                        >
                            Princess
                        </div>
                        <div
                            onClick={() => handleActive("barbie")}
                            className={`tab rounded-lg text-xl font-bold   ${active == "barbie" ? " bg-[#f36ea5] text-white" : ""
                                }`}
                        >
                            Barbie
                        </div>
                        <div
                            onClick={() => handleActive("singing")}
                            className={`tab rounded-lg text-xl font-bold  ${active == "singing" ? " bg-[#f36ea5] text-white" : ""
                                }`}
                        >
                            Singing
                        </div>
                    </div>
                </div>
            </div>
           
            {/* tab end */}
            <div className='myContainer my-12 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center'>
            {toys?.map(toy=><ToyCard key={toy._id} toy={toy}></ToyCard>)}
            </div>
        </div>
    );
};

export default CategoryToy;