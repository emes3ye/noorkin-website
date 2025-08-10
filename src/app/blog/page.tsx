import { getAllPosts } from "@/lib/contentful";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export const revalidate = 3600; // Revalidate every hour

export const metadata = {
  title: "Blog | Noorkin.dev — Insights on Ethical Technology",
  description: "Articles and insights on ethical web development, accessibility, and building technology that serves humanity.",
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

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Insights & <span className="text-primary italic">Perspectives</span>
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/80 leading-relaxed">
            Exploring the intersection of technology, ethics, and human flourishing. 
            Our thoughts on building a better digital world.
          </p>
        </div>
      </Section>

      {/* Blog Posts */}
      <Section className="bg-gray-light/30">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="font-serif text-2xl text-charcoal mb-4">Coming Soon</h2>
            <p className="text-charcoal/70 mb-8">
              We&rsquo;re working on some thoughtful articles about ethical technology development. 
              Check back soon for insights and perspectives.
            </p>
            <CTAButton variant="outline" asChild>
              <Link href="/contact">
                Subscribe for Updates
              </Link>
            </CTAButton>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 text-sm text-charcoal/60 mb-4">
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
                
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <CTAButton variant="outline" size="sm" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read Article
                  </Link>
                </CTAButton>
              </article>
            ))}
          </div>
        )}
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-primary text-white">
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get notified when we publish new insights on ethical technology development 
            and industry best practices.
          </p>
          <CTAButton 
            className="bg-white text-primary hover:bg-white/90" 
            size="lg"
            asChild
          >
            <Link href="/contact">
              Subscribe to Updates
            </Link>
          </CTAButton>
        </div>
      </Section>
    </>
  );
}


