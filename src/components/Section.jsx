export default function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  headerAlign = "left",
}) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24 ${className}`}>
      {(eyebrow || title || description) && (
        <div className={`mb-10 max-w-2xl lg:mb-14 ${headerAlign === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 className="mt-3 font-display text-3xl font-semibold text-text lg:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
