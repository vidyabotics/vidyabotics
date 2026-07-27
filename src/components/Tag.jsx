const styles = {
  "New": "bg-accent/15 text-accent border-accent/30",
  "Best Seller": "bg-signal/15 text-signal border-signal/30",
  "Coming Soon": "bg-muted/15 text-muted border-muted/30",
  "Trending": "bg-primary/15 text-primary-light border-primary/30",
};

export default function Tag({ label }) {
  const cls = styles[label] || "bg-primary/15 text-primary-light border-primary/30";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide ${cls}`}
    >
      {label}
    </span>
  );
}
