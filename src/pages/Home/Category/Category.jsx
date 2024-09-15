import SectionTitle from "../../../components/SectionTitle";
import bgImg from "../../../assets/home/chef-service.jpg";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Category = () => {
  return (
    <section className="lg:w-4/5 sm:w-11/12 w-4/5  mx-auto py-10">
      {/* top  */}
      <div>
        <SectionTitle
          heading={"ORDER ONLINE"}
          subHeading={"---From 11:00am to 10:00pm---"}
        />
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img src={slide1} />
              <h3
                className="text-white  text-3xl font-Cinzel absolute bottom-5 left-1/2 transform -translate-x-1/2"
                style={{ textShadow: "black 3px 1px 0px " }}
              >
                Salads
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={slide2} />
              <h3
                className="text-white  text-3xl font-Cinzel absolute bottom-5 left-1/2 transform -translate-x-1/2"
                style={{ textShadow: "black 3px 1px 0px " }}
              >
                Soups
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={slide3} />
              <h3
                className="text-white  text-3xl font-Cinzel absolute bottom-5 left-1/2 transform -translate-x-1/2"
                style={{ textShadow: "black 3px 1px 0px " }}
              >
                Pizzas
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={slide4} />
              <h3
                className="text-white  text-3xl font-Cinzel absolute bottom-5 left-1/2 transform -translate-x-1/2"
                style={{ textShadow: "black 3px 1px 0px " }}
              >
                Cakes
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={slide5} />
              <h3
                className="text-white  text-3xl font-Cinzel absolute bottom-5 left-1/2 transform -translate-x-1/2"
                style={{ textShadow: "black 3px 1px 0px " }}
              >
                desserts
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* bottom  */}
      <div
        className="relative w-full mt-20 h-[550px] bg-cover bg-center bg-fixed flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>{" "}
        {/* Overlay */}
        <div className="relative w-11/12 md:w-3/4 bg-white py-10 px-6 md:py-16 md:px-12 lg:py-24 lg:px-16 text-center">
          <h2 className="font-Cinzel text-3xl md:text-4xl text-[#151515]">
            Bistro Boss
          </h2>
          <p className="mt-2 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Category;
