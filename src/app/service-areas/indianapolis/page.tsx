import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Detailing Indianapolis, Indiana",
  description:
    "Professional car detailing in Indianapolis, Indiana. Top Choice Detailing serves the west side of Indy with interior & exterior detailing, ceramic coating, window tinting, paint correction, and fleet detailing.",
  openGraph: {
    title: "Car Detailing Indianapolis, Indiana | Top Choice Detailing",
    description:
      "Professional auto detailing for Indianapolis drivers. Ceramic coating, paint correction, window tinting, and full detail packages from a veteran-owned business.",
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

export default function IndianapolisPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[var(--font-catamaran)] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Car Detailing in Indianapolis, Indiana
          </h1>
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">
            Serving the greater Indianapolis area with premium auto detailing.
            Veteran owned, quality driven.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Indianapolis Auto Detailing You Can Count On
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
            <p>
              Indianapolis is the crossroads of America, and whether you&apos;re
              navigating I-465, cruising down Meridian Street, or parked at the
              Indianapolis Motor Speedway for race day, your vehicle is constantly
              exposed to road debris, weather, and wear. Top Choice Detailing serves
              the greater Indianapolis area from our base in Avon, located just west
              of the city along I-70 and US 36.
            </p>
            <p>
              From downtown Indy professionals who want their car looking sharp for
              client meetings to west-side families keeping the minivan clean, our
              veteran-owned team delivers thorough, reliable detailing with premium
              products. Indianapolis drivers face some of the toughest conditions in
              the Midwest &mdash; road salt, construction dust, and summer storms
              &mdash; and our services are designed to protect and restore your
              vehicle through it all.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Services Available in Indianapolis
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
            Why Indianapolis Drivers Choose Top Choice Detailing
          </h2>
          <ul className="space-y-4">
            {[
              "Easy access from the west side of Indy via I-70, US 36, or Rockville Road",
              "Veteran owned and operated \u2014 discipline, precision, and reliability",
              "Fleet detailing packages for Indianapolis businesses and dealerships",
              "Ceramic coatings built to withstand Indy\u2019s road salt and summer storms",
              "Open Monday through Saturday with convenient appointment scheduling",
              "Serving the entire greater Indianapolis metropolitan area",
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
            Indianapolis deserves top-tier detailing. Get a free quote and discover why
            drivers across the metro choose Top Choice.
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
