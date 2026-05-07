const Testimonials = () => {
  const reviews = [
    {
      name: "Arafat Hossain",
      comment:
        "StudyMate helped me find a partner for React practice. Super useful and easy to use!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Nusrat Jahan",
      comment:
        "The connection feature is amazing. Now I study consistently every week.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Tanvir Ahmad",
      comment:
        "Beautiful UI, smooth experience, and very helpful for collaborative learning.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="px-4 lg:px-10 py-20 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">
            What Students <span className="text-primary">Say</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Real feedback from students who improved their learning experience
            using StudyMate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-base-100 rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl mb-4">{r.rating}</div>

              <p className="text-gray-600 italic leading-relaxed">
                "{r.comment}"
              </p>

              <div className="mt-6 border-t pt-4">
                <h4 className="font-bold text-lg">{r.name}</h4>

                <p className="text-sm text-gray-500">
                  StudyMate User
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;