import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t bg-base-100">
      <div className="max-w-7xl mx-auto px-4 py-10 text-center space-y-4">
        <h2 className="text-3xl font-extrabold">
          Study<span className="text-primary">Mate</span>
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto">
          Find your perfect study partner, collaborate smarter, and achieve
          academic success together.
        </p>

        <div className="flex justify-center gap-4 text-xl">
          <a className="hover:text-primary transition">
            <FaFacebookF />
          </a>

          <a className="hover:text-primary transition">
            <FaXTwitter />
          </a>

          <a className="hover:text-primary transition">
            <FaLinkedinIn />
          </a>

          <a className="hover:text-primary transition">
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} StudyMate — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}