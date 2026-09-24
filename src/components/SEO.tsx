import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
}

const upsertMeta = (
  attribute: 'name' | 'property',
  key: string,
  content: string
) => {
  let meta = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  ) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

export default function SEO({
  title,
  description,
  canonicalUrl,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    // Basic SEO
    upsertMeta('name', 'description', description);

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta(
      'property',
      'og:image',
      'https://valarthronewebs.vercel.app/assets/valarthrone-logo.png'
    );

    // Twitter / X
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta(
      'name',
      'twitter:image',
      'https://valarthronewebs.vercel.app/assets/valarthrone-logo.png'
    );

    // Canonical URL
    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [title, description, canonicalUrl]);

  return null;
}