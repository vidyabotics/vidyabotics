import SEO from "../components/SEO.jsx";
import Section from "../components/Section.jsx";
import PostCard from "../components/PostCard.jsx";
import { posts, siteConfig } from "../data/data.js";

export default function Posts() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <SEO
        title="Posts & Updates"
        description="Latest news, events and workshop updates from Synapticode."
      />

      <Section
        eyebrow="Posts"
        title="News, events & workshops"
        description="Updates from our classrooms, camps and partner schools — linked straight from our social media."
      >
        {sorted.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border-soft py-16 text-center">
            <p className="text-sm text-muted">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-border-soft bg-surface p-6 text-center">
          <p className="text-sm text-muted">
            Follow us for real-time updates on{" "}
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Instagram
            </a>
            {" "}and{" "}
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
