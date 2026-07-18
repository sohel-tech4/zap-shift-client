import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import Services from './Services/Services';
import Works from './Works/Works';

const Home = () => {
    return (
        <div className='md:mx-52'>
            <Banner></Banner>
            <Works></Works>
            <Services></Services>
            <Brands></Brands>
        </div>
    );
};

export default Home;