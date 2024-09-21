import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import signUpBg from "../../assets/others/authentication.png";
import authenticationImg from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const captchaRef = useRef(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const { createUser, updateUserProfile, googleLogin } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!isCaptchaValid) {
      toast.error("Please validate the captcha first.");
      return;
    }
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("Sign up successful!");
        updateUserProfile(data.name, data.photo);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });

    reset();
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

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

  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        toast.success("Sign up successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <section
      className="bg-cover bg-center py-8 md:py-16 px-4 md:px-20"
      style={{
        backgroundImage: `url(${signUpBg})`,
      }}
    >
      <div
        className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-6 md:gap-10 py-6 md:py-10 px-4 lg:px-16 min-h-screen shadow-2xl"
        style={{
          backgroundImage: `url(${signUpBg})`,
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
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* name  */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm md:text-base font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
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
                {...register("email", { required: true })}
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])/,
                })}
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your password"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  Password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  Password must include at least one uppercase letter, one
                  lowercase letter, and one special character.
                </span>
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

            {/* sign up button  */}

            <input
              type="submit"
              value="Sign Up"
              className={`w-full py-3 rounded-md text-sm ${
                isCaptchaValid
                  ? "bg-[#d1a054b3] text-white hover:bg-[#d19f54] cursor-pointer"
                  : "bg-gray-300 text-gray-500 "
              }`}
              disabled={!isCaptchaValid}
            />
          </form>
          <p className="mt-4 text-center text-sm text-[#D1A054]">
            Already have an account?{" "}
            <Link to={"/login"} className="hover:underline font-medium">
              Login here
            </Link>
          </p>

          <div className="mt-6">
            <p className="text-center mb-4 text-sm font-medium">
              Or sign up with
            </p>
            <div className="flex justify-center space-x-4">
              <button className="p-2 border border-[#444] rounded-full hover:bg-gray-400 transition-colors duration-200">
                <FaFacebookF className="text-[#444] text-lg" />
              </button>
              <button
                className="p-2 border border-[#444] rounded-full hover:bg-gray-400 transition-colors duration-200"
                onClick={handleGoogleSignIn}
              >
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

export default SignUp;
