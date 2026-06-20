import { getAllPosts, type Post } from "@/lib/blog";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export const revalidate = 3600; // Revalidate every hour

export const metadata = {
  title: "Blog | Noorkin.dev — Insights on Ethical Technology",
  description:
    "Articles and insights on ethical web development, accessibility, and building technology that serves humanity.",
};

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

// Presentation-only category labels and decorative accents derived from known
// slugs. These do not change the Markdown frontmatter and are purely visual.
// Class strings are written in full so Tailwind's compiler keeps them.
type CategoryMeta = { label: string; bar: string; panel: string };

const CATEGORY_META: Record<string, CategoryMeta> = {
  "building-track-your-invoice": {
    label: "Product Build Story",
    bar: "bg-secondary",
    panel: "from-secondary via-secondary to-primary",
  },
  "building-google-reviewlens": {
    label: "Responsible AI",
    bar: "bg-accent",
    panel: "from-accent via-secondary to-primary",
  },
  "ethical-web-development": {
    label: "Ethical Development",
    bar: "bg-primary",
    panel: "from-primary via-primary to-secondary",
  },
  "accessibility-web-development": {
    label: "Accessibility",
    bar: "bg-secondary",
    panel: "from-secondary via-primary to-primary",
  },
};

const DEFAULT_META: CategoryMeta = {
  label: "Insights",
  bar: "bg-primary",
  panel: "from-primary via-primary to-secondary",
};

function categoryMeta(slug: string): CategoryMeta {
  return CATEGORY_META[slug] ?? DEFAULT_META;
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PostMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-charcoal/70">
      <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
      {post.author && (
        <>
          <span aria-hidden="true" className="text-charcoal/40">
            /
          </span>
          <span>by {post.author}</span>
        </>
      )}
    </div>
  );
}

function CategoryTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
      {label}
    </span>
  );
}

// Decorative abstract panel used on the featured card. No images, no living
// beings: a layered brand gradient with a faint grid and a product-inspired mark.
function AbstractPanel({
  gradient,
  glyph,
  className = "",
}: {
  gradient: string;
  glyph: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:28px_28px]" />
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-6 left-7 font-serif text-6xl font-bold text-white/25 sm:text-7xl">
        {glyph}
      </div>
    </div>
  );
}

function FeaturedArticle({ post }: { post: Post }) {
  const meta = categoryMeta(post.slug);

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 motion-reduce:transition-none">
      <div className="grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center gap-5 p-8 sm:p-10 lg:order-1 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal">
              Latest article
            </span>
            <CategoryTag label={meta.label} />
          </div>

          <PostMeta post={post} />

          <h2 className="font-serif text-2xl font-bold leading-tight text-charcoal text-balance sm:text-3xl lg:text-4xl">
            <Link
              href={`/blog/${post.slug}`}
              className="before:absolute before:inset-0 focus:outline-none group-hover:text-primary motion-reduce:transition-none"
            >
              {post.title}
            </Link>
          </h2>

          <p className="text-base leading-relaxed text-charcoal/75 sm:text-lg">
            {post.excerpt}
          </p>

          <span className="mt-1 inline-flex items-center gap-2 font-medium text-primary">
            Read the full story
            <ArrowIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
          </span>
        </div>

        <AbstractPanel
          gradient={meta.panel}
          glyph={meta.label.charAt(0)}
          className="order-1 min-h-[200px] lg:order-2 lg:min-h-full"
        />
      </div>
    </article>
  );
}

function ArticleCard({ post }: { post: Post }) {
  const meta = categoryMeta(post.slug);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none">
      <div aria-hidden="true" className={`h-1.5 w-full ${meta.bar}`} />

      <div className="flex flex-1 flex-col gap-4 p-7 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <CategoryTag label={meta.label} />
        </div>

        <PostMeta post={post} />

        <h2 className="font-serif text-xl font-bold leading-snug text-charcoal text-balance sm:text-2xl">
          <Link
            href={`/blog/${post.slug}`}
            className="before:absolute before:inset-0 focus:outline-none group-hover:text-primary motion-reduce:transition-none"
          >
            {post.title}
          </Link>
        </h2>

        <p className="text-charcoal/75 leading-relaxed">{post.excerpt}</p>

        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-primary">
          Read article
          <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
        </span>
      </div>
    </article>
  );
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* Compact editorial hero */}
      <Section className="relative overflow-hidden bg-white" containerClassName="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-pattern opacity-60"
        />
        <div className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Noorkin Journal
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Insights &amp; <span className="text-primary italic">Perspectives</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/75 sm:text-xl">
            Exploring the intersection of technology, ethics, and product
            development. Our thoughts on building a better digital world, from the
            people who build it.
          </p>
          <div aria-hidden="true" className="mt-7 h-1 w-24 rounded-full bg-accent" />
        </div>
      </Section>

      {posts.length === 0 ? (
        <Section className="bg-gray-light/40">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-serif text-2xl text-charcoal">Coming Soon</h2>
            <p className="mb-8 text-charcoal/70">
              We&rsquo;re working on some thoughtful articles about ethical
              technology development. Check back soon for insights and
              perspectives.
            </p>
            <CTAButton variant="outline" asChild>
              <Link href="/contact">Subscribe for Updates</Link>
            </CTAButton>
          </div>
        </Section>
      ) : (
        <Section className="bg-gray-light/40">
          <div className="space-y-12">
            {/* Featured latest article */}
            {featured && <FeaturedArticle post={featured} />}

            {/* Remaining articles */}
            {rest.length > 0 && (
              <div>
                <h2 className="sr-only">More articles</h2>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                  {rest.map((post) => (
                    <ArticleCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Closing CTA */}
      <Section className="bg-primary text-white">
        <div className="relative overflow-hidden rounded-3xl bg-white/5 px-6 py-12 text-center sm:px-10 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:32px_32px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Stay Informed
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/90">
              Get notified when we publish new insights on ethical technology and
              product development. Reach out and we&rsquo;ll keep you in the loop.
            </p>
            <div className="mt-8">
              <CTAButton
                className="bg-white text-primary hover:bg-white/90"
                size="lg"
                asChild
              >
                <Link href="/contact">Subscribe to Updates</Link>
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
