import { Heart, Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';


const ToyCard = ({ toy }) => {
    const myStyles = {
        itemShapes: Heart,
        activeFillColor: '#f36ea5',
        inactiveFillColor: '#f9cfe0'
    }
    const { _id, photo, toyName, price, rating } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-pink-300 shadow-xl">
            <figure><img src={photo} alt="dolls" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>{price} BDT</p>
                <div className='flex items-center'>
                    <Rating style={{ maxWidth: 100 }} value={Math.round(rating)} itemStyles={myStyles} readOnly />
                    <p className='text-xl ms-2'>{rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}>
                    <button className="btn border-none bg-secondary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;