import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Detailing Plainfield, Indiana",
  description:
    "Professional car detailing in Plainfield, Indiana. Top Choice Detailing offers interior & exterior detailing, ceramic coating, window tinting, paint correction, and more. Serving Plainfield and surrounding areas.",
  openGraph: {
    title: "Car Detailing Plainfield, Indiana | Top Choice Detailing",
    description:
      "Professional auto detailing for Plainfield, IN residents. Ceramic coating, paint correction, window tinting, and full detail packages.",
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

export default function PlainfieldPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[var(--font-catamaran)] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Car Detailing in Plainfield, Indiana
          </h1>
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">
            Premium auto detailing services just minutes from Plainfield.
            Quality you can see and feel.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional Auto Detailing for Plainfield Drivers
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
            <p>
              Plainfield sits just south of Avon along US 40, making it one of the closest
              communities to our shop. Whether you&apos;re commuting along I-70, visiting
              the Shops at Perry Crossing, or spending a day at Splash Island, your vehicle
              faces Indiana&apos;s road grime, sun, and salt year-round. Top Choice
              Detailing helps Plainfield drivers keep their cars, trucks, and SUVs protected
              and looking brand new.
            </p>
            <p>
              As a veteran-owned detailing business based in neighboring Avon, we combine
              military-grade discipline with premium products to deliver results that
              last. Plainfield residents can count on honest pricing, reliable scheduling,
              and meticulous attention to detail on every vehicle we touch.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Services Available in Plainfield
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
            Why Plainfield Residents Choose Top Choice Detailing
          </h2>
          <ul className="space-y-4">
            {[
              "Conveniently located in neighboring Avon \u2014 just a short drive down US 40",
              "Veteran owned and operated with a focus on excellence and integrity",
              "Full range of services from quick interior cleans to multi-stage paint correction",
              "Premium ceramic coatings to protect against Indiana\u2019s harsh winters and summer sun",
              "Flexible Monday through Saturday scheduling",
              "Trusted by Plainfield families, commuters, and car enthusiasts",
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
            Plainfield drivers deserve premium detailing without the premium hassle.
            Reach out today for a free quote.
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
