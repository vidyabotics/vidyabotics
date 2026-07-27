import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Section from "../components/Section.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services, formLinks } from "../data/data.js";

export default function Services() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return services;
    return services.filter((s) => s.audience === filter);
  }, [filter]);

  return (
    <>
      <SEO
        title="Training Programs"
        description="Hands-on Robotics, Coding, AI, Data Analytics, and Python training programs for schools, colleges, and students."
      />

      <Section
        eyebrow="Training Programs"
        title="Empowering Schools & Students with Future Skills"
        description="Discover our practical training programs in Robotics, Coding, Artificial Intelligence, Data Analytics, and Python. Designed for schools, colleges, and students through hands-on learning and real-world projects."
      >
        <div className="flex flex-wrap gap-2">
          {["All", "Schools", "Colleges", "Students"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                filter === f
                  ? "border-primary bg-primary/15 text-primary-light"
                  : "border-border-soft text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {f === "All" ? "All Services" : f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="rounded-3xl border border-border-soft bg-surface px-8 py-14 text-center">
          <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
            Looking to Organize a Training Program?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Whether you're a school, college, or educational organization, we'll help you plan and deliver engaging technology training programs for your learners.
          </p>
          <a
            href={formLinks.serviceInquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Send an Inquiry <ArrowRight size={16} />
          </a>
        </div>
      </Section>
    </>
  );
}

// export default function Services() {
//   const [filter, setFilter] = useState("All");

//   const filtered = useMemo(() => {
//     if (filter === "All") return services;
//     return services.filter((s) => s.audience === filter);
//   }, [filter]);

//   return (
//     <>
//       <SEO
//         title="School & Training Programs"
//         description="Hands-on Robotics, Coding, Artificial Intelligence, Data Analytics, and Technology training programs for schools, colleges, and students."
//       />

//       <Section
//         eyebrow="Training Programs"
//         title="Technology Learning for Schools & Students"
//         description="We partner with schools, colleges, and educational organizations to deliver practical learning experiences in Robotics, Coding, Artificial Intelligence, Data Analytics, and emerging technologies. Individual learners can join our scheduled online and offline courses."
//       >
//         <div className="flex flex-wrap gap-2">
//           {["All", "Schools", "Colleges", "Students"].map((f) => (
//             <button
//               key={f}
//               onClick={() => setFilter(f)}
//               className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
//                 filter === f
//                   ? "border-primary bg-primary/15 text-primary-light"
//                   : "border-border-soft text-muted hover:border-accent hover:text-accent"
//               }`}
//             >
//               {f === "All" ? "All Programs" : f}
//             </button>
//           ))}
//         </div>

//         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <ServiceCard key={s.id} service={s} />
//           ))}
//         </div>
//       </Section>

//       <Section className="pb-24">
//         <div className="rounded-3xl border border-border-soft bg-surface px-8 py-14 text-center">
//           <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
//             Partner with Synapticode
//           </h2>

//           <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
//             Whether you're a school, college, coaching institute, or student
//             organization, we can design practical technology workshops and
//             training programs tailored to your learners.
//           </p>

//           <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border-soft bg-background/40 p-6 text-left">
//             <h3 className="font-semibold text-text">
//               Our Training Programs Include
//             </h3>

//             <ul className="mt-4 space-y-2 text-sm text-muted">
//               <li>• Robotics & STEM Programs for Classes 3–10</li>
//               <li>• Coding Classes for Schools</li>
//               <li>• Artificial Intelligence & Emerging Technology Workshops</li>
//               <li>• Data Analytics & Python Training</li>
//               <li>• Career Awareness & Technology Masterclasses</li>
//             </ul>

//             <div className="mt-6 rounded-xl border border-border-soft bg-surface p-4">
//               <p className="text-sm text-muted">
//                 <strong className="text-text">Note:</strong> We currently provide
//                 training for schools, colleges, educational institutions, and
//                 organized student groups. Individual learners are welcome to
//                 enroll in our scheduled courses and workshops. We do not offer
//                 one-to-one personal training or home tuition.
//               </p>
//             </div>
//           </div>

//           <a
//             href={formLinks.serviceInquiry}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
//           >
//             Request a Training Program <ArrowRight size={16} />
//           </a>
//         </div>
//       </Section>
//     </>
//   );
// }
