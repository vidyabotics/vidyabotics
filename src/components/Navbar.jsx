import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { siteConfig, formLinks } from "../data/data.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/services", label: "Services" },
  { to: "/posts", label: "Posts" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border-soft bg-ink/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <NavLink to="/" className="flex items-center gap-2 shrink-0">
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
       <span className="font-display text-lg font-semibold tracking-tight text-text">
       {siteConfig.logoText}
      </span>
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-mono text-[13px] uppercase tracking-wide transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-text"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={formLinks.enrollNow}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Enroll Now
          </a>
        </div>

        <button
          className="text-text lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border-soft bg-ink px-5 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-2 py-3 font-mono text-sm uppercase tracking-wide ${
                    isActive ? "text-accent" : "text-muted"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={formLinks.enrollNow}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
