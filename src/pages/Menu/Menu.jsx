import { Helmet } from "react-helmet-async";
import HeroCover from "../Shared/HeroCover";
import bannerImg from "../../assets/menu/banner.jpg";
import dessertBannerImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBannerImg from "../../assets/menu/pizza-bg.jpg";
import saladBannerImg from "../../assets/menu/salad-bg.jpg";
import soupBannerImg from "../../assets/menu/soup-bg.jpg";
import CategoryMenu from "../../components/CategoryMenu";
import useMenu from "../../hooks/useMenu";
import CategoryCover from "../../components/CategoryCover";
import SectionTitle from "../../components/SectionTitle";

const Menu = () => {
  const [Menu] = useMenu();

  const offers = Menu.filter((item) => item.category === "offered");
  const desserts = Menu.filter((item) => item.category === "dessert");
  const pizzas = Menu.filter((item) => item.category === "pizza");
  const salads = Menu.filter((item) => item.category === "salad");
  const soups = Menu.filter((item) => item.category === "soup");

  return (
    <section>
      <Helmet>
        <title>Our Menu</title>
      </Helmet>
      <HeroCover
        bannerImg={bannerImg}
        title={"OUR MENU"}
        desc={"Would you like to try a dish?"}
      ></HeroCover>
      <div>
        {/* todays offers  */}
        <SectionTitle
          subHeading={"---Don't miss---"}
          heading={"TODAY'S OFFER"}
        ></SectionTitle>
        <CategoryMenu menu={offers}></CategoryMenu>
        {/* desserts section >>>>>  */}
        <CategoryCover
          bannerImg={dessertBannerImg}
          title={"DESSERTS"}
          recipe={
            "Indulge in our delightful selection of desserts, from creamy cakes to light pastries, perfect for any sweet tooth."
          }
        ></CategoryCover>
        <CategoryMenu menu={desserts}></CategoryMenu>

        {/* pizza section >>>>>>  */}
        <CategoryCover
          bannerImg={pizzaBannerImg}
          title={"PIZZA"}
          recipe={
            "Our pizzas are made with hand-tossed dough, topped with the freshest ingredients, and baked to perfection."
          }
        ></CategoryCover>
        <CategoryMenu menu={pizzas}></CategoryMenu>

        {/* salad section >>>>>>  */}
        <CategoryCover
          bannerImg={saladBannerImg}
          title={"SALAD"}
          recipe={
            "Fresh, crisp, and flavorful, our salads are made with a blend of seasonal vegetables and vibrant dressings."
          }
        ></CategoryCover>
        <CategoryMenu menu={salads}></CategoryMenu>

        {/* soup section >>>>>>  */}
        <CategoryCover
          bannerImg={soupBannerImg}
          title={"SOUP"}
          recipe={
            "Warm up with our comforting soups, carefully prepared with rich broths and the finest ingredients."
          }
        ></CategoryCover>
        <CategoryMenu menu={soups}></CategoryMenu>
      </div>
    </section>
  );
};

export default Menu;
