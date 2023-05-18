import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Providers/AuthProvider';


const AddToy = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className=' bg-pink-200'>

            <h1 className='text-4xl  text-secondary tracking-wide  pt-12 mb-12 text-center font-bold'>Add A Toy</h1>
            {/* input fields */}
            <form className='myContainer my-12' onSubmit={handleSubmit(onSubmit)}>
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
                    <input className="myInput" placeholder="description"   {...register("price")} />

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