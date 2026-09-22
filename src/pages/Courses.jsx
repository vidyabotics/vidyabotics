import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Section from "../components/Section.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { courses } from "../data/data.js";

export default function Courses() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(courses.map((c) => c.category))],
    []
  );

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesCategory = category === "All" || c.category === category;
      const matchesQuery =
        query.trim() === "" ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.shortDescription.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <SEO
        title="Course Catalog"
        description="Browse all vidyabotics courses in robotics, coding and AI — with pricing, Syllabus and duration."
      />

      <Section
        eyebrow="Learning Programs"
        title="Find the Perfect Program for Your Goals"
        description="Whether you're starting from scratch or advancing your career, our practical, project-based programs help you build real-world skills with confidence."
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full rounded-full border border-border-soft bg-surface py-2.5 pl-10 pr-4 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                  category === cat
                    ? "border-primary bg-primary/15 text-primary-light"
                    : "border-border-soft text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border-soft py-16 text-center">
              <p className="text-sm text-muted">
                No courses match "{query}". Try a different search or category.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
