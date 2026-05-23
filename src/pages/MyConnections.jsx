import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FiEdit3, FiTrash2, FiUsers } from "react-icons/fi";
import axiosInstance from "../utils/axiosInstance";
import useAuth from "../hooks/useAuth";

const MyConnections = () => {
  const { user } = useAuth();
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/connections?email=${user.email}`)
        .then((res) => setConnections(res.data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This connection will be removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#dc2626",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosInstance.delete(`/connections/${id}`);

        if (res.data.deletedCount > 0) {
          setConnections(connections.filter((item) => item._id !== id));
          toast.success("Connection deleted successfully!");
        }
      }
    });
  };

  const handleUpdate = (item) => {
    Swal.fire({
      title: "Update Connection",
      html: `
        <input id="subject" class="swal2-input" placeholder="Subject" value="${item.subject}">
        <select id="studyMode" class="swal2-select">
          <option value="Online" ${item.studyMode === "Online" ? "selected" : ""}>Online</option>
          <option value="Offline" ${item.studyMode === "Offline" ? "selected" : ""}>Offline</option>
        </select>
        <select id="experienceLevel" class="swal2-select">
          <option value="Beginner" ${item.experienceLevel === "Beginner" ? "selected" : ""}>Beginner</option>
          <option value="Intermediate" ${item.experienceLevel === "Intermediate" ? "selected" : ""}>Intermediate</option>
          <option value="Expert" ${item.experienceLevel === "Expert" ? "selected" : ""}>Expert</option>
        </select>
      `,
      confirmButtonText: "Update",
      confirmButtonColor: "#2563eb",
      preConfirm: async () => {
        const updatedData = {
          subject: document.getElementById("subject").value,
          studyMode: document.getElementById("studyMode").value,
          experienceLevel: document.getElementById("experienceLevel").value,
        };

        const res = await axiosInstance.patch(
          `/connections/${item._id}`,
          updatedData
        );

        if (res.data.modifiedCount > 0) {
          toast.success("Connection updated successfully!");

          setConnections(
            connections.map((conn) =>
              conn._id === item._id ? { ...conn, ...updatedData } : conn
            )
          );
        }
      },
    });
  };

  const actionButtons = (item) => (
    <div className="flex flex-wrap justify-end gap-2">
      <button
        onClick={() => handleUpdate(item)}
        className="btn btn-sm btn-outline btn-primary rounded-full"
      >
        <FiEdit3 /> Update
      </button>
      <button
        onClick={() => handleDelete(item._id)}
        className="btn btn-sm btn-outline btn-error rounded-full"
      >
        <FiTrash2 /> Delete
      </button>
    </div>
  );

  return (
    <main className="section-pad">
      <div className="page-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">
            <FiUsers /> Connection manager
          </span>
          <h1 className="section-title">My Connections</h1>
          <p className="section-copy">
            Review, update, or remove the study partner requests connected to
            your account.
          </p>
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-3xl border border-base-content/10 bg-base-100 shadow-xl shadow-slate-950/5 md:block">
          <table className="table">
            <thead className="bg-base-200 text-base-content">
              <tr>
                <th>Partner</th>
                <th>Subject</th>
                <th>Study Mode</th>
                <th>Experience</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {connections.map((item) => (
                <tr key={item._id} className="hover:bg-base-200/70">
                  <td>
                    <div className="flex items-center gap-3">
                      <img
                        src={item.partnerImage}
                        alt={item.partnerName}
                        className="h-12 w-12 rounded-2xl object-cover"
                      />
                      <span className="font-black">{item.partnerName}</span>
                    </div>
                  </td>
                  <td>{item.subject}</td>
                  <td>{item.studyMode}</td>
                  <td>{item.experienceLevel}</td>
                  <td>{actionButtons(item)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-4 md:hidden">
          {connections.map((item) => (
            <article key={item._id} className="premium-card rounded-3xl p-5">
              <div className="flex items-center gap-4">
                <img
                  src={item.partnerImage}
                  alt={item.partnerName}
                  className="h-16 w-16 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-xl font-black">{item.partnerName}</h3>
                  <p className="text-sm text-base-content/60">{item.subject}</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <span className="rounded-2xl bg-base-200 p-3">
                  {item.studyMode}
                </span>
                <span className="rounded-2xl bg-base-200 p-3">
                  {item.experienceLevel}
                </span>
              </div>
              <div className="mt-5">{actionButtons(item)}</div>
            </article>
          ))}
        </div>

        {connections.length === 0 && (
          <div className="empty-state mt-10 rounded-3xl p-10 text-center">
            <FiUsers className="mx-auto text-5xl text-primary" />
            <h3 className="mt-4 text-2xl font-black">No Connections Found</h3>
            <p className="mt-2 text-base-content/60">
              Send a partner request from any profile to see it here.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyConnections;
