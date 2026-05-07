import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (logout) await logout();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const navClass = ({ isActive }) =>
    isActive ? "font-bold text-primary" : "font-semibold text-gray-700";

  const Links = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/find-partners" className={navClass}>
          Find Partners
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/create-profile" className={navClass}>
              Create Partner Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-connections" className={navClass}>
              My Connections
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b sticky top-0 z-50 px-4 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-64 p-2 shadow border"
          >
            {Links}

            {!user && (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}

            {user && (
              <>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="font-semibold text-red-600"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-2xl font-extrabold">
          Study<span className="text-primary">Mate</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{Links}</ul>
      </div>

      <div className="navbar-end gap-3">
        <ThemeToggle />

        {user ? (
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co.com/4pDNDk1/avatar.png"
                  }
                  alt="profile"
                />
              </div>
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow border"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-600 font-semibold"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline btn-sm hidden sm:inline-flex"
            >
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;