import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
      toast.error("Login failed!");
    }
  };

  const handleGoogle = async () => {
    setError("");

    try {
      await googleSignIn();
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Welcome Back
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button type="button" className="text-sm text-indigo-600 hover:underline">
            Forgot Password?
          </button>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 p-2 rounded-lg">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full mt-2 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <button
          onClick={handleGoogle}
          type="button"
          className="w-full border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          New here?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;