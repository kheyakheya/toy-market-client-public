import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2'
import useTitle from '../hooks/useTitle';



const AddToy = () => {
    useTitle('AddToy');
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = toy => {
        console.log(toy);
        fetch('https://assignment-eleven-server-wine.vercel.app/allToys',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(toy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'You have added a toy!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
           
        })

    }
    return (
        <div className=' bg-pink-100'>

            <h1 className='text-4xl  text-secondary tracking-wide  pt-12 mb-12 text-center font-bold'>Add A Toy</h1>
            {/* input fields */}
            <form className='myContainer ' onSubmit={handleSubmit(onSubmit)}>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                {/* register your input into the hook by invoking the "register" function */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-12">


                    <input className="myInput" placeholder="Toy Name"  {...register("toyName")} />
                    <input className="myInput" placeholder="Seller Name" defaultValue={user?.displayName} {...register("sellerName")} />
                    <input className="myInput" type='email' placeholder="email" defaultValue={user?.email} {...register("email")} />
                    <input className="myInput" type='url' placeholder="photo url"  {...register("photo")} />
                    <input className="myInput" placeholder="price bdt" type="number" {...register("price", { required: true })} />
                    <input className="myInput" placeholder="rating"  {...register("rating", { required: true })} />
                    <input className="myInput" placeholder="quantity" type="number"  {...register("quantity", { required: true })} />
                    <input className="myInput" placeholder="description"   {...register("description")} />

                    <select className="p-4 m-2 drop-shadow-xl rounded-md" {...register("category")}>
                        <option value="princess">Princess</option>
                        <option value="barbie">Barbie</option>
                        <option value="singing">Singing</option>
                    </select>


                </div>

                <div className="mt-4 flex justify-center">
                    <input className="btn btn-secondary mb-12 mt-6" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;