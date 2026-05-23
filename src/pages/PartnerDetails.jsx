import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiClock,
  FiMapPin,
  FiMonitor,
  FiSend,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import axiosInstance from "../utils/axiosInstance";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

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
        setPartner((current) =>
          current
            ? { ...current, partnerCount: Number(current.partnerCount || 0) + 1 }
            : current
        );
        toast.success("Partner request sent successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Request failed");
    }
  };

  if (!partner) return <LoadingSpinner />;

  const stats = [
    { label: "Rating", value: partner.rating || "New", icon: FiStar },
    { label: "Partners", value: partner.partnerCount || 0, icon: FiUsers },
    { label: "Experience", value: partner.experienceLevel, icon: FiStar },
  ];

  const details = [
    { label: "Subject", value: partner.subject, icon: FiStar },
    { label: "Study Mode", value: partner.studyMode, icon: FiMonitor },
    { label: "Availability", value: partner.availabilityTime, icon: FiClock },
    { label: "Location", value: partner.location, icon: FiMapPin },
    { label: "Email", value: partner.email, icon: FiUsers },
  ];

  return (
    <main className="section-pad">
      <div className="page-wrap">
        <Link to="/find-partners" className="btn btn-ghost rounded-full">
          <FiArrowLeft /> Back to Partners
        </Link>

        <section className="mt-6 grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="relative min-h-[360px]">
            <img
              src={partner.profileimage}
              alt={partner.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                {partner.subject}
              </span>
              <h1 className="mt-4 text-4xl font-black md:text-5xl">
                {partner.name}
              </h1>
            </div>
          </figure>

          <div className="premium-card rounded-none p-6 md:p-10">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl bg-base-200 p-4">
                    <Icon className="text-xl text-primary" />
                    <p className="mt-3 text-2xl font-black">{item.value}</p>
                    <p className="text-sm text-base-content/55">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 grid gap-4">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-base-content/10 p-4"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-sm text-base-content/55">
                        {item.label}
                      </p>
                      <p className="font-bold">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleRequest}
              className="btn btn-primary mt-8 w-full rounded-full shadow-lg shadow-primary/20"
            >
              <FiSend /> Send Partner Request
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PartnerDetails;
