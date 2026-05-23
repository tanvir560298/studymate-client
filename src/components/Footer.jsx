import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiBookOpen, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-base-content/10 bg-base-100/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="brand-gradient grid h-12 w-12 place-items-center rounded-2xl text-white">
              <FiBookOpen className="text-xl" />
            </span>
            <h2 className="text-3xl font-black">
              Study<span className="text-primary">Mate</span>
            </h2>
          </div>
          <p className="mt-4 max-w-md leading-7 text-base-content/65">
            Find compatible study partners, manage requests, and build a more
            consistent learning routine with people who match your goals.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-normal text-base-content/70">
            Platform
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-base-content/65">
            <span>Find Partners</span>
            <span>Create Partner Profile</span>
            <span>Manage Connections</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-normal text-base-content/70">
            Connect
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-base-content/65">
            <span className="flex items-center gap-2">
              <FiMail /> hello@studymate.app
            </span>
            <span className="flex items-center gap-2">
              <FiMapPin /> Remote study network
            </span>
          </div>
          <div className="mt-5 flex gap-3 text-lg">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  className="grid h-10 w-10 place-items-center rounded-full border border-base-content/10 hover:border-primary hover:bg-primary hover:text-primary-content"
                  aria-label="Social link"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-base-content/10 px-4 py-5 text-center text-sm text-base-content/55">
        © {new Date().getFullYear()} StudyMate. All Rights Reserved.
      </div>
    </footer>
  );
}
