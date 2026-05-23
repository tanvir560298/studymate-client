import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FiBookOpen, FiLogOut, FiMenu, FiUser } from "react-icons/fi";
import AuthContext from "../contexts/AuthContext";
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
    `nav-link-premium ${isActive ? "active" : ""}`;

  const links = (
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
              Create Profile
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
    <header className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/85 px-3 backdrop-blur-xl lg:px-10">
      <nav className="navbar mx-auto max-w-7xl px-0">
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle lg:hidden"
              aria-label="Open navigation menu"
            >
              <FiMenu className="text-xl" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content glass-panel z-[999] mt-3 w-72 rounded-2xl p-3"
            >
              {links}

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
                    <NavLink to="/profile">
                      <FiUser /> Profile
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="font-semibold text-error"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-3 rounded-2xl py-1">
            <span className="brand-gradient grid h-11 w-11 place-items-center rounded-2xl text-white shadow-lg shadow-primary/20">
              <FiBookOpen className="text-xl" />
            </span>
            <span className="text-2xl font-black">
              Study<span className="text-primary">Mate</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-2 sm:gap-3">
          <ThemeToggle />

          {user ? (
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-primary/30">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co.com/4pDNDk1/avatar.png"
                    }
                    alt={user?.displayName || "profile"}
                  />
                </div>
              </button>

              <ul
                tabIndex={0}
                className="menu dropdown-content glass-panel z-[999] mt-3 w-64 rounded-2xl p-3"
              >
                <li className="mb-2 border-b border-base-content/10 pb-2">
                  <div className="block">
                    <p className="font-bold">
                      {user?.displayName || "StudyMate User"}
                    </p>
                    <p className="truncate text-xs text-base-content/60">
                      {user?.email}
                    </p>
                  </div>
                </li>
                <li>
                  <Link to="/profile">
                    <FiUser /> Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="font-semibold text-error"
                  >
                    <FiLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline btn-sm hidden rounded-full sm:inline-flex"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary btn-sm rounded-full shadow-lg shadow-primary/20"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
