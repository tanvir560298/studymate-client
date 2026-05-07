import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const slides = [
    {
      title: "Find Your Perfect Study Partner",
      subtitle:
        "Match by subject, experience, and availability — start learning smarter.",
      ctaText: "Find Partners",
      ctaLink: "/find-partners",
      bg: "bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600",
    },
    {
      title: "Connect & Build Study Connections",
      subtitle:
        "Send requests and create your focused study circle in minutes.",
      ctaText: "My Connections",
      ctaLink: "/my-connections",
      bg: "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      title: "Learn Together, Score Higher",
      subtitle:
        "Stay consistent with a partner and improve faster with accountability.",
      ctaText: "Create Profile",
      ctaLink: "/create-profile",
      bg: "bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="px-4 lg:px-10 mt-6">
      <div className="rounded-3xl overflow-hidden shadow-xl">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          loop={true}
        >
          {slides.map((s, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`relative h-[320px] md:h-[500px] flex items-center ${s.bg}`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35"></div>

                <div className="relative w-full px-6 md:px-14">
                  <div className="max-w-2xl">
                    <p className="inline-block px-4 py-1 rounded-full text-sm bg-white/90 text-black font-semibold">
                      StudyMate
                    </p>

                    <h2 className="mt-5 text-3xl md:text-6xl font-extrabold text-white leading-tight">
                      {s.title}
                    </h2>

                    <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
                      {s.subtitle}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-4">
                      <Link
                        to={s.ctaLink}
                        className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
                      >
                        {s.ctaText}
                      </Link>

                      <Link
                        to="/find-partners"
                        className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-black transition"
                      >
                        View Partners
                      </Link>
                    </div>

                    <p className="mt-5 text-sm text-white/80">
                      Search • Sort • Connect • Learn Together
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;