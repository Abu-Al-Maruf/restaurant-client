import errorImg from "../../assets/404.gif";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src={errorImg}
        alt="404 Error"
        className="w-3/4 md:w-1/2 lg:w-1/3 max-w-xs object-cover"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mt-2 text-center max-w-lg">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
    </div>
  );
};

export default ErrorPage;
