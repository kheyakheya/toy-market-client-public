import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Update from '../Components/Update';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user, control])
    // upadte
    const handleUpdate = (info) => {
        fetch(`http://localhost:5000/update/${info._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setControl(!control);
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have updated a toy!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    // Delete
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => { 
                        console.log(data)
                        if(data.deletedCount>0){
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        const remaining= myToys.filter(toy=>toy._id !== id)
                        setMyToys(remaining);

                        }
                       
                     })
                
            }
        })


    }
    return (
        <div className='mb-24'>
            <h1 className='text-4xl  text-secondary tracking-wide  pt-12 mb-12 text-center font-bold'>My Toys</h1>

            <div className="myContainer overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-[#f36ea5]'>Seller Name</th>
                            <th className='text-[#f36ea5]'>Seller Name</th>
                            <th className='text-[#f36ea5]'>Toy Name</th>
                            <th className='text-[#f36ea5]'>Category</th>
                            <th className='text-[#f36ea5]'>Price</th>
                            <th className='text-[#f36ea5]'>Rating</th>
                            <th className='text-[#f36ea5]'>Quantity</th>
                            <th className='text-[#f36ea5]'>Detail</th>
                            <th className='text-[#f36ea5]'>Update</th>
                            <th className='text-[#f36ea5]'>Delete</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {myToys?.map((toy, index) =>
                            <tr className='hover' key={toy._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img className='w-14 h-14' src={toy?.photo} alt="" />
                                </td>
                                <td>{toy?.sellerName}</td>
                                <td>{toy?.toyName}</td>
                                <td>{toy?.category}</td>
                                <td>{toy?.price}</td>
                                <td>{toy?.rating}</td>
                                <td>{toy?.quantity}</td>
                                <td>{toy?.description}</td>
                                <td>
                                    <label htmlFor={`my-modal-${index}`} className="btn border-none bg-[#f36ea5]">update</label>
                                    <Update index={index} toy={toy} handleUpdate={handleUpdate}></Update>
                                </td>
                                <td>

                                    <button onClick={() => handleDelete(toy._id)} className='btn border-none bg-[#f36ea5]'>Delete</button>

                                </td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;