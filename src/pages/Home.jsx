import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, GraduationCap, Rocket } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Section from "../components/Section.jsx";
import SynapseNetwork from "../components/SynapseNetwork.jsx";
import CourseCard from "../components/CourseCard.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import { courses, services, reviews, stats, siteConfig, formLinks } from "../data/data.js";

export default function Home() {
  const featuredCourses = courses.slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const approvedReviews = reviews.filter((r) => r.approved).slice(0, 4);

  return (
    <>
      <SEO
        title="Data Analytics · Data Science · AI · Coding · Robotics"
        description={siteConfig.shortDescription}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-grid">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <span className="eyebrow">Data Analytics · Data Science · AI · Coding · Robotics</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-text sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted lg:text-lg">
              {siteConfig.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={formLinks.enrollNow}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Enroll Now <ArrowRight size={16} />
              </a>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full border border-border-soft px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          <div className="relative h-72 lg:h-96">
            <SynapseNetwork className="h-full w-full" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-border-soft bg-surface/60">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-display text-2xl font-semibold text-text sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* WHY SYNAPTICODE */}

<Section
  eyebrow="Why Choose Synapticode"
  title="Learn by Building & Grow by Doing."
  description="We believe the best way to learn technology is by building real projects. Our industry-focused programs combine expert guidance, hands-on practice, and practical experience to help learners build skills with confidence."
>
  <div className="grid gap-6 sm:grid-cols-3">
    {[
      {
        icon: GraduationCap,
        title: "Project-Based Learning",
        text: "Learn by solving real-world problems and building practical projects that strengthen your skills and portfolio.",
      },
      {
        icon: ShieldCheck,
        title: "Expert Mentorship",
        text: "Get guidance from experienced mentors who support your learning journey with practical knowledge and personalized feedback.",
      },
      {
        icon: Rocket,
        title: "Career-Ready Skills",
        text: "Master in-demand technologies and gain the confidence to succeed in internships, jobs, competitions, and future careers.",
      },
    ].map((f) => (
      <div
        key={f.title}
        className="rounded-2xl border border-border-soft bg-surface p-7"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <f.icon size={20} />
        </span>

        <h3 className="mt-5 font-display text-lg font-semibold text-text">
          {f.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted">
          {f.text}
        </p>
      </div>
    ))}
  </div>
</Section>

      {/* TOP COURSES */}
      <Section
        eyebrow="Start Your Learning Journey"
        title="Find the right program for your goals"
        description="From beginner-friendly courses to advanced technology programs, every course is designed to build practical skills and real-world confidence."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-accent hover:text-accent/80"
          >
            View all courses <ArrowRight size={15} />
          </Link>
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section
        eyebrow="Services"
        title="For schools, businesses & individual learners"
        description="From full STEM lab setups to one-on-one competition mentoring."
        className="bg-surface/40"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-accent hover:text-accent/80"
          >
            See all services <ArrowRight size={15} />
          </Link>
        </div>
      </Section>

      {/* REVIEWS */}
      {/* {approvedReviews.length > 0 && (
        <Section
          eyebrow="Testimonials"
          title="What our students & partners say"
          headerAlign="center"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approvedReviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </Section>
      )} */}

      {/* CTA */}
      <Section className="pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border-soft bg-surface px-8 py-14 text-center">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <SynapseNetwork className="h-full w-full" />
          </div>
          <div className="relative">
            <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
              Ready to start building?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted">
              Reserve your seat in the next batch — enrollment takes less than two minutes.
            </p>
            <a
              href={formLinks.enrollNow}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Enroll Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
