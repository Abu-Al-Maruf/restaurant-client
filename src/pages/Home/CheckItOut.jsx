import checkBgImg from "../../assets/home/check-it-out.jpg";

const CheckItOut = () => {
  return (
    <section
      className="bg-cover bg-center bg-fixed relative pb-28"
      style={{ backgroundImage: `url(${checkBgImg})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-full sm:w-1/3 mx-auto text-center py-10">
          <p className="text-[#D99904] text-lg font-normal italic border-b-4 p-5">
            ---Check it out---
          </p>
          <h2 className="text-base text-white sm:text-xl lg:text-3xl font-normal border-b-4 p-5">
            FROM OUR MENU
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center font-light gap-14 lg:w-4/5 sm:w-11/12 w-4/5 mx-auto">
          <img
            className="max-w-[500px] w-full lg:w-1/2 rounded"
            src={checkBgImg}
            alt=""
          />
          <div className="w-full lg:w-1/2 text-white">
            <p className="text-xl">March 20, 2023</p>
            <h3 className="text-2xl">WHERE CAN I GET SOME?</h3>
            <p className="text-lg">
              Discover a wide variety of dishes crafted with the freshest
              ingredients, inspired by flavors from around the world. Our menu
              offers something for everyone, whether you&apos;re craving classic
              comfort food or adventurous culinary experiences. Indulge in
              carefully curated meals that are sure to satisfy your taste buds.
              Every bite is a journey, designed to bring you joy and comfort,
              from the first taste to the last.
            </p>
            <button className="py-4 px-7 mt-6 rounded-lg font-medium text-white bg-transparent border-0 border-b-4 border-white  transition-all hover:scale-95">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckItOut;
