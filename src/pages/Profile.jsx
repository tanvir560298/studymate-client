import { Link } from "react-router-dom";
import { FiMail, FiPlusCircle, FiUser, FiUsers } from "react-icons/fi";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <main className="section-pad">
      <div className="page-wrap max-w-4xl">
        <section className="premium-card overflow-hidden rounded-[2rem]">
          <div className="brand-gradient h-36" />
          <div className="px-6 pb-8 sm:px-8">
            <img
              src={user?.photoURL || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
              alt={user?.displayName || "User"}
              className="-mt-16 h-32 w-32 rounded-3xl border-4 border-base-100 object-cover shadow-xl"
            />

            <div className="mt-5 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h1 className="text-4xl font-black">
                  {user?.displayName || "StudyMate User"}
                </h1>
                <p className="mt-3 flex items-center gap-2 text-base-content/60">
                  <FiMail /> {user?.email}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/create-profile" className="btn btn-primary rounded-full">
                  <FiPlusCircle /> Create Profile
                </Link>
                <Link to="/my-connections" className="btn btn-outline rounded-full">
                  <FiUsers /> My Connections
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Account",
                  value: "Firebase authenticated",
                  icon: <FiUser className="text-2xl text-primary" />,
                },
                {
                  label: "Profiles",
                  value: "Create study profile",
                  icon: <FiPlusCircle className="text-2xl text-primary" />,
                },
                {
                  label: "Connections",
                  value: "Manage requests",
                  icon: <FiUsers className="text-2xl text-primary" />,
                },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-base-200 p-5">
                  {item.icon}
                  <p className="mt-4 font-black">{item.label}</p>
                  <p className="mt-1 text-sm text-base-content/60">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;
