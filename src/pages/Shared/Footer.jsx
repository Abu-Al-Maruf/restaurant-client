import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col md:flex-row text-center ">
        {/* Left Side - Contact Us */}
        <div className="bg-[#1F2937] space-y-2 text-white p-6 md:w-1/2 w-full flex flex-col justify-end items-center ">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Right Side - Follow Us */}
        <div className="bg-[#111827]  text-white p-6 md:w-1/2 w-full flex flex-col justify-center items-center ">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <p>Join us on social media</p>
          <div className="flex gap-4 mt-4">
            {/* Facebook Icon */}
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-2xl transition-colors duration-300 hover:text-[#1877F2]" />
            </Link>
            {/* Instagram Icon */}
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl transition-colors duration-300 hover:text-[#E1306C]" />
            </Link>
            {/* Twitter Icon */}
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl transition-colors duration-300 hover:text-[#1DA1F2]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#151515] text-white text-center py-4">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
