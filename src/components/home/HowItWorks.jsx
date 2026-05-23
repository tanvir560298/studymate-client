import { FiEdit3, FiSearch, FiSend } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Profile",
      desc: "Add your subject, availability, study mode, location, and experience level.",
      icon: FiEdit3,
    },
    {
      title: "Find Study Partners",
      desc: "Search by subject and sort by experience level to discover compatible students.",
      icon: FiSearch,
    },
    {
      title: "Send Requests",
      desc: "Open a profile, send a partner request, and manage connections from your dashboard.",
      icon: FiSend,
    },
  ];

  return (
    <section className="section-pad bg-base-100/55">
      <div className="page-wrap">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Simple workflow</span>
          <h2 className="section-title">
            From profile to productive study session
          </h2>
          <p className="section-copy">
            StudyMate keeps the assignment workflow clear while making each
            step fast, readable, and mobile-friendly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="premium-card rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <span className="brand-gradient grid h-14 w-14 place-items-center rounded-2xl text-white">
                    <Icon className="text-2xl" />
                  </span>
                  <span className="text-5xl font-black text-primary/15">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-base-content/65">
                  {step.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
