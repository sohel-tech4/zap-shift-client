import image1 from "../../../../assets/live-tracking.png";
import image2 from "../../../../assets/safe-delivery.png";

const Others = () => {
  return (
    <div className="mt-20 p-5 md:p-0">
      <div className="md:flex gap-10 items-center mb-5 bg-gray-100 p-5 rounded-2xl">
        <img src={image1} className="mb-5 flex justify-items-center" alt="" />
        <div className="">
          <h1 className="text-3xl mb-5 font-bold">Live Parcel Tracking</h1>
          <p className="tex-xl">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="md:flex gap-10 items-center mb-5 bg-gray-100 p-5 rounded-2xl">
        <img src={image2} className="mb-5 flex justify-items-center" alt="" />
        <div className="">
          <h1 className="text-3xl mb-5 font-bold">100% Safe Delivery</h1>
          <p className="tex-xl">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="md:flex gap-10 items-center mb-5 bg-gray-100 p-5 rounded-2xl">
        <img src={image2} className="mb-5 flex justify-items-center" alt="" />
        <div className="">
          <h1 className="text-3xl mb-5 font-bold">24/7 Call Center Support</h1>
          <p className="tex-xl">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Others;
