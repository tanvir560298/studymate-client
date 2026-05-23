import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowRight, FiUsers } from "react-icons/fi";
import axiosInstance from "../../utils/axiosInstance";
import PartnerCard from "../PartnerCard";

const TopPartners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/partners")
      .then((res) => {
        setPartners(res.data.slice(0, 3));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="section-pad">
      <div className="page-wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-kicker">
              <FiUsers /> Top study partners
            </span>
            <h2 className="section-title">
              Meet high-signal partners for focused learning
            </h2>
            <p className="section-copy">
              Browse strong profiles selected from the partner network, then
              open a profile to send a study request.
            </p>
          </div>
          <Link
            to="/find-partners"
            className="btn btn-outline btn-primary rounded-full"
          >
            View All Partners <FiArrowRight />
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPartners;
