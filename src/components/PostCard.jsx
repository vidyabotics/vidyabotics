import { ArrowUpRight, Calendar } from "lucide-react";

export default function PostCard({ post }) {
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-border-soft bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow">{post.platform}</span>
        <ArrowUpRight size={16} className="text-muted transition-colors group-hover:text-accent" />
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-text">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-1.5 border-t border-border-soft pt-4 text-xs text-muted">
        <Calendar size={13} />
        {date}
      </div>
    </a>
  );
}
