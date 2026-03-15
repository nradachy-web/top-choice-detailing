import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Detailing Mooresville, Indiana",
  description:
    "Quality car detailing in Mooresville, Indiana. Top Choice Detailing provides interior & exterior detailing, ceramic coating, window tinting, paint correction, and more. Veteran owned.",
  openGraph: {
    title: "Car Detailing Mooresville, Indiana | Top Choice Detailing",
    description:
      "Quality auto detailing for Mooresville, IN residents. Ceramic coating, paint correction, window tinting, and complete detail packages.",
  },
};

const SERVICES = [
  { name: "Interior Detailing", description: "Deep cleaning of seats, carpets, dashboard, and all interior surfaces." },
  { name: "Exterior Detailing", description: "Hand wash, clay bar, polish, and sealant for a showroom finish." },
  { name: "Ceramic Coating", description: "Long-lasting paint protection that repels water, dirt, and UV rays." },
  { name: "Window Tinting", description: "Professional window film installation for heat reduction and privacy." },
  { name: "Paint Correction", description: "Remove swirl marks, scratches, and oxidation to restore your paint." },
  { name: "Motorcycle Detailing", description: "Specialized detailing for motorcycles of all makes and models." },
  { name: "Fleet Detailing", description: "Keep your business vehicles looking professional with fleet packages." },
];

export default function MooresvillePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[var(--font-catamaran)] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Car Detailing in Mooresville, Indiana
          </h1>
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">
            Professional auto detailing for Mooresville and Morgan County drivers.
            Veteran owned quality you can trust.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Top-Tier Detailing for Mooresville Residents
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
            <p>
              Mooresville, the heart of Morgan County, sits just south of Avon along
              SR 67. Known for its charming downtown, Pioneer Park, and the annual
              festivals that bring the community together, Mooresville drivers take pride
              in their town &mdash; and their vehicles. Top Choice Detailing helps keep
              that pride shining with professional auto detailing services just a short
              drive north.
            </p>
            <p>
              From daily commuters heading up to Indianapolis to families who want their
              SUV looking fresh for the weekend, our veteran-owned team provides
              meticulous detailing with premium products. Mooresville&apos;s country
              roads can kick up dust and gravel, and Indiana winters bring salt and
              grime &mdash; our ceramic coatings and thorough details keep your paint
              protected all year long.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Services Available in Mooresville
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.name} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Mooresville Residents Choose Top Choice Detailing
          </h2>
          <ul className="space-y-4">
            {[
              "Located in nearby Avon \u2014 a quick drive north on SR 67",
              "Veteran owned business with a reputation for honesty and quality",
              "Ceramic coatings to protect against gravel roads, salt, and harsh weather",
              "Thorough interior detailing that removes dirt, pet hair, and allergens",
              "Saturday availability for busy Morgan County families",
              "Competitive pricing with no hidden charges",
            ].map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <svg className="h-6 w-6 text-[#2970e1] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Mooresville drivers deserve premium detailing close to home. Contact us
            today for a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-bold text-[#082f6d] hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
