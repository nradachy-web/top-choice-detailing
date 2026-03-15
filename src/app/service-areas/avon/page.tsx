import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Detailing Avon, Indiana",
  description:
    "Premium car detailing in Avon, Indiana. Top Choice Detailing offers interior detailing, exterior detailing, ceramic coating, window tinting, paint correction, and more. Veteran owned and operated.",
  openGraph: {
    title: "Car Detailing Avon, Indiana | Top Choice Detailing",
    description:
      "Veteran owned auto detailing in Avon, IN. Interior & exterior detailing, ceramic coating, window tinting, and paint correction.",
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

export default function AvonPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[var(--font-catamaran)] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Car Detailing in Avon, Indiana
          </h1>
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">
            Veteran owned and operated auto detailing right here in Avon.
            Your vehicle deserves the best &mdash; and we deliver.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Avon&apos;s Trusted Auto Detailing Service
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
            <p>
              Top Choice Detailing is proud to call Avon home. Located in the heart of
              Hendricks County, we serve Avon residents and commuters who travel US 36
              and Ronald Reagan Parkway every day. Whether you&apos;re heading to the
              Avon Town Hall Park for a weekend event or picking up the kids from Avon
              schools, your vehicle is always on display &mdash; and we make sure it
              looks its best.
            </p>
            <p>
              As a veteran-owned business, we bring discipline, attention to detail, and
              a commitment to excellence to every job. From a quick interior refresh to a
              full ceramic coating, Avon drivers trust Top Choice Detailing to protect
              and enhance their vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Services Available in Avon
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
              >
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
            Why Avon Residents Choose Top Choice Detailing
          </h2>
          <ul className="space-y-4">
            {[
              "Locally based in Avon \u2014 no long drives or scheduling hassles",
              "Veteran owned with a commitment to precision and integrity",
              "Premium products and proven techniques for lasting results",
              "Flexible scheduling including Saturdays to fit your busy life",
              "Transparent pricing with no hidden fees or upsells",
              "Trusted by families, professionals, and car enthusiasts across Hendricks County",
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
            Book your Avon auto detailing appointment today and see why we&apos;re the
            top choice for drivers in Hendricks County.
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
