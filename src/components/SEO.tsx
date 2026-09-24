import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
}

const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  let meta = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.content = content;
};

export default function SEO({ title, description, canonicalUrl }: SEOProps) {
  useEffect(() => {
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', 'website');

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [title, description, canonicalUrl]);

  return null;
}