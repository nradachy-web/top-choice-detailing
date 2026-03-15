import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Detailing Camby, Indiana",
  description:
    "Trusted car detailing in Camby, Indiana. Top Choice Detailing offers interior & exterior detailing, ceramic coating, window tinting, paint correction, motorcycle detailing, and fleet services.",
  openGraph: {
    title: "Car Detailing Camby, Indiana | Top Choice Detailing",
    description:
      "Trusted auto detailing for Camby, IN residents. Veteran owned with ceramic coating, paint correction, and complete detail packages.",
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

export default function CambyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[var(--font-catamaran)] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Car Detailing in Camby, Indiana
          </h1>
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">
            Convenient, professional auto detailing for Camby residents.
            Veteran owned quality, close to home.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Auto Detailing Services for Camby Drivers
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
            <p>
              Camby is a growing community in Mooresville and Decatur Township, nestled
              along SR 67 between Mooresville and the southwest side of Indianapolis.
              With easy access via SR 67 and Camby Road, residents are just a short
              drive from Top Choice Detailing in Avon. We make it easy for Camby vehicle
              owners to keep their cars, trucks, and SUVs in pristine condition.
            </p>
            <p>
              Whether you&apos;re hauling kids to Mooresville schools, commuting into
              downtown Indy, or enjoying the trails at nearby Heartland Crossing, your
              vehicle puts in serious miles. Our veteran-owned team uses premium detailing
              products and proven methods to clean, protect, and restore your ride so it
              looks and feels like new.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Services Available in Camby
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
            Why Camby Residents Choose Top Choice Detailing
          </h2>
          <ul className="space-y-4">
            {[
              "Located in nearby Avon \u2014 convenient for Camby and Decatur Township residents",
              "Veteran owned business built on discipline, integrity, and quality",
              "Full-service detailing from basic cleans to ceramic coating packages",
              "Protection against Indiana\u2019s seasonal road conditions and harsh weather",
              "Monday through Saturday scheduling to fit your routine",
              "Fair pricing and honest service \u2014 no upselling, no hidden fees",
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
            Camby drivers, your vehicle deserves the best. Contact Top Choice Detailing
            today for a free quote.
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
