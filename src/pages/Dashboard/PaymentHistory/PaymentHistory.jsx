import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const axiosSecure = useAxiosPublic();
  const { user } = useAuth();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payments/${user?.email}`);
      return data;
    },
  });
  console.log(payments);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment History: {payments.length}</h1>

      {/* table data  */}
      <div className="overflow-x-auto mt-4 sm:mt-8">
        <table className="table font-Inter">
          {/* head */}
          <thead>
            <tr className="bg-gray-200 text-gray-600">
              <th className="py-4 px-6 text-left">Email</th>
              <th className="py-4 px-6 text-left">Transaction Id</th>
              <th className="py-4 px-6 text-left">Price</th>
              <th className="py-4 px-6 text-left">Status</th>
              <th className="py-4 px-6 text-left">Payment Date</th>
            </tr>
          </thead>

          <tbody>
            {payments?.map((item) => (
              <tr key={item._id} className={`border-b border-gray-200 ${item.status === 'completed' ? 'bg-green-100' : ''}`}>
                <td className="py-4 px-6">{item.email}</td>
                <td className="py-4 px-6">{item.transactionId}</td>
                <td className="py-4 px-6">${item.price}</td>
                <td className="py-4 px-6">{item.status}</td>
                <td className="py-4 px-6">{new Date(item.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
