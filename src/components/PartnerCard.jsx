import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin, FiMonitor, FiStar } from "react-icons/fi";

const PartnerCard = ({ partner }) => {
  return (
    <article className="premium-card group flex h-full flex-col overflow-hidden rounded-3xl">
      <figure className="relative h-64 overflow-hidden">
        <img
          src={partner.profileimage}
          alt={partner.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-black text-slate-900 shadow-lg">
          <FiStar className="fill-amber-400 text-amber-400" /> {partner.rating || "New"}
        </span>
      </figure>

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h3 className="text-2xl font-black">{partner.name}</h3>
          <p className="mt-2 text-sm font-bold text-primary">{partner.subject}</p>
        </div>

        <div className="mt-5 grid gap-3 text-sm text-base-content/65">
          <p className="flex items-center gap-2">
            <FiMonitor className="text-secondary" /> {partner.studyMode}
          </p>
          <p className="flex items-center gap-2">
            <FiStar className="text-accent" /> {partner.experienceLevel}
          </p>
          {partner.location && (
            <p className="flex items-center gap-2">
              <FiMapPin className="text-primary" /> {partner.location}
            </p>
          )}
        </div>

        <div className="mt-auto pt-6">
          <Link
            to={`/partner/${partner._id}`}
            className="btn btn-primary w-full rounded-full"
          >
            View Profile <FiArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PartnerCard;
