const LoadingSpinner = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>

      <p className="text-lg font-medium text-gray-600">
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;