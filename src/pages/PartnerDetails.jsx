import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import useAuth from "../hooks/useAuth";

const PartnerDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/partners/${id}`).then((res) => setPartner(res.data));
  }, [id]);

  const handleRequest = async () => {
    try {
      const requestData = {
        partnerId: id,
        requesterEmail: user?.email,
      };

      const res = await axiosInstance.post("/connections", requestData);

      if (res.data.insertedId) {
        toast.success("Partner request sent successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Request failed");
    }
  };

  if (!partner) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="px-4 lg:px-10 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl border rounded-3xl overflow-hidden">
          <figure className="lg:w-1/2">
            <img src={partner.profileimage} alt={partner.name} className="h-full w-full object-cover" />
          </figure>

          <div className="card-body lg:w-1/2">
            <h2 className="text-4xl font-extrabold">{partner.name}</h2>

            <p><b>Subject:</b> {partner.subject}</p>
            <p><b>Study Mode:</b> {partner.studyMode}</p>
            <p><b>Availability:</b> {partner.availabilityTime}</p>
            <p><b>Location:</b> {partner.location}</p>
            <p><b>Experience:</b> {partner.experienceLevel}</p>
            <p><b>Rating:</b> ⭐ {partner.rating}</p>
            <p><b>Partner Count:</b> {partner.partnerCount}</p>
            <p><b>Email:</b> {partner.email}</p>

            <div className="card-actions mt-6">
              <button onClick={handleRequest} className="btn btn-primary">
                Send Partner Request
              </button>

              <Link to="/find-partners" className="btn btn-outline">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;