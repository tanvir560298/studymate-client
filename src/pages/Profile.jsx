import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="px-4 lg:px-10 py-16">
      <div className="max-w-2xl mx-auto bg-base-100 border shadow-xl rounded-3xl p-8 text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
          alt={user?.displayName || "User"}
          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary"
        />

        <h2 className="text-4xl font-extrabold mt-6">
          {user?.displayName || "StudyMate User"}
        </h2>

        <p className="text-gray-500 mt-3">{user?.email}</p>

        <div className="mt-8 bg-base-200 rounded-2xl p-5">
          <p className="font-semibold">Welcome to your StudyMate profile.</p>
          <p className="text-gray-500 mt-2">
            Manage your study connections and partner profile from here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;