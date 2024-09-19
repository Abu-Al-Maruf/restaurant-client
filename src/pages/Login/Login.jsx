import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import loginBg from "../../assets/others/authentication.png";
import authenticationImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <section
      className="bg-cover bg-center py-8 md:py-16 px-4 md:px-20"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div
        className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-10 py-6 md:py-10 px-4 lg:px-16 min-h-screen shadow-2xl"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      >
        {/* left side  */}
        <div className="w-full lg:w-1/2 mb-6 md:mb-0">
          <img
            src={authenticationImg}
            alt="#"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* right side  */}
        <div className="w-full lg:w-1/2 max-w-md px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm md:text-base font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm md:text-base font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#d1a054b3] text-white py-3 rounded-md hover:bg-[#d19f54] text-sm"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-[#D1A054]">
            New here?{" "}
            <Link to={"/signup"} className="hover:underline font-medium">
              Create a New Account
            </Link>
          </p>

          <div className="mt-6">
            <p className="text-center mb-4 text-sm font-medium">
              Or sign in with
            </p>
            <div className="flex justify-center space-x-4">
              <button className="p-2 border border-[#444] rounded-full hover:bg-gray-400 transition-colors duration-2 00">
                <FaFacebookF className="text-[#444] text-lg" />
              </button>
              <button className="p-2 border border-[#444] rounded-full hover:bg-gray-400 transition-colors duration-2  00">
                <FaGoogle className="text-[#444] text-lg" />
              </button>
              <button className="p-2 border border-[#444] text-[#444] rounded-full hover:bg-gray-400 transition-colors duration-2 00">
                <FaGithub className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
