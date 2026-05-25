import Section from "@/components/Section";
import Link from "next/link";

export const metadata = {
  title: "Products | Noorkin.dev",
  description:
    "Independent products built by Noorkin. Privacy-first, on-device tools that respect your attention.",
  alternates: { canonical: "https://noorkin.dev/products" },
};

const products = [
  {
    slug: "noorlock",
    name: "NoorLock",
    tagline: "Reclaim your attention",
    description:
      "Blocks YouTube Shorts, Instagram Reels, TikTok, and Facebook Reels before they load. Available for Android and the browser.",
    status: "Available",
    platforms: ["Android", "Chrome", "Firefox", "Edge"],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Independent <span className="text-primary italic">Products</span>
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/80 leading-relaxed">
            Tools that respect your attention and your data. Each one is privacy-first,
            on-device, and open source.
          </p>
        </div>
      </Section>

      {/* Product list */}
      <Section className="bg-gray-light/30">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-charcoal group-hover:text-primary transition-colors">
                    {p.name}
                  </h2>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-accent bg-accent/10 px-2 py-1 rounded">
                  {p.status}
                </span>
              </div>
              <p className="text-primary font-medium mb-3">{p.tagline}</p>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="text-xs text-charcoal/60 bg-gray-light px-2 py-1 rounded"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
