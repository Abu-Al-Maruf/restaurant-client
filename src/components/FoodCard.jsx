const FoodCard = ({ item }) => {
    const { name, recipe, image } = item;
  
    return (
      <div className="flex flex-col relative rounded max-w-[420px] items-center text-center bg-[#F3F3F3]">
        <img className="w-full" src={image} alt="" />
        <div className="p-4 pb-7 flex flex-col items-center">
          <h3 className="mt-4 font-semibold text-[#151515] text-2xl">{name}</h3>
          {/* Recipe section with fixed height */}
          <p className="text-[#151515] h-20 text-ellipsis">
            {recipe}
          </p>
          <button className="py-4 px-7 mt-6 rounded-lg font-medium text-[#BB8506] bg-transparent border-0 border-b-4 border-[#BB8506] hover:bg-[#1F2937] transition-all hover:border-b-[#1F2937] uppercase">
            add to cart
          </button>
        </div>
      </div>
    );
  };
  
  export default FoodCard;
  