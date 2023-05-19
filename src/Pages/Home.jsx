// import Gallery from 'react-photo-gallery';
import Banner from '../Components/Banner';
import CategoryToy from '../Components/CategoryToy';
import Gallery from '../Components/Gallery/Gallery';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           
           <Gallery></Gallery>
           <CategoryToy></CategoryToy>
          
           {/* <div className='bg-pink-100 my-28'>
           <h2 className=' pt-24 pb-2 text-center text-5xl tracking-wide font-bold text-secondary mt-6 mb-24'>Doll Gallery</h2>
            <div className='myContainer pb-24' >
                
           <Gallery photos={photos} direction={"column"}></Gallery>
            </div>
           </div>
           
           */}
          

        </div>
    );
};

export default Home;