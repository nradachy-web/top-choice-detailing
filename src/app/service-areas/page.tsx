import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Auto Detailing Near You",
  description:
    "Top Choice Detailing serves Avon, Plainfield, Brownsburg, Mooresville, Indianapolis, Camby, and Danville, Indiana. Find premium auto detailing services near you.",
  openGraph: {
    title: "Service Areas | Top Choice Detailing",
    description:
      "Premium auto detailing serving central Indiana. Find Top Choice Detailing services in your area.",
  },
};

const SERVICE_AREAS = [
  {
    city: "Avon",
    slug: "avon",
    description:
      "Our home base. Avon residents enjoy convenient access to the full range of Top Choice Detailing services, from interior details to ceramic coatings.",
  },
  {
    city: "Plainfield",
    slug: "plainfield",
    description:
      "Just minutes from Avon, Plainfield drivers trust Top Choice Detailing for premium car care, paint correction, and window tinting.",
  },
  {
    city: "Brownsburg",
    slug: "brownsburg",
    description:
      "From Brownsburg's racing heritage to everyday commuters, we keep vehicles looking showroom-ready with expert detailing services.",
  },
  {
    city: "Mooresville",
    slug: "mooresville",
    description:
      "Mooresville residents count on Top Choice Detailing for thorough interior cleaning, exterior polishing, and long-lasting ceramic protection.",
  },
  {
    city: "Indianapolis",
    slug: "indianapolis",
    description:
      "Serving the greater Indianapolis area with mobile-friendly detailing, ceramic coating, and paint correction for cars, trucks, and SUVs.",
  },
  {
    city: "Camby",
    slug: "camby",
    description:
      "Camby vehicle owners enjoy the same top-tier detailing services with the convenience of a nearby, veteran-owned business.",
  },
  {
    city: "Danville",
    slug: "danville",
    description:
      "Danville drivers rely on Top Choice Detailing for professional car care, from basic washes to full ceramic coating packages.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[var(--font-catamaran)] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Service Areas
          </h1>
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">
            Top Choice Detailing proudly serves communities across central Indiana.
            Find premium auto detailing services near you.
          </p>
        </div>
      </section>

      {/* Service Area Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Find Us Near You
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Based in Avon, Indiana, we provide professional auto detailing to drivers
              throughout the west side of Indianapolis and surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#2970e1]/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-[#2970e1] transition-colors">
                    <svg
                      className="h-5 w-5 text-[#2970e1] group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2970e1] transition-colors">
                    {area.city}, IN
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2970e1]">
                  View services
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don&apos;t See Your Area?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We may still be able to help. Contact us to discuss your location and we&apos;ll
            do our best to accommodate you.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#2970e1] px-8 py-3.5 text-base font-bold text-white hover:bg-[#082f6d] transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
