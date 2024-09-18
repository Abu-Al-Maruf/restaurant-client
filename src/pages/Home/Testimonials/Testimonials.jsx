import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";
import quote from "../../../assets/home/quote.svg";
import StarRatings from "react-star-ratings";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="pb-20 lg:w-4/5 sm:w-11/12 w-full mx-auto">
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        // Use percentage-based padding to make it responsive
        style={{ paddingLeft: "2.5%", paddingRight: "2.5%" }}
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="w-full text-center px-4 lg:px-10 flex flex-col items-center gap-5">
              <StarRatings
                rating={review.rating}
                starRatedColor="#CD9003"
                numberOfStars={5}
                name="rating"
              />
              <img
                className="max-w-[50px] md:max-w-[100px]"
                src={quote}
                alt=""
              />
              <p className="text-[#444] text-base md:text-lg leading-6 md:leading-8 px-2">
                {review.details}
              </p>
              <h3 className="text-xl md:text-3xl text-[#CD9003] uppercase">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
