# Adding a blog post

The Noorkin blog is built from Markdown files in the repository. There is no CMS
and no external content service: a post becomes live automatically once its
Markdown file is merged into `main` and deployed.

## Where posts live

```
content/blog/<slug>.md
```

One Markdown file per post. The file name (without `.md`) is the default slug.

## Required frontmatter

Every post starts with YAML frontmatter. All five fields are required:

```yaml
---
title: "Your article title"
slug: "your-article-slug"
excerpt: "A short, accurate summary used on the listing and in metadata."
publishedDate: "2026-06-20"
author: "Noorkin Team"
---
```

- **title** — shown as the page H1 and used in the page/Open Graph/Twitter title and BlogPosting schema.
- **slug** — the URL segment. The post is served at `/blog/<slug>`. Keep it unique; a duplicate slug fails the build.
- **excerpt** — used on `/blog`, as the meta description, and in Open Graph/Twitter.
- **publishedDate** — see the date format below. Quote it.
- **author** — usually `Noorkin Team`.

### Optional fields

- **updatedDate** (`"YYYY-MM-DD"`) — only add this when you genuinely revise a post. It becomes the sitemap `lastModified`. Do not set a fake date for SEO.
- **draft** (`true`/`false`) — set `draft: true` to keep a post out of the listing, routes, and sitemap. Omit it (or use `draft: false`) to publish.

## Date format

Dates are ISO `YYYY-MM-DD` and must be wrapped in quotes so YAML keeps them as
strings (for example `"2026-06-20"`). Dates are stored in source control and are
never generated from the build/deploy time.

## How slugs work

The route is `/blog/<slug>`. If you omit the `slug` field, the file name is used.
Slugs must be unique across all posts.

## Markdown body rules

- Do **not** include an H1 (`#`) in the body. The page template renders the `title` as the single H1.
- Start with the opening paragraph, then use `##` (H2) and `###` (H3) for sections.
- Supported: headings, paragraphs, `**bold**`, `*italic*`, lists, `> blockquotes`, and `` `inline code` ``.
- Raw HTML is escaped (not rendered), so embedded markup or scripts will appear as text and cannot execute.

## How to add links

Use normal Markdown links with descriptive anchor text:

```markdown
[Track Your Invoice](https://trackyourinvoice.com/)
```

Do not use "click here". External links are kept as normal crawlable links; no
`nofollow`, `sponsored`, tracking parameters, or forced new tabs are added.

## How to preview

```bash
npm run dev
```

Then open `http://localhost:3000/blog` and your post at `/blog/<slug>`.

## Validation

Before opening a pull request:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The build reads every Markdown file, validates required frontmatter, and fails on
missing fields or duplicate slugs.

## Publishing

Open a pull request with your new Markdown file. Once it is merged into `main`
and deployed, the post (if not a draft) is live on `/blog`, has its own route,
and is included in the sitemap automatically.
