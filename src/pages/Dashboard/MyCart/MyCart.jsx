import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading="My Cart"
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>

      <div className="bg-white p-12">
        <div className="flex items-center justify-between text-black font-semibold">
          <h3 className="text-xl font-semibold">
            Total orders: {cart?.length}
          </h3>
          <h3 className="text-xl font-semibold">
            total price: ${totalPrice.toFixed(2)}
          </h3>
          <button className="text-white bg-[#D1A054] text-lg rounded-lg py-3 px-4 hover:scale-[.98]">
            PAY
          </button>
        </div>
        {/* table data  */}
        <div className="overflow-x-auto mt-4 sm:mt-8">
          <table className="table font-Inter">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th className="rounded-tl-xl py-4"></th>
                <th className="py-4">ITEM IMAGE</th>
                <th className="py-4">ITEM NAME</th>
                <th className="py-4">PRICE</th>
                <th className="rounded-tr-xl py-4">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>

                  <td>
                    <img
                      className="w-16 h-16 rounded"
                      src={item.image}
                      alt="item"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-white bg-[#B91C1C] text-lg rounded-lg p-3"
                    >
                      <RiDeleteBinLine />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
