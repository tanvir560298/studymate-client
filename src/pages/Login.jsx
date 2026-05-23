import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../contexts/AuthContext";

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
    <main className="section-pad">
      <div className="page-wrap grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <section>
          <span className="section-kicker">Secure login</span>
          <h1 className="section-title">Welcome back to your study network</h1>
          <p className="section-copy max-w-xl">
            Continue finding partners, sending requests, and managing your
            study connections with Firebase authentication.
          </p>
        </section>

        <section className="premium-card rounded-[2rem] p-6 sm:p-8">
          <h2 className="text-3xl font-black">Login</h2>
          <p className="mt-2 text-base-content/60">
            Enter your email and password to continue.
          </p>

          <form onSubmit={handleLogin} className="mt-7 space-y-4">
            <label className="relative block">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                className="input soft-input h-14 w-full rounded-2xl pl-12"
                required
              />
            </label>

            <label className="relative block">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input soft-input h-14 w-full rounded-2xl pl-12"
                required
              />
            </label>

            <button type="button" className="text-sm font-bold text-primary hover:underline">
              Forgot Password?
            </button>

            {error && (
              <p className="rounded-2xl border border-error/25 bg-error/10 p-3 text-sm font-semibold text-error">
                {error}
              </p>
            )}

            <button type="submit" className="btn btn-primary h-14 w-full rounded-2xl">
              <FiLogIn /> Login
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-base-content/10" />
            <span className="text-xs font-black text-base-content/45">OR</span>
            <div className="h-px flex-1 bg-base-content/10" />
          </div>

          <button
            onClick={handleGoogle}
            type="button"
            className="btn h-14 w-full rounded-2xl border-base-content/10 bg-base-100"
          >
            <FcGoogle className="text-xl" /> Continue with Google
          </button>

          <p className="mt-6 text-center text-sm text-base-content/65">
            New here?{" "}
            <Link to="/register" className="font-black text-primary hover:underline">
              Register
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Login;
