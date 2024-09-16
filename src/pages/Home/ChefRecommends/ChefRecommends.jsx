import SectionTitle from "../../../components/SectionTitle";
import salad from "../../../assets/menu/salad-bg.jpg";

const ChefRecommends = () => {
  return (
    <section className="lg:w-4/5 sm:w-11/12 w-4/5 mx-auto pb-20">
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col relative rounded max-w-[420px] items-center text-center bg-[#F3F3F3]">
          <img className="w-full " src={salad} alt="" />
          <div className="p-4">
            <h3 className="mt-4 font-semibold text-[#151515] text-2xl">
              Caeser Salad
            </h3>
            <p className="text-[#151515] ">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="py-4 px-7 mt-6 rounded-lg font-medium text-[#BB8506] bg-transparent border-0 border-b-4 border-[#BB8506] hover:bg-[#1F2937] transition-all hover:border-b-[#1F2937]">
              View Full Menu
            </button>
          </div>
        </div>
        <div className="flex flex-col relative rounded max-w-[420px] items-center text-center bg-[#F3F3F3]">
          <img className="w-full " src={salad} alt="" />
          <div className="p-4">
            <h3 className="mt-4 font-semibold text-[#151515] text-2xl">
              Caeser Salad
            </h3>
            <p className="text-[#151515] ">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="py-4 px-7 mt-6 rounded-lg font-medium text-[#BB8506] bg-transparent border-0 border-b-4 border-[#BB8506] hover:bg-[#1F2937] transition-all hover:border-b-[#1F2937]">
              View Full Menu
            </button>
          </div>
        </div>
        <div className="flex flex-col relative rounded max-w-[420px] items-center text-center bg-[#F3F3F3]">
          <img className="w-full " src={salad} alt="" />
          <div className="p-4">
            <h3 className="mt-4 font-semibold text-[#151515] text-2xl">
              Caeser Salad
            </h3>
            <p className="text-[#151515] ">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="py-4 px-7 mt-6 rounded-lg font-medium text-[#BB8506] bg-transparent border-0 border-b-4 border-[#BB8506] hover:bg-[#1F2937] transition-all hover:border-b-[#1F2937]">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
