const HeroCover = ({ bannerImg, title, desc }) => {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="font-Cinzel text-white text-center bg-black/50 py-12 px-6 sm:py-20 sm:px-16 lg:py-28 lg:px-80">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold">{title}</h1>
        <p className="text-lg sm:text-xl font-semibold mt-3">{desc}</p>
      </div>
    </div>
  );
};

export default HeroCover;
