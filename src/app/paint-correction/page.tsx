import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paint Correction & Swirl Removal",
  description:
    "Professional paint correction in Avon, Indiana. Top Choice Detailing offers 1-stage, 2-stage, and 3-stage paint correction for swirl removal, scratch removal, and paint restoration. Compound and polish to restore your clear coat. Veteran owned.",
  keywords: [
    "paint correction",
    "swirl removal",
    "scratch removal",
    "paint restoration",
    "compound polish",
    "clear coat restoration",
    "paint correction Avon Indiana",
    "multi-stage paint correction",
  ],
  openGraph: {
    title: "Paint Correction | Top Choice Detailing",
    description:
      "Multi-stage paint correction in Avon, IN. Swirl removal, scratch removal, and paint restoration. Veteran owned.",
    type: "website",
  },
};

export default function PaintCorrectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
            Veteran Owned &amp; Operated
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Paint Correction
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Swirl marks, scratches, and oxidation don&apos;t stand a chance. Our multi-stage paint correction process restores your vehicle&apos;s finish to better than showroom condition.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Is Paint Correction?
            </h2>
            <p className="text-lg text-gray-600">
              Paint correction is the process of permanently removing imperfections from your vehicle&apos;s clear coat through careful machine polishing. Unlike a glaze or filler that temporarily hides swirls, paint correction actually levels the clear coat to eliminate scratches, swirl marks, water spots, oxidation, and haze. The result is a deep, mirror-like finish with incredible clarity and gloss. At Top Choice Detailing in Avon, Indiana, we offer 1-stage, 2-stage, and 3-stage paint correction tailored to your vehicle&apos;s condition.
            </p>
          </div>

          {/* Correction Levels */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Levels of Paint Correction
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#2970e1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#2970e1]">1</span>
              </div>
              <h4 className="font-bold text-gray-900 text-xl mb-3">
                1-Stage Correction
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                A single-step compound and polish that removes 60-70% of surface imperfections. Ideal for vehicles in good condition with light swirls and minor scratches.
              </p>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">
                Best for: Light swirls &amp; haze
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-[#2970e1] text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2970e1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="w-16 h-16 bg-[#2970e1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#2970e1]">2</span>
              </div>
              <h4 className="font-bold text-gray-900 text-xl mb-3">
                2-Stage Correction
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                A compound cut followed by a finishing polish that removes 85-90% of imperfections. The go-to choice for most vehicles with moderate swirls, scratches, and water spots.
              </p>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">
                Best for: Moderate swirls &amp; scratches
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#2970e1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#2970e1]">3</span>
              </div>
              <h4 className="font-bold text-gray-900 text-xl mb-3">
                3-Stage Correction
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Heavy compound, medium polish, and fine finishing polish for maximum correction of 95%+ defects. Reserved for neglected paint with deep scratches, heavy oxidation, and severe swirling.
              </p>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">
                Best for: Heavily damaged paint
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need It */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Signs You Need Paint Correction
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Swirl Marks",
                desc: "Circular micro-scratches visible in direct sunlight, usually caused by improper washing or automatic car washes.",
              },
              {
                title: "Scratches",
                desc: "Light to moderate scratches from contact with brushes, keys, branches, or abrasive cleaning products.",
              },
              {
                title: "Water Spots",
                desc: "Mineral deposits etched into the clear coat from hard water, sprinklers, or letting water dry on the surface.",
              },
              {
                title: "Oxidation",
                desc: "Dull, chalky appearance caused by UV exposure breaking down the clear coat over time, especially on red and black paint.",
              },
              {
                title: "Haze & Cloudiness",
                desc: "An overall dull, cloudy look that robs your paint of depth and clarity even after a fresh wash.",
              },
              {
                title: "Pre-Coating Prep",
                desc: "Planning to apply ceramic coating? Paint correction first ensures the coating bonds to a flawless, defect-free surface.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Paint Correction Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Wash & Decontaminate",
                desc: "Thorough hand wash, clay bar, and chemical decontamination to remove all surface and bonded contaminants.",
              },
              {
                step: "2",
                title: "Paint Measurement",
                desc: "We measure clear coat thickness with a paint depth gauge to ensure safe correction without burning through.",
              },
              {
                step: "3",
                title: "Machine Correction",
                desc: "Using dual-action and rotary polishers with calibrated compounds, we systematically remove defects panel by panel.",
              },
              {
                step: "4",
                title: "Refine & Protect",
                desc: "A finishing polish perfects the surface, then wax, sealant, or ceramic coating locks in the results.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-[#2970e1] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Benefits of Paint Correction
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Permanent Results",
                desc: "Unlike glazes or fillers, paint correction permanently removes defects. The results last until new damage occurs.",
              },
              {
                title: "Dramatic Transformation",
                desc: "The before-and-after difference is stunning. Paint correction can make a 10-year-old vehicle look brand new.",
              },
              {
                title: "Increased Vehicle Value",
                desc: "Flawless paint is one of the first things buyers notice. Corrected paint can add hundreds or thousands to your resale value.",
              },
              {
                title: "Perfect Coating Prep",
                desc: "Paint correction is the essential foundation for ceramic coating. Coating over defects locks them in permanently — we ensure your surface is flawless first.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#2970e1]/10 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-5 h-5 text-[#2970e1]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Will paint correction remove deep scratches?",
                a: "Paint correction can remove scratches that are within the clear coat layer. If a scratch has penetrated through to the base coat or primer (you can feel it with your fingernail), it may be reduced but not fully removed. We'll assess your specific situation during the inspection.",
              },
              {
                q: "How long does paint correction take?",
                a: "A 1-stage correction typically takes 4 to 6 hours. A 2-stage takes 6 to 10 hours. A full 3-stage correction can take 10 to 16+ hours depending on vehicle size and severity of defects. We never rush the process.",
              },
              {
                q: "Is paint correction safe for my car?",
                a: "Absolutely. We use a paint depth gauge to measure your clear coat thickness before starting and throughout the process. This ensures we remove only what's necessary to eliminate defects without compromising your paint's integrity.",
              },
              {
                q: "Should I get paint correction before ceramic coating?",
                a: "Yes, always. Ceramic coating is a semi-permanent layer — any swirls or scratches underneath will be locked in. Paint correction ensures the coating bonds to a flawless surface, giving you the best possible results and the deepest gloss.",
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Restore Your Paint to Perfection
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Veteran owned, precision focused. Top Choice Detailing delivers showroom-quality paint correction in Avon, Indiana. See the difference for yourself.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Your Paint Correction
          </Link>
        </div>
      </section>
    </>
  );
}
