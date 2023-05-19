
import ReviewCard from './ReviewCard';
const reviews = [
    {
        profileImage: "https://t4.ftcdn.net/jpg/02/60/75/07/240_F_260750755_0G8ADpXBJx4b00hcPwiajAWdtxQc9o0z.jpg",
        name: "Lara Islam",
        feedback: "Great Dolls! I will ask my mom to buy some more next time."
    },
    {
        profileImage: "https://t4.ftcdn.net/jpg/01/07/84/89/240_F_107848909_hB0IXEr4QEVi73upllIUIDEM1KKA9JVg.jpg",
        name: "Jane Robins",
        feedback: "Nice barbie. Thank you Toyomoy. Bring more dolls like this."
    },
    {
        profileImage: "https://t4.ftcdn.net/jpg/03/09/77/11/240_F_309771133_IkWw1Wm49OAGj0QUosFAm6H3HcWUBf2K.jpg",
        name: "Sarah Ali",
        feedback: "Great dolls! Thank you so much.Hope I will get another next month"
    }

]
const Review = () => {
    return (
        <div>
            <h2 data-aos='fade-left' className=' text-center text-5xl tracking-wide font-bold text-secondary mb-24 pt-24'>Princess Perspective</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center'>
                {reviews.map((review, index) => <ReviewCard key={index} review={review} ></ReviewCard>)}
            </div>
        </div>
    );
};

export default Review;