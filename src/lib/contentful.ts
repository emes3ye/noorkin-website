export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  author?: string;
};

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";
const accessToken = process.env.CONTENTFUL_CDA_TOKEN;

async function fetchContentful<T>(query: string, variables?: Record<string, unknown>): Promise<T | null> {
  if (!spaceId || !accessToken) {
    // In development without env, return null
    console.warn("Contentful not configured - using mock data");
    return null;
  }
  
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );
    
    if (!res.ok) {
      throw new Error(`Contentful API error: ${res.status}`);
    }
    
    const json = await res.json();
    if (json.errors) {
      throw new Error(`Contentful GraphQL errors: ${JSON.stringify(json.errors)}`);
    }
    
    return json.data as T;
  } catch (error) {
    console.error("Contentful fetch error:", error);
    return null;
  }
}

// Mock data for development
const mockPosts: Post[] = [
  {
    slug: "ethical-web-development",
    title: "Building the Ethical Web: A Developer's Responsibility",
    excerpt: "Exploring how developers can create technology that serves humanity while maintaining the highest ethical standards.",
    content: `
      <p>In today's interconnected world, web developers hold immense power and responsibility. Every line of code we write, every feature we implement, and every design decision we make has the potential to impact millions of users worldwide.</p>
      
      <h2>The Foundation of Ethical Development</h2>
      <p>Ethical web development starts with recognizing that technology is not neutral. Our choices in data collection, accessibility implementation, and user experience design reflect our values and priorities.</p>
      
      <h2>Key Principles</h2>
      <ul>
        <li><strong>Privacy by Design:</strong> Collecting only necessary data and protecting user information</li>
        <li><strong>Accessibility First:</strong> Building for all users, regardless of ability</li>
        <li><strong>Transparency:</strong> Being clear about how systems work and data is used</li>
        <li><strong>Sustainability:</strong> Considering the environmental impact of our code</li>
      </ul>
      
      <p>At Noorkin.dev, we believe that ethical development is not just a nice-to-have—it's essential for building a better digital future.</p>
    `,
    publishedDate: "2024-01-15",
    author: "Noorkin Team"
  },
  {
    slug: "accessibility-web-development",
    title: "Web Accessibility: Beyond Compliance",
    excerpt: "Understanding why accessibility matters and how to build truly inclusive web experiences.",
    content: `
      <p>Web accessibility isn't just about meeting WCAG guidelines—it's about creating digital experiences that welcome and serve everyone, regardless of their abilities or circumstances.</p>
      
      <h2>Beyond the Checklist</h2>
      <p>While following accessibility guidelines is important, true accessibility requires empathy and understanding of diverse user needs.</p>
      
      <h2>Real-World Impact</h2>
      <p>When we build accessible websites, we enable:</p>
      <ul>
        <li>People with visual impairments to access information independently</li>
        <li>Users with motor disabilities to navigate efficiently</li>
        <li>Those with cognitive differences to understand content clearly</li>
        <li>Everyone to have a better, more usable experience</li>
      </ul>
      
      <p>Accessibility is not just the right thing to do—it makes our products better for everyone.</p>
    `,
    publishedDate: "2024-01-08",
    author: "Noorkin Team"
  }
];

export async function getAllPosts(): Promise<Post[]> {
  const data = await fetchContentful<{ blogPostCollection: { items: unknown[] } }>(
    `query AllPosts {
      blogPostCollection(order: publishedDate_DESC, limit: 20) {
        items {
          slug
          title
          excerpt
          content
          publishedDate
          author
        }
      }
    }`
  );

  if (!data || !data.blogPostCollection) {
    // Return mock data if Contentful is not configured
    return mockPosts;
  }

  const items = data.blogPostCollection.items || [];
  return items.map((item: any) => ({
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt || "",
    content: item.content || "",
    publishedDate: item.publishedDate,
    author: item.author || "Noorkin Team",
  }));
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await fetchContentful<{ blogPostCollection: { items: unknown[] } }>(
    `query PostBySlug($slug: String!) {
      blogPostCollection(where: { slug: $slug }, limit: 1) {
        items {
          slug
          title
          excerpt
          content
          publishedDate
          author
        }
      }
    }`,
    { slug }
  );

  if (!data || !data.blogPostCollection || !data.blogPostCollection.items.length) {
    // Return mock data if available
    return mockPosts.find((post) => post.slug === slug) || null;
  }

  const item: any = data.blogPostCollection.items[0];
  return {
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt || "",
    content: item.content || "",
    publishedDate: item.publishedDate,
    author: item.author || "Noorkin Team",
  };
}


