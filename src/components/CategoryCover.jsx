import { Parallax } from "react-parallax";

const CategoryCover = ({ bannerImg, title, recipe }) => {
  return (
    <Parallax
      // blur={{ min: -5, max: 5 }}
      bgImage={bannerImg}
      bgImageAlt="banner"
      strength={200}
    >
      <div className="flex justify-center items-center max-h-[650px] bg-cover bg-center h-screen">
        <div className="w-5/6 sm:w-4/6 text-white text-center bg-black/50 py-10 px-6 sm:py-16 sm:px-20 lg:py-20 lg:px-24">
          <h1 className="text-lg sm:text-3xl lg:text-[42px] font-Cinzel font-bold">
            {title}
          </h1>
          <p className="font-Inter font-medium text-sm sm:text-base mt-3">
            {recipe}
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default CategoryCover;
