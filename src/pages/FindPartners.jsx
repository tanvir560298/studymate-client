import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const FindPartners = () => {
  const [partners, setPartners] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/partners?search=${searchText}&sort=${sortOrder}`)
      .then((res) => setPartners(res.data));
  }, [searchText, sortOrder]);

  return (
    <div className="px-4 lg:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center">
          Find Study <span className="text-primary">Partners</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-4 justify-between mt-10">
          <select className="select select-bordered w-full md:w-60" onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">Sort by Experience</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

          <input
            type="text"
            placeholder="Search by subject..."
            className="input input-bordered w-full md:w-80"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {partners.map((partner) => (
            <div key={partner._id} className="card bg-base-100 border shadow-sm rounded-3xl overflow-hidden">
              <figure>
                <img src={partner.profileimage} alt={partner.name} className="h-60 w-full object-cover" />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-2xl">{partner.name}</h3>
                <p><b>Subject:</b> {partner.subject}</p>
                <p><b>Study Mode:</b> {partner.studyMode}</p>
                <p><b>Experience:</b> {partner.experienceLevel}</p>

                <Link to={`/partner/${partner._id}`} className="btn btn-primary w-full mt-4">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        {partners.length === 0 && (
          <h3 className="text-2xl font-bold text-center mt-16">No Partner Found</h3>
        )}
      </div>
    </div>
  );
};

export default FindPartners;