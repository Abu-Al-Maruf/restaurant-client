const CategoryMenu = ({ menu }) => {
  return (
    <section className="py-10 lg:w-4/5 sm:w-11/12 w-4/5 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-2 sm:gap-5 ">
        {menu?.map((menu) => (
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
      <div className="w-full flex justify-center mt-12 ">
        <button className="py-4 px-7 rounded-lg font-medium text-[#1F2937] bg-transparent border-0 border-b-4 border-black transition-transform duration-300 ease-in-out  hover:scale-95  ">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default CategoryMenu;
