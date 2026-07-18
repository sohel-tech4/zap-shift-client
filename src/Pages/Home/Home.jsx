import Banner from './Banner/Banner';
import Services from './Services/Services';
import Works from './Works/Works';

const Home = () => {
    return (
        <div className='md:mx-52'>
            <Banner></Banner>
            <Works></Works>
            <Services></Services>
        </div>
    );
};

export default Home;