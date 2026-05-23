import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FiImage, FiLock, FiMail, FiUser, FiUserPlus } from "react-icons/fi";
import AuthContext from "../contexts/AuthContext";

const Register = () => {
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter");
    }

    try {
      await createUser(email, password);
      await updateUserProfile(name, photoURL);

      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Registration failed!");
    }
  };

  const handleGoogle = async () => {
    setError("");

    try {
      await googleSignIn();

      toast.success("Google sign in successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Google sign in failed!");
    }
  };

  const inputClass = "input soft-input h-14 w-full rounded-2xl pl-12";

  return (
    <main className="section-pad">
      <div className="page-wrap grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
        <section className="premium-card order-2 rounded-[2rem] p-6 sm:p-8 lg:order-1">
          <h2 className="text-3xl font-black">Create Account</h2>
          <p className="mt-2 text-base-content/60">
            Register with Firebase auth and unlock private partner features.
          </p>

          <form onSubmit={handleRegister} className="mt-7 space-y-4">
            <label className="relative block">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input name="name" type="text" placeholder="Your name" className={inputClass} required />
            </label>

            <label className="relative block">
              <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input name="photo" type="text" placeholder="Photo URL" className={inputClass} />
            </label>

            <label className="relative block">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input name="email" type="email" placeholder="your@email.com" className={inputClass} required />
            </label>

            <label className="relative block">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input name="password" type="password" placeholder="Password" className={inputClass} required />
            </label>

            <p className="text-xs font-semibold text-base-content/55">
              Password must be 6+ characters and include uppercase and lowercase letters.
            </p>

            {error && (
              <p className="rounded-2xl border border-error/25 bg-error/10 p-3 text-sm font-semibold text-error">
                {error}
              </p>
            )}

            <button type="submit" className="btn btn-primary h-14 w-full rounded-2xl">
              <FiUserPlus /> Register
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
            Already have an account?{" "}
            <Link to="/login" className="font-black text-primary hover:underline">
              Login
            </Link>
          </p>
        </section>

        <section className="order-1 lg:order-2">
          <span className="section-kicker">Join StudyMate</span>
          <h1 className="section-title">Start building better study habits</h1>
          <p className="section-copy max-w-xl">
            Your account powers private routes, partner profile creation,
            connection requests, and your personal dashboard.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Register;
