import { useCallback, useEffect, useState } from "react";
import { FiFilter, FiSearch, FiUsers } from "react-icons/fi";
import axiosInstance from "../utils/axiosInstance";
import PartnerCard from "../components/PartnerCard";

const FindPartners = () => {
  const [partners, setPartners] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [activeSort, setActiveSort] = useState("");

  const loadPartners = useCallback(() => {
    axiosInstance
      .get(`/partners?search=${activeSearch}&sort=${activeSort}`)
      .then((res) => setPartners(res.data));
  }, [activeSearch, activeSort]);

  useEffect(() => {
    loadPartners();
  }, [loadPartners]);

  const handleSearch = () => {
    setActiveSearch(searchText);
  };

  const handleSort = (value) => {
    setSortOrder(value);
    setActiveSort(value);
  };

  return (
    <main className="section-pad">
      <div className="page-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">
            <FiUsers /> Partner directory
          </span>
          <h1 className="section-title">Find study partners that fit your flow</h1>
          <p className="section-copy">
            Search by subject, sort by experience level, and open any profile
            to send a partner request.
          </p>
        </div>

        <div className="glass-panel mt-10 grid gap-4 rounded-3xl p-4 md:grid-cols-[1fr_auto] md:p-5">
          <label className="soft-input flex min-h-14 items-center gap-3 rounded-2xl px-4">
            <FiSearch className="text-xl text-primary" />
            <input
              type="text"
              placeholder="Search by subject..."
              className="w-full bg-transparent outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>

          <div className="grid gap-3 sm:grid-cols-[auto_auto]">
            <label className="soft-input flex min-h-14 items-center gap-3 rounded-2xl px-4">
              <FiFilter className="text-primary" />
              <select
                className="min-w-52 bg-transparent outline-none"
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="">Sort by Experience</option>
                <option value="asc">Beginner to Expert</option>
                <option value="desc">Expert to Beginner</option>
              </select>
            </label>

            <button onClick={handleSearch} className="btn btn-primary rounded-2xl px-7">
              Search
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))}
        </div>

        {partners.length === 0 && (
          <div className="empty-state mt-12 rounded-3xl p-10 text-center">
            <FiSearch className="mx-auto text-5xl text-primary" />
            <h3 className="mt-4 text-2xl font-black">No Partner Found</h3>
            <p className="mt-2 text-base-content/60">
              Try a different subject keyword or reset the experience sort.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default FindPartners;
