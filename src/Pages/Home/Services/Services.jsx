import deliveryIcon from "../../../../assets/delivery-van.png";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    featured: false,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    featured: true,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    featured: false,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    featured: false,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    featured: false,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    featured: false,
  },
];

const Services = () => {
  return (
    <section className="bg-[#073B43] rounded-[30px] py-16 px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-white">Our Services</h2>

        <p className="text-gray-300 mt-4 text-sm leading-7">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments—we deliver on
          time, every time.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-base-100 hover:bg-lime-300 shadow-none rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="card-body items-center text-center px-8 py-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <img
                  src={deliveryIcon}
                  alt=""
                  className="w-9 h-9 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#073B43]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-6 mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
