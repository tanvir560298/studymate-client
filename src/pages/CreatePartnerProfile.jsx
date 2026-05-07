import { toast } from "react-toastify";
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
      toast.error("Failed to create profile");
    }
  };

  return (
    <div className="px-4 lg:px-10 py-16">
      <div className="max-w-4xl mx-auto bg-base-100 border shadow-xl rounded-3xl p-8">
        <h2 className="text-4xl font-extrabold text-center">
          Create Partner <span className="text-primary">Profile</span>
        </h2>

        <form onSubmit={handleCreateProfile} className="grid md:grid-cols-2 gap-5 mt-10">
          <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" required />
          <input name="profileimage" type="url" placeholder="Profile Image URL" className="input input-bordered w-full" required />
          <input name="subject" type="text" placeholder="Subject" className="input input-bordered w-full" required />

          <select name="studyMode" className="select select-bordered w-full" required>
            <option value="">Select Study Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>

          <input name="availabilityTime" type="text" placeholder="Availability Time" className="input input-bordered w-full" required />
          <input name="location" type="text" placeholder="Location" className="input input-bordered w-full" required />

          <select name="experienceLevel" className="select select-bordered w-full" required>
            <option value="">Select Experience Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>

          <input name="rating" type="number" min="0" max="5" step="0.1" placeholder="Rating" className="input input-bordered w-full" required />

          <input
            name="email"
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full md:col-span-2 bg-base-200"
          />

          <button className="btn btn-primary md:col-span-2">Create Profile</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;