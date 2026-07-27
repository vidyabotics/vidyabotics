import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO.jsx";
import SynapseNetwork from "../components/SynapseNetwork.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="This page doesn't exist." />
      <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-5 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <SynapseNetwork className="h-full w-full" />
        </div>
        <div className="relative">
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            Error 404
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-text sm:text-5xl">
            Signal lost.
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm text-muted">
            The page you're looking for has been moved, renamed, or never existed.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
