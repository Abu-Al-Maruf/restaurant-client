import { Helmet } from "react-helmet-async";
import HeroCover from "../Shared/HeroCover";
import bannerImg from "../../assets/shop/banner2.jpg";

const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Our Shop</title>
      </Helmet>
      <HeroCover
        bannerImg={bannerImg}
        title={"OUR SHOP"}
        desc={"Would you like to try a dish?"}
      ></HeroCover>
    </div>
  );
};

export default Shop;
