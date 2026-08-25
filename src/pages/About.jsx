import { Target, Eye, Heart } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Section from "../components/Section.jsx";
import SynapseNetwork from "../components/SynapseNetwork.jsx";
import { siteConfig, stats } from "../data/data.js";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description={`Learn more about ${siteConfig.name} — our mission, values and the team behind our robotics and coding education.`}
      />

      <section className="relative overflow-hidden bg-grid">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="eyebrow">ABOUT vidyabotics</span>
            <h1 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
              Preparing Students for the Future of Technology.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              {siteConfig.name} vidyabotics is a technology learning platform dedicated to helping students, schools, and
               aspiring professionals build future-ready skills. Through practical training 
               in Data Analytics, Data Science, Artificial Intelligence, Coding, Python, and Robotics, 
               we make learning engaging, project-based, and industry-focused.
            </p>
          </div>
          <div className="relative h-56 lg:h-80">
            <SynapseNetwork className="h-full w-full" />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", text: "To make quality technology education accessible through practical, project-based learning that prepares students for academic success and future careers." },
            { icon: Eye, title: "Our Vision", text: "To become a trusted technology education partner for schools, colleges, and learners by creating future-ready innovators across India." },
            { icon: Heart, title: "Our Values", text: "Hands-on learning, innovation, curiosity, continuous improvement, and real-world problem solving are at the heart of everything we teach." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border-soft bg-surface p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <v.icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-text">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/40" headerAlign="center" eyebrow="By the numbers" title="Growing steadily, one batch at a time">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border-soft bg-surface p-6 text-center">
              <p className="font-display text-3xl font-semibold text-text">{s.value}</p>
              <p className="mt-1 text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
