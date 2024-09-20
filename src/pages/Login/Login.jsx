import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import loginBg from "../../assets/others/authentication.png";
import authenticationImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const captchaRef = useRef(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = (data) => {
    if (!isCaptchaValid) {
      toast.error("Please validate the captcha first.");
      return;
    }

    loginUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setIsCaptchaValid(true);
      toast.success("Captcha is valid");
    } else {
      setIsCaptchaValid(false);
      toast.error("Captcha is invalid");
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* email  */}
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
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* password  */}
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
                {...register("password", { required: "Password is required" })}
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* captcha form  */}
            <div className="mb-4">
              <LoadCanvasTemplate />

              <input
                type="text"
                ref={captchaRef}
                className="w-full px-3 py-3 border rounded-md text-sm mt-2"
                placeholder="Enter the captcha above"
                required
              />
              <button
                type="button"
                className="btn btn-sm btn-primary mt-2"
                onClick={handleValidateCaptcha}
              >
                Validate Captcha
              </button>
            </div>

            {/* login button  */}
            <input
              type="submit"
              value="Login"
              className={`w-full py-3 rounded-md text-sm ${
                isCaptchaValid
                  ? "bg-[#d1a054b3] text-white hover:bg-[#d19f54] cursor-pointer"
                  : "bg-gray-300 text-gray-500 "
              }`}
              disabled={!isCaptchaValid}
            />
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
              <button className="p-2 border border-[#444] rounded-full hover:bg-gray-400 transition-colors duration-200">
                <FaFacebookF className="text-[#444] text-lg" />
              </button>
              <button className="p-2 border border-[#444] rounded-full hover:bg-gray-400 transition-colors duration-200">
                <FaGoogle className="text-[#444] text-lg" />
              </button>
              <button className="p-2 border border-[#444] text-[#444] rounded-full hover:bg-gray-400 transition-colors duration-200">
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
