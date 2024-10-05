import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/admin/${user?.email}`);
      return data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
