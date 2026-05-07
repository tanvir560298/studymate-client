import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-base-200">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-extrabold text-primary">404</h1>

        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>

        <p className="text-gray-500 mt-4">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link to="/" className="btn btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;