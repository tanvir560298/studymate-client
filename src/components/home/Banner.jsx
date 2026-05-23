import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiArrowRight, FiCheckCircle, FiUsers } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      title: "Find Your Perfect Study Partner",
      subtitle:
        "Match by subject, study mode, experience level, and availability so every session starts with the right person.",
      ctaText: "Find Partners",
      ctaLink: "/find-partners",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Build a Focused Study Circle",
      subtitle:
        "Send partner requests, manage connections, and keep your learning accountability in one clean workspace.",
      ctaText: "My Connections",
      ctaLink: "/my-connections",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Create a Profile That Gets Matched",
      subtitle:
        "Share your strongest subjects, location, preferred study mode, and schedule to attract compatible partners.",
      ctaText: "Create Profile",
      ctaLink: "/create-profile",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <section className="px-4 pt-6 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 3600, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          loop
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="relative min-h-[560px] overflow-hidden md:min-h-[620px]">
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/58 to-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="relative flex min-h-[560px] items-center px-6 py-14 md:min-h-[620px] md:px-14 lg:px-16">
                  <div className="max-w-3xl text-white">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur">
                      <FiUsers /> StudyMate partner network
                    </span>
                    <h1 className="mt-6 text-4xl font-black leading-[1.05] md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        to={slide.ctaLink}
                        className="btn btn-primary rounded-full px-7 shadow-xl shadow-primary/30"
                      >
                        {slide.ctaText} <FiArrowRight />
                      </Link>
                      <Link
                        to="/find-partners"
                        className="btn rounded-full border-white/25 bg-white/10 px-7 text-white hover:bg-white hover:text-slate-950"
                      >
                        View Partners
                      </Link>
                    </div>

                    <div className="mt-8 grid gap-3 text-sm font-semibold text-white/80 sm:grid-cols-3">
                      {["Search", "Sort", "Connect"].map((item) => (
                        <span key={item} className="flex items-center gap-2">
                          <FiCheckCircle className="text-secondary" /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
