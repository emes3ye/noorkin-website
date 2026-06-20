import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

// Shape consumed by the blog pages, sitemap, and schema helpers.
// `content` is pre-rendered, safe HTML (see the markdown-it configuration below).
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  author?: string;
  updatedDate?: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// html: false escapes any raw HTML in the Markdown source, so embedded markup
// or <script> tags render as visible text and can never execute. markdown-it's
// default link validation already rejects javascript:, vbscript:, and unsafe
// data: URLs, so Markdown links stay safe and crawlable. linkify is off so only
// explicit Markdown links become anchors.
const md = new MarkdownIt({
  html: false,
  linkify: false,
  breaks: false,
});

type RawFrontmatter = {
  title?: unknown;
  slug?: unknown;
  excerpt?: unknown;
  publishedDate?: unknown;
  author?: unknown;
  updatedDate?: unknown;
  draft?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

type LoadedPost = { post: Post; draft: boolean };

function readPostFile(fileName: string): LoadedPost {
  const fullPath = path.join(BLOG_DIR, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as RawFrontmatter;

  // Required-field validation. Dates must be quoted in frontmatter so YAML keeps
  // them as strings rather than parsing them into Date objects.
  const missing: string[] = [];
  if (!isNonEmptyString(fm.title)) missing.push("title");
  if (!isNonEmptyString(fm.excerpt)) missing.push("excerpt");
  if (!isNonEmptyString(fm.publishedDate)) missing.push("publishedDate");
  if (!isNonEmptyString(fm.author)) missing.push("author");
  if (missing.length > 0) {
    throw new Error(
      `Blog post "${fileName}" is missing required frontmatter field(s): ${missing.join(", ")}`
    );
  }

  const fileSlug = fileName.replace(/\.md$/, "");
  const slug = isNonEmptyString(fm.slug) ? fm.slug.trim() : fileSlug;

  const post: Post = {
    slug,
    title: (fm.title as string).trim(),
    excerpt: (fm.excerpt as string).trim(),
    content: md.render(content),
    publishedDate: (fm.publishedDate as string).trim(),
    author: (fm.author as string).trim(),
    ...(isNonEmptyString(fm.updatedDate)
      ? { updatedDate: fm.updatedDate.trim() }
      : {}),
  };

  return { post, draft: fm.draft === true };
}

function loadAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"));

  const posts: Post[] = [];
  const seenSlugs = new Map<string, string>();

  for (const file of files) {
    const { post, draft } = readPostFile(file);

    const existing = seenSlugs.get(post.slug);
    if (existing) {
      throw new Error(
        `Duplicate blog slug "${post.slug}" found in both "${existing}" and "${file}".`
      );
    }
    seenSlugs.set(post.slug, file);

    // Drafts are excluded from public output.
    if (draft) {
      continue;
    }
    posts.push(post);
  }

  // Newest first by publication date (ISO date strings sort lexicographically).
  posts.sort((a, b) => {
    if (a.publishedDate < b.publishedDate) return 1;
    if (a.publishedDate > b.publishedDate) return -1;
    return 0;
  });

  return posts;
}

export async function getAllPosts(): Promise<Post[]> {
  return loadAllPosts();
}

export async function getAllPostSlugs(): Promise<string[]> {
  return loadAllPosts().map((post) => post.slug);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return loadAllPosts().find((post) => post.slug === slug) ?? null;
}
