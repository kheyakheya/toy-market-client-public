import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toys = useLoaderData();
    const [search,setSearch]=useState("");
    const handleSearch=()=>{
        console.log(search);
    }

    return (
        <div className='bg-pink-100'>
            <h1 className='text-4xl  text-secondary tracking-wide  pt-12 mb-12 text-center font-bold'>All Toys</h1>
           <div className='flex justify-center items-center my-8'>
           <div className="form-control text-center">
                <div className="input-group">
                    <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn border-none bg-[#f36ea5] btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
           </div>

            <div className="myContainer overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-[#f36ea5]'>Seller Name</th>
                            <th className='text-[#f36ea5]'>Toy Name</th>
                            <th className='text-[#f36ea5]'>Category</th>
                            <th className='text-[#f36ea5]'>Price</th>
                            <th className='text-[#f36ea5]'>Qiantity</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {toys?.map((toy, index) =>
                            <tr className='hover' key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy?.sellerName}</td>
                                <td>{toy?.toyName}</td>
                                <td>{toy?.category}</td>
                                <td>{toy?.price}</td>
                                <td>{toy?.quantity}</td>
                                <td>
                                    <Link to={`/toy/${toy._id}`}>
                                        <button className='btn border-none bg-[#f36ea5]'>View Details</button>
                                    </Link>
                                </td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;