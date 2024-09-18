import { Helmet } from "react-helmet-async";
import HeroCover from "../Shared/HeroCover";
import bannerImg from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [Menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const salads = Menu.filter((item) => item.category === "salad");
  const pizzas = Menu.filter((item) => item.category === "pizza");
  const soups = Menu.filter((item) => item.category === "soup");
  const desserts = Menu.filter((item) => item.category === "dessert");
  const drinks = Menu.filter((item) => item.category === "drinks");

  return (
    <section>
      <Helmet>
        <title>Our Shop</title>
      </Helmet>
      <HeroCover
        bannerImg={bannerImg}
        title={"OUR SHOP"}
        desc={"Would you like to try a dish?"}
      ></HeroCover>

      <div className="py-20 lg:w-4/5 sm:w-11/12 w-4/5 mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
              {salads.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
              {pizzas.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
              {soups.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
              {desserts.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Shop;
