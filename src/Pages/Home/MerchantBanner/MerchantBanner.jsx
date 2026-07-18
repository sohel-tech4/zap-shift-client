import bgWaves from '../../../../assets/be-a-merchant-bg.png';
import courierBox from '../../../../assets/location-merchant.png';

const MerchantBanner = () => {
  return (
    <div className="w-full mx-auto py-8">
      <div 
        className="relative overflow-hidden bg-[#023535] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[400px]"
        style={{
          backgroundImage: `url(${bgWaves})`,
          backgroundPosition: 'top center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Left Side Content */}
        <div className="flex-1 z-10 max-w-2xl text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          
          <p className="text-[#a4c5c5] text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl">
            We offer the lowest delivery charge with the highest value along with 
            100% safety of your product. Pathao courier delivers your parcels in every 
            corner of Bangladesh right on time.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-[#cbe35a] hover:bg-[#b9d047] text-[#023535] font-semibold px-8 py-3 rounded-full transition-colors shadow-sm text-sm md:text-base">
              Become a Merchant
            </button>
            
            <button className="border border-[#cbe35a] text-[#cbe35a] hover:bg-[#cbe35a]/10 font-medium px-6 py-3 rounded-full transition-all text-sm md:text-base">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Side Image/Illustration */}
        <div className="flex-1 flex justify-center md:justify-end z-10 w-full md:w-auto">
          <img 
            src={courierBox} 
            alt="ZapShift Courier Illustration" 
            className="w-full max-w-[320px] md:max-w-[400px] object-contain h-auto opacity-90 filter drop-shadow-md" 
          />
        </div>
      </div>
    </div>
  );
};

export default MerchantBanner;