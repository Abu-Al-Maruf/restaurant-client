import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { HiUserGroup } from "react-icons/hi";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "The user has been deleted.", "success");
          }
        });
      }
    });
  };

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user an admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire(
              "Updated!",
              "The user has been made an admin.",
              "success"
            );
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading="---How many??---"
        heading={"MANAGE ALL USERS"}
      ></SectionTitle>

      <div className="bg-white p-12">
        <div className="flex items-center justify-between text-black font-semibold">
          <h3 className="text-xl font-semibold">
            Total Users: {users?.length}
          </h3>
        </div>
        {/* table data  */}
        <div className="overflow-x-auto mt-4 sm:mt-8">
          <table className="table font-Inter">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th className="rounded-tl-xl py-4"></th>
                <th className="py-4">NAME</th>
                <th className="py-4">EMAIL</th>
                <th className="py-4">ROLE</th>
                <th className="rounded-tr-xl py-4">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <td>{idx + 1}</td>

                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <span className="text-green-500 font-semibold rounded-lg p-3 w-12 flex items-center justify-center cursor-pointer">
                        Admin
                      </span>
                    ) : (
                      <div
                        onClick={() => handleMakeAdmin(user._id)}
                        className="bg-[#D1A054] text-white rounded-lg p-3 w-12 flex items-center justify-center cursor-pointer"
                      >
                        <HiUserGroup className="w-5 h-5" />
                      </div>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
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

export default AllUsers;
