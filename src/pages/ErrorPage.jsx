import { Link } from "react-router-dom";
import { FiArrowLeft, FiCompass } from "react-icons/fi";

const ErrorPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <section className="glass-panel max-w-2xl rounded-[2rem] p-8 text-center sm:p-12">
        <span className="brand-gradient mx-auto grid h-20 w-20 place-items-center rounded-3xl text-white">
          <FiCompass className="text-4xl" />
        </span>
        <h1 className="mt-8 text-7xl font-black text-primary sm:text-8xl">404</h1>
        <h2 className="mt-4 text-3xl font-black">Page Not Found</h2>
        <p className="mx-auto mt-4 max-w-md leading-7 text-base-content/65">
          The page you are looking for does not exist or has been moved. Head
          back home and continue exploring study partners.
        </p>
        <Link to="/" className="btn btn-primary mt-8 rounded-full">
          <FiArrowLeft /> Back to Home
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;
