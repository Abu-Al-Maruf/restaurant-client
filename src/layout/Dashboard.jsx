import { Outlet } from "react-router-dom";
import SideNav from "../pages/Dashboard/SideNav/SideNav";

const Dashboard = () => {
  return (
    <section className="max-w-[1380px] mx-auto font-Cinzel flex  justify-center">
      <SideNav></SideNav>

      <div className="w-4/5 h-auto bg-[#F6F6F6] pb-5 px-24">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
