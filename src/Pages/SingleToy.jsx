import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const toy = useLoaderData();
    const { toyName, sellerName, email, photo, price, rating, quantity, description, category } = toy

    return (
        <div className='bg-pink-200'>
            <h2 className=' text-center text-5xl tracking-wide font-bold text-[#f36ea5] pt-24 mb-24'>Toy Details</h2>
            <div className="myContainer hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={toy.photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-12'>
                        <h1 className="text-5xl font-bold text-white">{toyName}</h1>
                        <p className="pt-6 pb-2">Seller Name: {sellerName}</p>
                        <p className="py-2">Email : {email}</p>
                        <p className="py-2">Price : {price}</p>
                        <p className="py-2">Rating : {rating}</p>
                         <p className="py-2">Quantity : {quantity}</p>
                        <p className="py-2">Detail : {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;