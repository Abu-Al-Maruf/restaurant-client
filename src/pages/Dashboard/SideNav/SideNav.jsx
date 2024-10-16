import {
  FaBook,
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaListUl,
  FaUsers,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
import { MdEmail, MdFeedback, MdShoppingBag } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useCart from "../../../hooks/useCart";

const SideNav = () => {
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  return (
    <div className="w-1/5 h-auto bg-[#D1A054] px-8 py-10">
      <Link
        to="/"
        className="font-Cinzel font-black text-black text-base sm:text-xl lg:text-2xl"
      >
        KITCHEN KING <br />
        <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[.3em]">
          Restaurant
        </span>
      </Link>

      <div className="text-black font-semibold">
        <ul className="mt-8">
          {isAdmin ? (
            <>
              {/* admin sidenav  */}
              <li>
                <NavLink
                  to="/dashboard/admin-home"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <FaHome className="w-6 h-6" />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-items"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <ImSpoonKnife className="w-6 h-6" />
                  add items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-items"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <FaListUl className="w-6 h-6" />
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-bookings"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <FaBook className="w-6 h-6" />
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/all-users"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <FaUsers className="w-6 h-6" />
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* user sidenav  */}
              <li>
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <FaHome className="w-6 h-6" />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <FaCalendarAlt className="w-6 h-6"/>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment-history"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <IoWalletSharp className="w-6 h-6" />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-cart"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <FaCartShopping className="w-6 h-6" />
                  My Cart {cart?.length > 0 && <span>({cart?.length})</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-review"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <MdFeedback className="w-6 h-6" />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-booking"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                      : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  }
                >
                  <FaCalendarCheck className="w-6 h-6" />
                  My Booking
                </NavLink>
              </li>
            </>
          )}

          <div className="w-full h-[1px] bg-white my-5"></div>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
              }
            >
              <FaHome className="w-6 h-6" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
              }
            >
              <IoMdMenu className="w-6 h-6" />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
              }
            >
              <MdShoppingBag className="w-6 h-6" />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
                  : "hover:text-white flex items-center gap-2 py-3 cursor-pointer transition-colors duration-100"
              }
            >
              <MdEmail className="w-6 h-6" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
