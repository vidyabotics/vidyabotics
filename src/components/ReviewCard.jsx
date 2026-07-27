import { Star } from "lucide-react";

export default function ReviewCard({ review }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-6">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < review.rating ? "fill-signal text-signal" : "text-border-soft"}
          />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-text/90">“{review.text}”</p>
      <div className="mt-5 border-t border-border-soft pt-4">
        <p className="text-sm font-semibold text-text">{review.name}</p>
        <p className="text-xs text-muted">{review.role}</p>
      </div>
    </div>
  );
}
