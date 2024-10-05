import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const AddItems = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const name = data.name;
    const category = data.category;
    const price = parseFloat(data.price);
    const recipe = data.recipe;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      // post img file on imgbb and get the url
      const { data: imgData } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      const imageUrl = imgData.data.display_url;

      // post the menu item to the server
      const menuItem = {
        name,
        recipe,
        image: imageUrl,
        category,
        price,
      };
      const { data } = await axiosSecure.post("/menu", menuItem);
      console.log(data);
      if (data.insertedId) {
        toast.success("Item added successfully");
        reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-20">
      <SectionTitle
        subHeading="---How many??---"
        heading={"ADD AN ITEM"}
      ></SectionTitle>

      <div className="font-Inter bg-gray-200/80 rounded p-12">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* recipe name  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              <span className="text-lg font-medium">Recipe Name*</span>
            </label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* category and price  */}
          <div className="flex w-full justify-between gap-6">
            <div className="flex flex-col gap-2 w-1/2">
              <label>
                <span className="text-lg font-medium">Category*</span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered w-full"
                defaultValue="Select Category"
              >
                <option disabled value="Select Category">
                  Select Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="price">
                <span className="text-lg font-medium">Price*</span>
              </label>
              <input
                type="number"
                {...register("price")}
                id="price"
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* recipe details  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="recipe">
              <span className="text-lg font-medium">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe")}
              id="recipe"
              className="textarea textarea-bordered"
              placeholder="Bio"
              required
            ></textarea>
          </div>

          {/* image  */}
          <div>
            <input
              type="file"
              {...register("image")}
              id="image"
              className="file-input file-input-bordered w-full"
              required
            />
          </div>
          {/* add item button  */}
          <button
            type="submit"
            className="self-start w-36 h-12 flex justify-center items-center gap-2 text-white rounded  text-lg font-medium bg-gradient-to-r from-[#835D23] to-[#B58130] hover:scale-[.96] transition-all"
          >
            {loading ? (
              <ImSpinner9 className="animate-spin m-auto" />
            ) : (
              <>
                <span>Add Item </span>
                <FaUtensils />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
