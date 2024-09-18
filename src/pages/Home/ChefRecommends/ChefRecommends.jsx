import SectionTitle from "../../../components/SectionTitle";
import FoodCard from "../../../components/FoodCard";
import useMenu from "../../../hooks/useMenu";

const ChefRecommends = () => {
  const [Menu] = useMenu();

  const salad = Menu.filter((item) => item.category === "salad").slice(0, 3);

  console.log(salad);
  return (
    <section className="lg:w-4/5 sm:w-11/12 w-4/5 mx-auto pb-20">
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {salad.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
