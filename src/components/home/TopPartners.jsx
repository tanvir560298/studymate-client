import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
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
    <section className="px-4 lg:px-10 py-20 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">
            Top Study <span className="text-primary">Partners</span>
          </h2>

          <p className="text-gray-500 mt-4">
            Highly rated study partners selected for better collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {partners.map((partner) => (
            <div
              key={partner._id}
              className="card bg-base-100 border border-gray-200 shadow-sm hover:shadow-xl transition rounded-3xl overflow-hidden"
            >
              <figure>
                <img
                  src={partner.profileimage}
                  alt={partner.name}
                  className="h-60 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-2xl">{partner.name}</h3>

                <p className="text-gray-500">
                  <span className="font-semibold">Subject:</span>{" "}
                  {partner.subject}
                </p>

                <p className="text-gray-500">
                  <span className="font-semibold">Study Mode:</span>{" "}
                  {partner.studyMode}
                </p>

                <p className="text-gray-500">
                  <span className="font-semibold">Experience:</span>{" "}
                  {partner.experienceLevel}
                </p>

                <div className="card-actions mt-4">
                  <Link
                    to={`/partner/${partner._id}`}
                    className="btn btn-primary w-full"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/find-partners" className="btn btn-outline btn-primary">
            View All Partners
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopPartners;