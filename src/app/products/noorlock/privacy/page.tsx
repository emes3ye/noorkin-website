import Section from "@/components/Section";
import Link from "next/link";

export const metadata = {
  title: "NoorLock Privacy Policy | Noorkin.dev",
  description:
    "Privacy policy for NoorLock — the short-form video blocker for Android and browsers. Zero data collection, all on-device.",
  alternates: { canonical: "https://noorkin.dev/products/noorlock/privacy" },
};

const LAST_UPDATED = "May 25, 2026";

export default function NoorLockPrivacyPage() {
  return (
    <>
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-charcoal/60 mb-2">
            <Link href="/products/noorlock" className="hover:text-primary">
              ← NoorLock
            </Link>
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            NoorLock Privacy Policy
          </h1>
          <p className="text-charcoal/70">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </Section>

      <Section className="bg-gray-light/30">
        <article className="prose prose-lg max-w-3xl mx-auto prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal/80 prose-li:text-charcoal/80 prose-a:text-primary hover:prose-a:text-secondary">
          <h2>Summary</h2>
          <p>
            <strong>NoorLock collects no data.</strong> Nothing is transmitted off
            your device. There are no analytics, no telemetry, no accounts, no
            cloud sync, and no third-party SDKs. Everything the app does — detecting
            short-form video, redirecting away from it, counting how many times it
            saved you — happens entirely on the device you installed it on.
          </p>
          <p>
            This policy covers both NoorLock apps:
          </p>
          <ul>
            <li>
              <strong>NoorLock for Android</strong> — accessibility-service-based
              blocker for YouTube Shorts, Instagram Reels, Facebook Reels, and
              TikTok.
            </li>
            <li>
              <strong>NoorLock for Browser</strong> — Manifest V3 extension for
              Chrome, Edge, Firefox, and Safari that blocks the same short-form
              surfaces in the browser.
            </li>
          </ul>

          <h2>What data we collect</h2>
          <p>
            <strong>None.</strong> NoorLock does not collect, transmit, or store
            any personal information on any server. We do not have servers. There
            is no account to create.
          </p>

          <h2>What is stored on your device</h2>
          <p>
            The apps store two kinds of state locally so your preferences and
            counts survive restarts:
          </p>
          <ul>
            <li>
              <strong>Settings</strong> — which platforms are toggled on or off,
              and whether to show the NoorLock blocked page versus the platform
              home page after a block.
            </li>
            <li>
              <strong>Block counts</strong> — a per-platform tally of how many
              times NoorLock intercepted a short-form view. Used for the stats
              card in the app and the popup. Counts roll over a 30-day window;
              lifetime totals are also kept on-device.
            </li>
          </ul>
          <p>
            Android uses the OS-provided preferences store. The browser extension
            uses <code>chrome.storage.local</code> (or the equivalent on
            Firefox/Safari). Both are scoped to the app and never synced to a
            cloud service by NoorLock. (If you have enabled Chrome Sync or Google
            backup at the operating-system level, those services may copy
            app-level data per their own policies — that's outside NoorLock's
            control.)
          </p>
          <p>
            You can clear all NoorLock data at any time by uninstalling the app
            or, in the browser, by removing the extension or clearing extension
            storage from <code>chrome://extensions</code>.
          </p>

          <h2>Permissions and what they do</h2>

          <h3>NoorLock for Browser</h3>
          <ul>
            <li>
              <strong>Storage</strong> — persist the toggles and block counts
              described above.
            </li>
            <li>
              <strong>declarativeNetRequest (with host access)</strong> — redirect
              requests to short-form URLs (e.g.{" "}
              <code>youtube.com/shorts/&lt;id&gt;</code>) to a local blocked page
              bundled inside the extension. The redirect happens in the browser's
              network layer; the original URL is passed as a query parameter so
              the blocked page can show you what was intercepted.
            </li>
            <li>
              <strong>Host permissions for youtube.com, instagram.com,
              tiktok.com, facebook.com</strong> — required so the content scripts
              can remove short-form rails and tiles from the home feeds of these
              sites. The extension never reads page content beyond the elements it
              removes, and it makes no network requests to these sites or anywhere
              else.
            </li>
          </ul>

          <h3>NoorLock for Android</h3>
          <ul>
            <li>
              <strong>Accessibility Service</strong> — required to detect when
              short-form content is on screen in YouTube, Instagram, Facebook, or
              TikTok and trigger an automatic back navigation. The service reads
              only the UI events from these specific apps to make that decision;
              nothing read by the service leaves the device.
            </li>
            <li>
              <strong>Foreground Service / Boot Completed</strong> (where
              applicable) — keeps the blocker active across reboots so you don't
              have to re-enable it.
            </li>
          </ul>

          <p>
            <strong>The Android app declares no internet permission</strong>, so
            it cannot make network requests even if the code tried to. The browser
            extension makes no fetch/XHR/network requests in either the background
            service worker, the content scripts, or the popup.
          </p>

          <h2>Third parties</h2>
          <p>
            NoorLock does not embed any third-party SDKs, analytics, advertising,
            crash reporting, or tracking. The "Buy me a coffee" button in the
            extension popup and on the blocked page is a plain outbound link to{" "}
            <a
              href="https://buymeacoffee.com/noorkin"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://buymeacoffee.com/noorkin
            </a>
            . It only loads if you click it, in a new tab; NoorLock does not
            embed, prefetch, or ping the link. Anything that happens on Buy Me a
            Coffee after you click is governed by their own privacy policy.
          </p>

          <h2>Children's privacy</h2>
          <p>
            NoorLock does not collect any data, so it does not knowingly collect
            data from children under 13 (or the equivalent minimum age in your
            jurisdiction).
          </p>

          <h2>Open source</h2>
          <p>
            Both apps are open source. You can audit exactly what NoorLock does at{" "}
            <a
              href="https://github.com/noorkin-dev/noorlock-browser"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/noorkin-dev/noorlock-browser
            </a>{" "}
            and the corresponding Android repository. If you find anything in this
            policy that contradicts the code, the code is the source of truth and
            we will update the policy.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we ever change how NoorLock handles data, we'll update this page
            and the "Last updated" date at the top. Material changes (anything
            that introduces data collection or transmission) will also be called
            out in the app's release notes.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy or NoorLock's data handling? Email{" "}
            <a href="mailto:hello@noorkin.dev">hello@noorkin.dev</a> or open an
            issue on the GitHub repository.
          </p>
        </article>
      </Section>
    </>
  );
}
