import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Idle Clans Hub",
  description:
    "Privacy Policy for Idle Clans Hub. Learn how we collect, use, and protect your data, including information about cookies, Google Analytics, and Google AdSense.",
};

const LAST_UPDATED = "March 3, 2026";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#031111] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-700/30 bg-gradient-to-br from-[#001515] to-[#001212] p-6 md:p-10 shadow-[0_0_40px_rgba(16,185,129,0.1)] mb-8">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-sm">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 md:p-10 space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to Idle Clans Hub (&quot;the Site&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;). This Privacy Policy explains
              how Idle Clans Hub collects, uses, and shares information about
              you when you visit{" "}
              <strong className="text-white">idleclanshub.vercel.app</strong>{" "}
              and any related pages. By using this Site, you agree to the
              collection and use of information in accordance with this policy.
            </p>
            <p className="mt-3">
              This Site is operated by an individual developer (&quot;the
              Operator&quot;) and is not affiliated with the official Idle Clans
              game or its developer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              2. Information We Collect
            </h2>
            <h3 className="font-semibold text-white mb-2">
              2.1 Information You Provide
            </h3>
            <p>
              Idle Clans Hub does not require account registration. We do not
              collect names, email addresses, or other personally identifying
              information directly from you through a registration form.
            </p>
            <p className="mt-3">
              When you use the Search, Calculator, or other tools on this Site,
              you may enter an Idle Clans username. This username is used solely
              to retrieve publicly available game data from the Idle Clans API.
              Usernames entered into our tools may be stored in your
              browser&apos;s local storage to improve your experience on
              subsequent visits. This data is stored on your device and is not
              transmitted to our servers.
            </p>

            <h3 className="font-semibold text-white mt-4 mb-2">
              2.2 Automatically Collected Information
            </h3>
            <p>
              When you visit this Site, certain technical information is
              collected automatically, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                IP address (collected by hosting infrastructure and analytics
                services)
              </li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring URL (the website you came from)</li>
              <li>Device type and screen resolution</li>
            </ul>
            <p className="mt-3">
              This information is collected through cookies and similar
              technologies by Google Analytics and Google AdSense, as described
              below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              3. Cookies
            </h2>
            <p>
              Cookies are small text files placed on your device by websites you
              visit. They are widely used to make websites work efficiently and
              to provide information to the website operators.
            </p>
            <p className="mt-3">We use the following types of cookies:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong className="text-white">Analytics Cookies:</strong> Used
                by Google Analytics to collect anonymous information about how
                visitors use this Site, such as which pages are most popular and
                how users navigate between pages.
              </li>
              <li>
                <strong className="text-white">Advertising Cookies:</strong>{" "}
                Used by Google AdSense to serve personalised or contextual
                advertisements. These cookies may track your browsing behaviour
                across websites to deliver relevant ads.
              </li>
              <li>
                <strong className="text-white">Functional Cookies:</strong> Used
                to remember your preferences (such as recently searched
                usernames) to improve your experience on the Site. These are
                stored only in your browser&apos;s local storage.
              </li>
            </ul>
            <p className="mt-3">
              You can control cookies through your browser settings. Please note
              that disabling certain cookies may affect the functionality of
              this Site or the relevance of advertisements shown.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              4. Google Analytics
            </h2>
            <p>
              This Site uses{" "}
              <strong className="text-white">Google Analytics</strong>, a web
              analytics service provided by Google LLC (&quot;Google&quot;).
              Google Analytics uses cookies to collect anonymous information
              about your use of the Site, including your IP address (which is
              anonymised before storage), browser type, pages visited, and time
              spent on those pages.
            </p>
            <p className="mt-3">
              This information is transmitted to and stored by Google on servers
              in the United States. Google uses this information to evaluate
              your use of the Site, compile reports on site activity, and
              provide other services relating to site activity and internet
              usage. Google may also transfer this information to third parties
              where required to do so by law, or where such third parties
              process the information on Google&apos;s behalf.
            </p>
            <p className="mt-3">
              You can opt out of Google Analytics by installing the{" "}
              <Link
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Google Analytics opt-out browser add-on
              </Link>
              .
            </p>
            <p className="mt-3">
              For more information about Google Analytics and privacy, visit{" "}
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Google&apos;s Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              5. Google AdSense
            </h2>
            <p>
              This Site uses{" "}
              <strong className="text-white">Google AdSense</strong>, an
              advertising service provided by Google LLC. Google AdSense uses
              cookies and similar technologies to serve advertisements on this
              Site based on your prior visits to this and other websites. These
              advertisements help fund the continued development and hosting of
              this Site.
            </p>
            <p className="mt-3">
              Google&apos;s use of advertising cookies enables it and its
              partners to serve ads based on your visit to this Site and/or
              other sites on the internet. You may opt out of personalised
              advertising by visiting{" "}
              <Link
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Google Ads Settings
              </Link>
              . Alternatively, you can opt out of the use of cookies for
              personalised advertising by third-party vendors by visiting{" "}
              <Link
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                aboutads.info
              </Link>
              .
            </p>
            <p className="mt-3">
              For more information about how Google uses data when you use sites
              that use Google services, visit{" "}
              <Link
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Google&apos;s How Google uses data page
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              6. How We Use Information
            </h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Operate and improve this Site and its tools</li>
              <li>
                Understand how visitors use the Site (via aggregated, anonymous
                analytics data)
              </li>
              <li>Display relevant advertisements to fund Site operation</li>
              <li>Diagnose and fix technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with
              third parties for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              7. Third-Party Links
            </h2>
            <p>
              This Site may contain links to external websites, including the
              official Idle Clans website, the game&apos;s Discord server, and
              GitHub. This Privacy Policy applies only to Idle Clans Hub. We are
              not responsible for the privacy practices of any third-party
              websites. We encourage you to review the privacy policies of any
              external sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              8. Data Retention
            </h2>
            <p>
              Any data stored in your browser&apos;s local storage (such as
              recently searched usernames) remains on your device until you
              clear your browser data or the storage expires. We do not maintain
              server-side records of individual user searches or sessions beyond
              what is captured by Google Analytics in aggregated, anonymised
              form.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              9. Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have rights regarding your
              personal data, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The right to access information we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to object to processing of your data</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mt-3">
              Because most data on this Site is processed by Google (Analytics
              and AdSense) and not stored by us independently, many of these
              rights are best exercised directly with Google. For any requests
              directed to us specifically, contact us via the details on the{" "}
              <Link
                href="/contact"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Contact page
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              10. Children&apos;s Privacy
            </h2>
            <p>
              This Site is not directed at children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you believe we have inadvertently collected such information,
              please contact us immediately so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be reflected by updating the &quot;Last updated&quot; date at the
              top of this page. Continued use of the Site after any changes
              constitutes your acceptance of the updated policy. We encourage
              you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-3">
              12. Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please visit our{" "}
              <Link
                href="/contact"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
