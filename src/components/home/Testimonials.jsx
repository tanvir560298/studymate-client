import { FiStar } from "react-icons/fi";

const Testimonials = () => {
  const reviews = [
    {
      name: "Arafat Hossain",
      comment:
        "StudyMate helped me find a partner for React practice. Super useful and easy to use!",
      image: "https://i.pravatar.cc/160?img=12",
    },
    {
      name: "Nusrat Jahan",
      comment:
        "The connection feature is amazing. Now I study consistently every week.",
      image: "https://i.pravatar.cc/160?img=47",
    },
    {
      name: "Tanvir Ahmad",
      comment:
        "Beautiful UI, smooth experience, and very helpful for collaborative learning.",
      image: "https://i.pravatar.cc/160?img=32",
    },
  ];

  return (
    <section className="section-pad">
      <div className="page-wrap">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Student feedback</span>
          <h2 className="section-title">Trusted by learners building momentum</h2>
          <p className="section-copy">
            Realistic review cards, readable hierarchy, and consistent ratings
            make the home page feel complete.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="premium-card rounded-3xl p-7">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, idx) => (
                  <FiStar key={idx} className="fill-current" />
                ))}
              </div>
              <p className="mt-5 min-h-24 leading-7 text-base-content/70">
                "{review.comment}"
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-base-content/10 pt-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-black">{review.name}</h4>
                  <p className="text-sm text-base-content/55">StudyMate User</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
