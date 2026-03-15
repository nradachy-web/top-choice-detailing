import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Interior Detailing", href: "/interior-detailing" },
  { label: "Exterior Detailing", href: "/exterior-detailing" },
  { label: "Ceramic Coating", href: "/ceramic-coating" },
  { label: "Window Tinting", href: "/window-tinting" },
  { label: "Motorcycle Detailing", href: "/motorcycle-detailing" },
  { label: "Fleet Detailing", href: "/fleet-detailing" },
  { label: "Paint Correction", href: "/paint-correction" },
];

const serviceAreas = [
  "Avon",
  "Plainfield",
  "Brownsburg",
  "Mooresville",
  "Indianapolis",
  "Camby",
  "Danville",
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.jpg"
                alt="Top Choice Detailing - Veteran Owned"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Veteran owned and operated auto detailing in Avon, Indiana.
              Committed to delivering showroom-quality results with military
              precision and attention to detail.
            </p>
            {/* Veteran Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
              <svg
                className="w-5 h-5 text-accent-light"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-medium text-accent-light">
                Veteran Owned &amp; Operated
              </span>
            </div>
          </div>

          {/* Services Column */}
          <nav aria-label="Services">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-white/60 flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5 text-primary-light"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {area}, IN
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+13176637677"
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (317) 663-7677
                </a>
              </li>
              <li>
                <a
                  href="mailto:chance@top-choicedetailing.com"
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  chance@top-choicedetailing.com
                </a>
              </li>
              <li>
                <span className="text-sm text-white/60 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-primary-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Avon, Indiana
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors"
              >
                Get a Free Quote
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Top Choice Detailing. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Apex Attribution */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center">
          <p className="text-[11px] text-white/30">
            Website designed &amp; developed by{" "}
            <a
              href="https://modernapexstrategies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 transition-colors underline underline-offset-2"
            >
              Modern Apex Strategies
            </a>
            {" "}| modernapexstrategies.com
          </p>
        </div>
      </div>
    </footer>
  );
}
