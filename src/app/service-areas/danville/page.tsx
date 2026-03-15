import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Detailing Danville, Indiana",
  description:
    "Reliable car detailing in Danville, Indiana. Top Choice Detailing offers interior & exterior detailing, ceramic coating, window tinting, paint correction, and more. Serving Danville and Hendricks County.",
  openGraph: {
    title: "Car Detailing Danville, Indiana | Top Choice Detailing",
    description:
      "Reliable auto detailing for Danville, IN drivers. Veteran owned with ceramic coating, paint correction, window tinting, and complete detail services.",
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

export default function DanvillePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[var(--font-catamaran)] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Car Detailing in Danville, Indiana
          </h1>
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">
            Professional auto detailing for Danville and western Hendricks County.
            Veteran owned, results driven.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Expert Auto Detailing for Danville Residents
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
            <p>
              Danville, the county seat of Hendricks County, is a community that values
              tradition, craftsmanship, and pride. From the historic courthouse square to
              the scenic trails at Blanton Woods and Ellis Park, Danville residents
              appreciate quality &mdash; and that extends to how their vehicles look and
              feel. Top Choice Detailing is located just east in Avon, a quick drive
              along US 36 for Danville drivers.
            </p>
            <p>
              Whether you drive a work truck through Danville&apos;s rural roads or a
              sedan along the US 36 corridor into Indianapolis, our veteran-owned team
              provides thorough, professional detailing that protects your investment.
              Danville&apos;s mix of country roads and highway driving means your vehicle
              picks up everything from gravel dust to road salt &mdash; and our detailing
              and ceramic coating services are designed to handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Services Available in Danville
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
            Why Danville Drivers Choose Top Choice Detailing
          </h2>
          <ul className="space-y-4">
            {[
              "Just a short drive east on US 36 from Danville to our Avon location",
              "Veteran owned \u2014 built on values of service, quality, and integrity",
              "Ceramic coatings to protect against gravel, dust, salt, and UV damage",
              "Thorough interior detailing for farm trucks, family cars, and everything in between",
              "Convenient Monday through Saturday hours",
              "Serving the Danville and greater Hendricks County community with pride",
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
            Danville drivers, give your vehicle the professional detail it deserves.
            Contact us today for a free, no-obligation quote.
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
