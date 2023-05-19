
import Banner from '../Components/Banner';
import CategoryToy from '../Components/CategoryToy';
import Gallery from '../Components/Gallery/Gallery';
import HotDeals from '../Components/HotDeals';
import Review from '../Components/Review';


const Home = () => {
   
    return (
        <div>
           <Banner data-aos="fade"></Banner> 
           <Gallery data-aos="fade-up-right"></Gallery>
           <CategoryToy data-aos="zoom-in"></CategoryToy>
           <Review></Review>
           <HotDeals></HotDeals>
          
           
          

        </div>
    );
};

export default Home;