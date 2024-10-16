import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, isLoading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ImSpinner9 className="animate-spin text-4xl" />
      </div>
    );
  }

  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading="---Hurry Up!---"
      ></SectionTitle>
      <div className="bg-white p-12">
        <div className="text-black font-semibold">
          <h3 className="text-xl font-semibold">Total Items: {menu?.length}</h3>
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
                <th className="py-4">ACTION</th>
                <th className="rounded-tr-xl py-4">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {menu.map((item, idx) => (
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
                  <td>
                    <Link
                      to={`/dashboard/update-item/${item._id}`}
                      className=" text-white bg-[#D1A054] text-lg rounded-lg p-3"
                    >
                      <button>
                        <FaRegEdit className="ml-1" />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-white bg-[#B91C1C] text-lg rounded-lg p-3"
                    >
                      <RiDeleteBinLine />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
