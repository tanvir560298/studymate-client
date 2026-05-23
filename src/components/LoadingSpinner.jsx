import { FiBookOpen } from "react-icons/fi";

const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="glass-panel flex w-full max-w-sm flex-col items-center rounded-3xl p-8 text-center">
        <span className="brand-gradient relative grid h-16 w-16 place-items-center rounded-3xl text-white shadow-xl shadow-primary/20">
          <FiBookOpen className="text-2xl" />
          <span className="absolute inset-0 rounded-3xl border-4 border-primary/20 border-t-primary animate-spin" />
        </span>
        <p className="mt-5 text-lg font-black">Preparing your study space</p>
        <p className="mt-2 text-sm text-base-content/60">
          Loading partners, routes, and secure session details.
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
