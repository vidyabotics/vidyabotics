import { Link } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";
import Tag from "./Tag.jsx";

export default function CourseCard({ course }) {
  const isComingSoon = course.tags?.includes("Coming Soon");

  return (
    <Link
      to={`/courses/${course.id}`}
      className="group flex flex-col rounded-2xl border border-border-soft bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="eyebrow">{course.category}</span>
        <ArrowUpRight size={18} className="shrink-0 text-muted transition-colors group-hover:text-accent" />
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold text-text">
        {course.title}
      </h3>
      <p className="mt-1 text-xs text-muted">{course.ageGroup}</p>

      <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2">
        {course.shortDescription}
      </p>

      {course.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {course.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-border-soft pt-4">
        <div className="flex items-center gap-1.5 text-xs text-muted">
          <Clock size={14} />
          {course.duration}
        </div>
        <div className="text-right">
          {isComingSoon ? (
            <span className="font-mono text-sm text-muted">TBA</span>
          ) : (
            <div className="flex items-baseline gap-2">
              {course.originalPrice && (
                <span className="font-mono text-xs text-muted line-through">
                  ₹{course.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              <span className="font-mono text-base font-semibold text-text">
                ₹{course.price.toLocaleString("en-IN")}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
