import { Helmet } from "react-helmet-async";
import { siteConfig } from "../data/data.js";

export default function SEO({ title, description }) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const desc = description || siteConfig.shortDescription;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
    </Helmet>
  );
}
