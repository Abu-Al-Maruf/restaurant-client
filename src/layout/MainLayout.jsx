import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div className="max-w-[1380px] mx-auto font-Inter">
      {!hideNavAndFooter && <Navbar />}
      <Outlet />
      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
