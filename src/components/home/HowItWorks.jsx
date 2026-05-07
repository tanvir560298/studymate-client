const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Profile",
      desc: "Add your subject, availability, and study preferences to build your perfect learning profile.",
      icon: "📝",
    },
    {
      title: "Find Study Partners",
      desc: "Search and filter study partners based on subject, experience level, and study mode.",
      icon: "🔍",
    },
    {
      title: "Send Requests & Connect",
      desc: "Send requests, connect instantly, and start achieving your learning goals together.",
      icon: "🤝",
    },
  ];

  return (
    <section className="px-4 lg:px-10 py-20 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">
            How <span className="text-primary">StudyMate</span> Works
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Finding the perfect study partner is simple, fast, and designed to
            improve your learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-base-100 border border-gray-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="text-6xl">{s.icon}</div>

              <h3 className="text-2xl font-bold mt-6">
                {s.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-6">
                <span className="badge badge-primary badge-outline">
                  Step {idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;