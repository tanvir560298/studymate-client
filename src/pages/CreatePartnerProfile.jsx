import { toast } from "react-toastify";
import {
  FiAward,
  FiClock,
  FiImage,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiStar,
  FiUser,
} from "react-icons/fi";
import axiosInstance from "../utils/axiosInstance";
import useAuth from "../hooks/useAuth";

const CreatePartnerProfile = () => {
  const { user } = useAuth();

  const handleCreateProfile = async (e) => {
    e.preventDefault();

    const form = e.target;
    const profile = {
      name: form.name.value,
      profileimage: form.profileimage.value,
      subject: form.subject.value,
      studyMode: form.studyMode.value,
      availabilityTime: form.availabilityTime.value,
      location: form.location.value,
      experienceLevel: form.experienceLevel.value,
      rating: Number(form.rating.value),
      partnerCount: 0,
      email: user?.email,
    };

    try {
      const res = await axiosInstance.post("/partners", profile);

      if (res.data.insertedId) {
        toast.success("Partner profile created successfully!");
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create profile");
    }
  };

  const inputClass = "input soft-input h-14 w-full rounded-2xl pl-12";
  const selectClass = "select soft-input h-14 w-full rounded-2xl pl-12";

  return (
    <main className="section-pad">
      <div className="page-wrap max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Create partner profile</span>
          <h1 className="section-title">Show students how you like to learn</h1>
          <p className="section-copy">
            Add the details required for matching while keeping your profile
            clean, readable, and request-ready.
          </p>
        </div>

        <form
          onSubmit={handleCreateProfile}
          className="premium-card mt-10 grid gap-5 rounded-[2rem] p-5 md:grid-cols-2 md:p-8"
        >
          <label className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input name="name" type="text" placeholder="Full Name" className={inputClass} required />
          </label>

          <label className="relative">
            <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input name="profileimage" type="url" placeholder="Profile Image URL" className={inputClass} required />
          </label>

          <label className="relative">
            <FiAward className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input name="subject" type="text" placeholder="Subject" className={inputClass} required />
          </label>

          <label className="relative">
            <FiMonitor className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <select name="studyMode" className={selectClass} required>
              <option value="">Select Study Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </label>

          <label className="relative">
            <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input name="availabilityTime" type="text" placeholder="Availability Time" className={inputClass} required />
          </label>

          <label className="relative">
            <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input name="location" type="text" placeholder="Location" className={inputClass} required />
          </label>

          <label className="relative">
            <FiAward className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <select name="experienceLevel" className={selectClass} required>
              <option value="">Select Experience Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </label>

          <label className="relative">
            <FiStar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input name="rating" type="number" min="0" max="5" step="0.1" placeholder="Rating" className={inputClass} required />
          </label>

          <label className="relative md:col-span-2">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input
              name="email"
              type="email"
              value={user?.email || ""}
              readOnly
              className={`${inputClass} bg-base-200`}
            />
          </label>

          <button className="btn btn-primary h-14 rounded-2xl md:col-span-2">
            Create Profile
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreatePartnerProfile;
