import { NavLink } from "react-router-dom";
import { Zap, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "../data/data.js";

export default function Footer() {
  const { contact, socials } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            
            <div className="flex items-center gap-2">
             {siteConfig.logoImage ? (
             <img
             src={siteConfig.logoImage}
             alt={siteConfig.logoText}
              className="h-9 w-9 rounded-lg object-contain"
              />
            ) : (
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
             <Zap size={18} strokeWidth={2.5} />
             </span>
            )}
             <span className="font-display text-lg font-semibold text-text">
             {siteConfig.logoText}
             </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.shortDescription}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                ["Instagram", socials.instagram],
                ["YouTube", socials.youtube],
                ["LinkedIn", socials.linkedin],
                ["Facebook", socials.facebook],
              ].map(
                ([label, href]) =>
                  href && (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center gap-1 rounded-full border border-border-soft px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {label}
                      <ArrowUpRight size={12} />
                    </a>
                  )
              )}
            </div>
          </div>

          <div>
            <h4 className="eyebrow">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/", "Home"],
                ["/courses", "Courses"],
                ["/services", "Services"],
                ["/posts", "Posts"],
                ["/about", "About Us"],
                ["/contact", "Contact Us"],
              ].map(([to, label]) => (
                <li key={to}>
                  <NavLink to={to} className="text-muted transition-colors hover:text-text">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href={`tel:${contact.phoneDial}`} className="hover:text-text">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href={`mailto:${contact.email}`} className="hover:text-text">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {/* {contact.address.line1}, {contact.address.line2},<br /> */}
                  {contact.address.city}, {contact.address.state} {contact.address.pincode}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Our Commitment</h4>
            <p className="mt-4 text-sm text-muted">
              Every program is designed with practical learning, real-world projects, and industry-relevant skills to help learners build confidence from day one.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Enrollments open
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border-soft pt-6 text-xs text-muted sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono">Designed &amp; Designed & built with passion for learning and innovation.</p>
        </div>
      </div>
    </footer>
  );
}
