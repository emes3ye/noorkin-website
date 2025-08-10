import { getPostBySlug, getAllPostSlugs } from "@/lib/contentful";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Noorkin.dev`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: post.author ? [post.author] : undefined,
    },
  };
}

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

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();
  
  return (
    <>
      {/* Article Header */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <CTAButton variant="outline" size="sm" asChild>
              <Link href="/blog">
                ← Back to Blog
              </Link>
            </CTAButton>
          </div>
          
          <header className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 text-sm text-charcoal/60 mb-6">
              <time dateTime={post.publishedDate}>
                {formatDate(post.publishedDate)}
              </time>
              {post.author && (
                <>
                  <span>•</span>
                  <span>by {post.author}</span>
                </>
              )}
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="mt-6 text-lg sm:text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            )}
          </header>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="bg-gray-light/30">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-lg">
            <div 
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-serif prose-headings:text-charcoal
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-charcoal/80 prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-charcoal prose-strong:font-semibold
                prose-ul:text-charcoal/80 prose-ol:text-charcoal/80
                prose-li:my-1
                prose-code:text-accent prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:p-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </Section>

      {/* Related Actions */}
      <Section>
        <div className="text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            If this article resonated with you, let&rsquo;s discuss how we can help bring your 
            ethical technology vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton size="lg" asChild>
              <Link href="/contact">
                Start a Conversation
              </Link>
            </CTAButton>
            <CTAButton variant="outline" size="lg" asChild>
              <Link href="/services">
                View Our Services
              </Link>
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}


