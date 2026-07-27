
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Section from "../components/Section.jsx";
import { siteConfig, formLinks } from "../data/data.js";

export default function Contact() {
  const { contact } = siteConfig;
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <>
      <SEO
        title="Contact Us"
        description={`Get in touch with ${siteConfig.name} — call, email, WhatsApp, or visit us.`}
      />

      <Section
        eyebrow="Contact Us"
        title="Let's talk"
        description="Questions about a course, a partnership, or anything else — reach out however's easiest for you."
      >
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <a
                href={`tel:${contact.phoneDial}`}
                className="flex items-center gap-4 rounded-2xl border border-border-soft bg-surface p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">Call us</p>
                  <p className="text-sm text-muted">{contact.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border-soft bg-surface p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">Email us</p>
                  <p className="text-sm text-muted">{contact.email}</p>
                </div>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border-soft bg-surface p-5 transition-colors hover:border-accent/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <MessageCircle size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">WhatsApp us</p>
                  <p className="text-sm text-muted">Usually replies within a day</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-border-soft bg-surface p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">Visit us</p>
                  <p className="text-sm text-muted">
                    {contact.address.line1}, {contact.address.line2},<br />
                    {contact.address.city}, {contact.address.state} {contact.address.pincode},<br />
                    {contact.address.country}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={formLinks.contactGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Send us a message <ArrowRight size={16} />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border-soft lg:col-span-3">
            <iframe
              title="Synapticode location"
              src={contact.mapEmbedUrl}
              className="h-full min-h-[420px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
