import React, { useEffect, useState } from 'react';

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
    return (
        <div>
            <h2>Toys {toys.length}</h2>
            {/* tab */}
            <div className="tab-container text-center">
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
            {/* <div className='mycontainer my-12 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
            {jobs?.map(job=><JobCard key={job._id} job={job}></JobCard>)}
            </div> */}
        </div>
    );
};

export default CategoryToy;