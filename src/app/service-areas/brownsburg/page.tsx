import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Detailing Brownsburg, Indiana",
  description:
    "Expert car detailing in Brownsburg, Indiana. Top Choice Detailing offers interior & exterior detailing, ceramic coating, window tinting, paint correction, motorcycle detailing, and fleet services.",
  openGraph: {
    title: "Car Detailing Brownsburg, Indiana | Top Choice Detailing",
    description:
      "Expert auto detailing for Brownsburg, IN drivers. From ceramic coatings to full interior details, we keep your vehicle looking its best.",
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

export default function BrownsburgPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[var(--font-catamaran)] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Car Detailing in Brownsburg, Indiana
          </h1>
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">
            Racing-grade attention to detail for Brownsburg drivers.
            Veteran owned and operated.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Premium Auto Detailing for Brownsburg
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
            <p>
              Brownsburg is known for its racing heritage &mdash; home to Lucas Oil
              Raceway and dozens of motorsport teams along the famous &ldquo;Racing
              Capital&rdquo; corridor. At Top Choice Detailing, we bring that same
              passion for performance to every vehicle we detail. Located just south in
              Avon, we&apos;re only a quick trip down North Green Street or SR 267 for
              Brownsburg residents.
            </p>
            <p>
              Whether your daily driver needs a thorough interior cleaning after
              Brownsburg&apos;s muddy spring season or your weekend car deserves a
              ceramic coating before cruise-in season, our veteran-owned team delivers
              exceptional results every time. We use premium products and proven
              techniques to protect your vehicle from Indiana&apos;s ever-changing
              weather.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Services Available in Brownsburg
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
            Why Brownsburg Drivers Choose Top Choice Detailing
          </h2>
          <ul className="space-y-4">
            {[
              "Just minutes south of Brownsburg in neighboring Avon",
              "Veteran owned \u2014 precision and reliability in every detail",
              "From race cars to family SUVs, we treat every vehicle with care",
              "Ceramic coatings that stand up to Indiana\u2019s road salt and summer heat",
              "Open Monday through Saturday with flexible appointment times",
              "Honest, transparent pricing with no surprise fees",
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
            Give your vehicle the racing-grade detail it deserves. Contact us today
            for a free Brownsburg auto detailing quote.
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
