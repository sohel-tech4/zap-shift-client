import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import MerchantBanner from './MerchantBanner/MerchantBanner';
import Others from './Others/Others';
import Services from './Services/Services';
import Works from './Works/Works';

const Home = () => {
    return (
        <div className='md:mx-52'>
            <Banner></Banner>
            <Works></Works>
            <Services></Services>
            <Brands></Brands>
            <Others></Others>
            <MerchantBanner></MerchantBanner>
        </div>
    );
};

export default Home;