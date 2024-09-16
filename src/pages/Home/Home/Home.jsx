import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CheckItOut from "../CheckItOut";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefRecommends></ChefRecommends>
      <CheckItOut></CheckItOut>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
