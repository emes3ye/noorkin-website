import type { Post } from "@/lib/blog";

// Canonical site origin. Kept here so every schema/canonical URL stays consistent.
// Intentionally non-www to match the project's existing metadataBase.
export const SITE_URL = "https://noorkin.dev";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Site-wide Organization entity. Uses only information already visible in the
// project (name, URL, existing public logo asset, and existing positioning copy).
// No social profiles, addresses, phone numbers, or people are claimed.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Noorkin",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "Illuminating your business with ethical tech solutions. Custom software development, cloud architecture, and IT consulting with integrity.",
} as const;

// Site-wide WebSite entity. No SearchAction is declared because the site has no
// public site-search feature.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Noorkin",
  publisher: { "@id": ORGANIZATION_ID },
} as const;

export function blogPostUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

// Per-article BlogPosting entity built only from visible post fields.
// dateModified, image, and wordCount are intentionally omitted because the
// content model has no corresponding fields and no genuine value is available.
export function buildBlogPostingSchema(post: Post) {
  const url = blogPostUrl(post.slug);
  const authorName = post.author || "Noorkin Team";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    datePublished: post.publishedDate,
    // The byline is a team/organisation, not a named person.
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_URL,
    },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

// Breadcrumb reflecting the real Home > Blog > Article hierarchy.
export function buildBreadcrumbSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: blogPostUrl(post.slug),
      },
    ],
  };
}
