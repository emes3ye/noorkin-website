# Noorkin.dev

Ethical technology solutions website built with Next.js 15, Tailwind CSS, and TypeScript.

## Features

- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Brand Integration**: Custom color palette and typography with Islamic-inspired geometric patterns
- **Content Management**: Contentful CMS integration for blog posts with fallback mock data
- **Contact Forms**: Email functionality via Nodemailer with validation
- **Newsletter**: Subscription system (Mailchimp-ready)
- **SEO Optimized**: Dynamic sitemaps, robots.txt, and meta tags
- **Accessibility**: WCAG AA compliant with focus management and screen reader support

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Content**: Contentful CMS
- **Email**: Nodemailer
- **Fonts**: Inter & Playfair Display (next/font)
- **Deployment**: Vercel-ready

## Brand Tokens

- **Primary**: Teal `#008080`
- **Accent**: Gold `#D69A3E` 
- **Text**: Charcoal `#333333`
- **Background**: Gray Light `#F4F4F4`
- **Olive**: `#556B2F` (updated)

## Project Structure

```
src/
├── app/                 # App Router pages
│   ├── page.tsx        # Home page
│   ├── services/       # Services page
│   ├── about/          # About page
│   ├── contact/        # Contact page with form
│   ├── blog/           # Blog list and [slug] pages
│   ├── api/            # API routes (contact, subscribe)
│   ├── layout.tsx      # Root layout with fonts & navigation
│   └── globals.css     # Tailwind + custom styles
├── components/         # Reusable UI components
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── Footer.tsx      # Footer with newsletter signup
│   ├── CTAButton.tsx   # Styled button component
│   ├── Section.tsx     # Layout wrapper
│   ├── ServiceCard.tsx # Service display card
│   └── ContactForm.tsx # Contact form with validation
├── lib/
│   ├── contentful.ts   # CMS integration with mock fallback
│   └── utils.ts        # Utility functions
└── public/
    ├── logo.svg        # 8-pointed star logo
    ├── pattern.svg     # Geometric background pattern
    └── icons/          # Service icons (gear, cloud, cube, bulb, shield)
```

## Environment Variables

Create `.env.local` with the following variables:

```bash
# Contentful CMS Configuration
CONTENTFUL_SPACE_ID=your_contentful_space_id_here
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_CDA_TOKEN=your_contentful_delivery_token_here

# Email Configuration (Contact Form)
MAIL_FROM="Noorkin <hello@noorkin.dev>"
MAIL_TO=hello@noorkin.dev
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

The application is optimized for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

## Content Management

### Contentful Setup

Expected content type: `blogPost` with fields:
- `slug` (Short text, unique)
- `title` (Short text)
- `excerpt` (Long text)
- `content` (Rich text)
- `publishedDate` (Date)
- `author` (Short text, optional)

### Mock Data

When Contentful is not configured, the system uses mock blog posts for development.

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance
- Skip links for main content

## Performance

- Next.js Image optimization
- Server-side rendering
- Static generation for blog posts
- Minimal client-side JavaScript
- Efficient CSS with Tailwind tree-shaking

## License

Private - All rights reserved to Noorkin.dev
