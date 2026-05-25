import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "NoorLock | Noorkin.dev — Short-form video blocker",
  description:
    "NoorLock blocks YouTube Shorts, Instagram Reels, TikTok, and Facebook Reels before they load. Privacy-first, on-device, open source. Available for Android and the browser.",
  alternates: { canonical: "https://noorkin.dev/products/noorlock" },
};

const PLATFORMS = [
  { name: "YouTube Shorts", host: "youtube.com" },
  { name: "Instagram Reels", host: "instagram.com" },
  { name: "TikTok", host: "tiktok.com" },
  { name: "Facebook Reels", host: "facebook.com" },
];

const FEATURES = [
  {
    title: "Network-layer blocking",
    body: "The browser extension uses declarativeNetRequest to redirect short-form URLs before the page even starts loading. No flash of content, no wasted bandwidth.",
  },
  {
    title: "DOM-level rail removal",
    body: "Shorts and Reels rails on the home feeds are removed live via a MutationObserver. You can still use these sites for what you actually came for.",
  },
  {
    title: "Zero data collection",
    body: "No analytics, no telemetry, no accounts, no servers. Settings and block counts stay in local storage on your device, full stop.",
  },
  {
    title: "Open source",
    body: "Both apps are open on GitHub. Audit exactly what the code does — or fork it.",
  },
  {
    title: "Cross-browser",
    body: "One MV3 codebase, builds for Chrome, Edge, Firefox, and Safari via WXT.",
  },
  {
    title: "Resilient to vendor changes",
    body: "A monthly CI job runs the full test suite to catch silent selector regressions when platforms rename their DOM.",
  },
];

const STATS = [
  { value: "4", label: "Platforms blocked" },
  { value: "0", label: "Bytes sent off-device" },
  { value: "100%", label: "Open source" },
];

export default function NoorLockProductPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-charcoal/60 mb-2">
              <Link href="/products" className="hover:text-primary">
                ← All products
              </Link>
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
                NoorLock
              </h1>
            </div>
            <p className="text-2xl text-primary italic font-serif mb-6">
              Reclaim your attention.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              NoorLock blocks YouTube Shorts, Instagram Reels, TikTok, and
              Facebook Reels before they load. Use the platforms you actually
              came for without the algorithm-driven distraction surfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton size="lg" asChild>
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get for Chrome
                </a>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get for Android
                </a>
              </CTAButton>
            </div>
            <p className="text-xs text-charcoal/50 mt-3">
              Store listings coming soon. In the meantime, install from source:{" "}
              <a
                href="https://github.com/noorkin-dev/noorlock-browser"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary"
              >
                browser
              </a>
              .
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-6 sm:p-8 shadow-lg">
              <Image
                src="/products/noorlock/blocked-page.png"
                alt="NoorLock's blocked page after intercepting a YouTube Shorts URL"
                width={1280}
                height={800}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-gray-light/30">
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-charcoal/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Supported platforms */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            Supported platforms
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Each surface can be toggled on or off independently from the popup.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {PLATFORMS.map((p) => (
            <div
              key={p.host}
              className="bg-white rounded-xl border border-gray-200 p-5 text-center"
            >
              <div className="font-semibold text-charcoal">{p.name}</div>
              <div className="text-xs text-charcoal/60 font-mono mt-1">
                {p.host}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-gray-light/30">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            How it works
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h3 className="font-semibold text-lg text-charcoal mb-2">
                {f.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-sm">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Popup screenshot */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Quick controls
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              The browser popup gives you today&rsquo;s block count, per-platform
              all-time totals, and a switch for each surface. Everything is local
              — no sign-in, no sync, no servers.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              On Android, the same controls live in the app itself; the
              Accessibility Service stays running so blocks happen across every
              installed social app.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 shadow-lg">
              <Image
                src="/products/noorlock/popup.png"
                alt="NoorLock's browser popup showing per-platform toggles and today's block count"
                width={360}
                height={380}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Privacy & footer CTA */}
      <Section className="bg-primary text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Built privacy-first
          </h2>
          <p className="text-lg text-white/90 mb-8">
            NoorLock collects no data. There are no analytics, no telemetry, no
            accounts, no third-party SDKs. Read the full privacy policy or audit
            the source.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CTAButton
              className="bg-white text-primary hover:bg-white/90"
              size="lg"
              asChild
            >
              <Link href="/products/noorlock/privacy">
                Read the privacy policy
              </Link>
            </CTAButton>
            <CTAButton
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              size="lg"
              asChild
            >
              <a
                href="https://github.com/noorkin-dev/noorlock-browser"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
