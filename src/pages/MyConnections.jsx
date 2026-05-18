import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
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

  return (
    <div className="px-4 lg:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center">
          My <span className="text-primary">Connections</span>
        </h2>

        <div className="overflow-x-auto mt-10 border rounded-3xl shadow-sm">
          <table className="table">
            <thead className="bg-base-200">
              <tr>
                <th>Partner</th>
                <th>Subject</th>
                <th>Study Mode</th>
                <th>Experience</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {connections.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <img
                        src={item.partnerImage}
                        alt={item.partnerName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="font-semibold">{item.partnerName}</span>
                    </div>
                  </td>

                  <td>{item.subject}</td>
                  <td>{item.studyMode}</td>
                  <td>{item.experienceLevel}</td>

                  <td>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() =>
                          Swal.fire({
                            title: "Update Connection",
                            html: `
        <input id="subject" class="swal2-input" placeholder="Subject" value="${item.subject}">
        <input id="studyMode" class="swal2-input" placeholder="Study Mode" value="${item.studyMode}">
        <input id="experienceLevel" class="swal2-input" placeholder="Experience Level" value="${item.experienceLevel}">
      `,
                            confirmButtonText: "Update",
                            focusConfirm: false,
                            preConfirm: async () => {
                              const subject =
                                document.getElementById("subject").value;
                              const studyMode =
                                document.getElementById("studyMode").value;
                              const experienceLevel =
                                document.getElementById(
                                  "experienceLevel",
                                ).value;

                              const updatedData = {
                                subject,
                                studyMode,
                                experienceLevel,
                              };

                              const res = await axiosInstance.patch(
                                `/connections/${item._id}`,
                                updatedData,
                              );

                              if (res.data.modifiedCount > 0) {
                                toast.success(
                                  "Connection updated successfully!",
                                );

                                setConnections(
                                  connections.map((conn) =>
                                    conn._id === item._id
                                      ? { ...conn, ...updatedData }
                                      : conn,
                                  ),
                                );
                              }
                            },
                          })
                        }
                        className="btn btn-sm btn-outline btn-primary"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {connections.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold">No Connections Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyConnections;
