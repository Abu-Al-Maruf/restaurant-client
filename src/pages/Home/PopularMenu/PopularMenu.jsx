import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

const PopularMenu = () => {
  const [popularMenu, setPopularMenu] = useState([]);
  console.log(popularMenu);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filterMenu = data.filter((menu) => menu.category === "popular");
        setPopularMenu(filterMenu);
      });
  }, []);

  return (
    <section className="lg:w-4/5 sm:w-11/12 w-4/5 mx-auto py-10">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-2 sm:gap-5">
        {popularMenu.map((menu) => (
          <div key={menu._id} className="flex items-center gap-7">
            <img
              className="w-28 h-24 rounded-e-full rounded-bl-full"
              src={menu.image}
              alt=""
            />
            <div>
              <h3 className="flex justify-between font-Cinzel text-lg font-medium text-[#151515]">
                {menu.name} ------------------{" "}
                <span className="font-Inter text-[#BB8506]">
                  ${menu.price}{" "}
                </span>
              </h3>
              <p>{menu.recipe}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-12">
        <button className="py-4 px-7 rounded-lg font-medium text-[#1F2937] bg-transparent border-0 border-b-4 border-black transition-transform duration-300 ease-in-out  hover:scale-95  ">
          View Full Menu
        </button>
      </div>

      <div className="bg-black py-12 md:py-16 lg:py-24 mt-16 md:mt-24 flex justify-center font-semibold text-xl md:text-2xl lg:text-5xl text-white">
        <h2>Call Us: +88 0192345678910</h2>
      </div>
    </section>
  );
};

export default PopularMenu;
