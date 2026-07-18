
const services = [
  {
    id: 1,
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: "../../../../assets/delivery-van.png",
  },
  {
    id: 2,
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: "../../../../assets/delivery-van.png",
  },
  {
    id: 3,
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: "../../../../assets/delivery-van.png",
  },
  {
    id: 4,
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: "../../../../assets/delivery-van.png",
  },
];

const Works = () => {
    return (
        <div className="">
            <h1 className="text-3xl text-center"> How it Works</h1>
             <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="card bg-[#FFF4F4] border border-[#F8DDDD] rounded-3xl hover:shadow-lg transition"
            >
              <div className="card-body">
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <h2 className="text-xl font-bold mt-3">
                  {service.title}
                </h2>

                <p className="text-gray-500 leading-7">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Works;