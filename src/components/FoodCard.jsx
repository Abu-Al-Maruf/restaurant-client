import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, recipe, image, _id, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Added to cart",
            text: "Item added to cart successfully",
            icon: "success",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please log in",
        text: "You need to log in to add items to your cart",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location }, replace: true });
        }
      });
    }
  };

  return (
    <div className="flex flex-col relative rounded max-w-[420px] h-full items-center text-center bg-[#F3F3F3]">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-3 pb-5 flex flex-col items-center justify-between flex-grow">
        <div>
          <h3 className="mt-4 font-semibold text-[#151515] text-xl md:text-2xl line-clamp-2">
            {name}
          </h3>
          <p className="text-[#151515] mt-2 line-clamp-3 ">{recipe}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="py-3 px-5 mt-4 rounded-lg font-medium text-[#BB8506] bg-transparent border-0 border-b-4 border-[#BB8506] hover:bg-[#1F2937] transition-all hover:border-b-[#1F2937] uppercase"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
