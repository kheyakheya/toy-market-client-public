import { useForm } from 'react-hook-form';

const Update = ({index,toy, handleUpdate}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div>
        <input type="checkbox" id={`my-modal-${index}`} className="modal-toggle" />
        <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold  text-center text-secondary text-2xl">Update Information of {toy.toyName}</h3>
                 <form className='myContainer mt-12' onSubmit={handleSubmit(handleUpdate)}>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                {/* register your input into the hook by invoking the "register" function */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
                    
                    <input className="hidden" placeholder="id" defaultValue={toy._id} {...register("_id")} />

                    <div>
                    <label className='font-bold ml-2 text-secondary'>Price</label>
                    <br />
                    <input className="myInput" defaultValue={toy?.price} placeholder="price bdt" type="number" {...register("price")} />
                    </div>
                    <div>
                     <label className='font-bold ml-2 text-secondary'>Quantity</label> 
                     <br />  
                    <input className="myInput" defaultValue={toy?.quantity} placeholder="quantity" type="number"  {...register("quantity")} />

                    </div>
                    <div>
                    <label className='font-bold ml-2 text-secondary'>Detail Description</label>
                    <br />
                    <input className="myInput w-full" defaultValue={toy?.description} placeholder="description"   {...register("description")} />

                    </div>

                    


                </div>

                <div className="mt-4 flex justify-center">
                    <input className="btn btn-secondary mb-12 mt-6" type="submit" />
                </div>
                
                
            </form>
                <div className="modal-action -mt-24">
                    <label htmlFor={`my-modal-${index}`} className="btn btn-secondary">done!</label>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Update;