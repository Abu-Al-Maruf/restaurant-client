import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cartImg from "../../assets/icon/cart.png";
import profile from "../../assets/others/profile.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCart();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged out successfully");
      navigate("/");
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-semibold"
              : "hover:text-[#EEFF25] text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-semibold"
              : "hover:text-[#EEFF25] text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-semibold"
              : "hover:text-[#EEFF25] text-white"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-semibold"
              : "hover:text-[#EEFF25] text-white"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop/salad"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-semibold"
              : "hover:text-[#EEFF25] text-white"
          }
        >
          Our Shop
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-[#15151580] z-50 py-2 px-6 md:px-10 max-w-[1380px] mx-auto fixed top-0 right-0 left-0">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="font-Cinzel font-black text-white text-base sm:text-xl lg:text-2xl"
          >
            KITCHEN KING <br />
            <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[.3em]">
              Restaurant
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={handleToggle}
            className={isOpen ? "hidden" : "flex text-white"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Nav links and icons */}
        <div className="hidden lg:flex items-center gap-4  text-white  font-medium text-base">
          <ul className="flex items-center gap-4 ">{navLinks}</ul>

          <div className="flex items-center gap-4">
            {/* cart icon */}
            <Link to="/dashboard/my-cart" className="relative cursor-pointer">
              <img className="w-10  cursor-pointer" src={cartImg} alt="Cart" />

              <span className="absolute bottom-[2px]  right-[2px] bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm font-medium shadow-md">
                {cart.length}
              </span>
            </Link>

            <div className="flex items-center gap-2">
              {user ? (
                <button onClick={handleLogOut} className="hover:text-[#EEFF25]">
                  Logout
                </button>
              ) : (
                <Link to="/login" className="hover:text-[#EEFF25]">
                  Login
                </Link>
              )}
              <img
                className="w-10 cursor-pointer rounded-full"
                src={profile}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-2/4 bg-[#151515]/80 font-medium text-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-start p-4">
          <button onClick={handleToggle} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-4 mt-12">{navLinks}</ul>
        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="flex items-center gap-2">
            <img
              className="w-10 cursor-pointer rounded-full"
              src={profile}
              alt="Profile"
            />
            {user ? (
              <button onClick={handleLogOut} className="hover:text-[#EEFF25]">
                Logout
              </button>
            ) : (
              <Link to="/login" className="hover:text-[#EEFF25]">
                Login
              </Link>
            )}
            <div className="relative cursor-pointer">
              <img className="w-10  cursor-pointer" src={cartImg} alt="Cart" />
              <span className="absolute bottom-[2px] right-[2px] bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm font-medium shadow-md">
                {1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
