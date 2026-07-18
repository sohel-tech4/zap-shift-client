import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import amazon from "../../../../assets/brands/amazon.png";
import amazon_vector from "../../../../assets/brands/amazon_vector.png";
import casio from "../../../../assets/brands/casio.png";
import moonstar from "../../../../assets/brands/moonstar.png";
import randstad from "../../../../assets/brands/randstad.png";
import star from "../../../../assets/brands/star.png";
import start_people from "../../../../assets/brands/start_people.png";

const Brands = () => {
  const AllBrands = [
    amazon,
    amazon_vector,
    casio,
    moonstar,
    randstad,
    star,
    start_people,
  ];

  return (
    <div className="my-7">
      <h1 className="text-3xl text-center my-7 font-bold">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true} // Infinite loop
        speed={500} // Slide transition speed (1 second)
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true, // Pause when hovering
        }}
        modules={[Pagination, Autoplay]}
      >
        {AllBrands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand} className="mx-auto gap-0 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
