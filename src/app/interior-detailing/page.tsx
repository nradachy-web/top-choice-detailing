import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Car Detailing",
  description:
    "Professional interior car detailing in Avon, Indiana. Veteran owned Top Choice Detailing offers deep interior auto detailing including upholstery cleaning, leather conditioning, steam cleaning, stain removal, and odor elimination. Serving Avon, Plainfield, Brownsburg & Indianapolis.",
  keywords: [
    "interior car detailing",
    "interior auto detailing Avon Indiana",
    "car interior cleaning",
    "upholstery cleaning",
    "leather conditioning",
    "steam cleaning car interior",
    "car odor elimination",
    "stain removal car",
    "Avon Indiana detailing",
  ],
  openGraph: {
    title: "Interior Car Detailing | Top Choice Detailing",
    description:
      "Deep interior car detailing in Avon, IN. Veteran owned & operated. Upholstery cleaning, leather conditioning, steam cleaning, and more.",
    type: "website",
  },
};

export default function InteriorDetailingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
            Veteran Owned &amp; Operated
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Interior Car Detailing
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Give your vehicle&apos;s cabin the deep clean it deserves. Our professional interior auto detailing service in Avon, Indiana restores every surface to a like-new condition.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Truly Deep Interior Clean
            </h2>
            <p className="text-lg text-gray-600">
              At Top Choice Detailing, our interior car detailing goes far beyond a basic vacuum. We meticulously clean, sanitize, and protect every inch of your vehicle&apos;s cabin — from the headliner to the floor mats. Whether you&apos;re dealing with stubborn stains, pet hair, lingering odors, or years of neglect, our veteran-level attention to detail brings your interior back to life.
            </p>
          </div>

          {/* What's Included */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What&apos;s Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Deep Vacuuming",
                desc: "Every crevice, seat fold, and trunk area is thoroughly vacuumed to remove dirt, debris, and pet hair.",
              },
              {
                title: "Steam Cleaning",
                desc: "High-temperature steam lifts embedded grime from carpets, upholstery, and hard-to-reach areas while killing bacteria.",
              },
              {
                title: "Leather Conditioning",
                desc: "Premium conditioners restore moisture and flexibility to leather seats, preventing cracking and fading.",
              },
              {
                title: "Dashboard & Trim Treatment",
                desc: "All plastic, vinyl, and trim surfaces are cleaned and dressed with UV-protectant to prevent fading.",
              },
              {
                title: "Odor Elimination",
                desc: "We neutralize odors at the source — not just cover them up — leaving your cabin smelling fresh and clean.",
              },
              {
                title: "Stain Removal",
                desc: "Targeted stain removal on seats, carpets, and headliners using professional-grade extractors and solutions.",
              },
              {
                title: "Glass Cleaning",
                desc: "Interior glass is cleaned streak-free for maximum visibility and a polished look.",
              },
              {
                title: "Door Jambs & Panels",
                desc: "Door jambs, panels, and cup holders are scrubbed and wiped down for a complete transformation.",
              },
              {
                title: "Air Vent Detailing",
                desc: "Dust and debris are removed from every vent with specialized brushes for improved air quality.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / Steps */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Interior Detailing Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "We assess your vehicle's interior condition and identify problem areas like stains, odors, or wear.",
              },
              {
                step: "2",
                title: "Deep Clean",
                desc: "Thorough vacuuming followed by steam cleaning and extraction of all soft surfaces and carpets.",
              },
              {
                step: "3",
                title: "Detail & Treat",
                desc: "Leather conditioning, dashboard treatment, glass cleaning, and targeted stain removal on every surface.",
              },
              {
                step: "4",
                title: "Final Inspection",
                desc: "A complete walk-through ensures every detail meets our high standard before handoff.",
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Benefits of Professional Interior Detailing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Healthier Cabin Environment",
                desc: "Removes allergens, bacteria, and mold that accumulate in your car's upholstery and air system.",
              },
              {
                title: "Preserve Resale Value",
                desc: "A well-maintained interior dramatically increases your vehicle's trade-in and resale value.",
              },
              {
                title: "Eliminate Stubborn Odors",
                desc: "Food, smoke, and pet odors are neutralized at the molecular level — not just masked with freshener.",
              },
              {
                title: "Protect Surfaces",
                desc: "UV-protectant treatments on dashboards and leather conditioning prevent cracking, fading, and premature aging.",
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "How long does interior car detailing take?",
                a: "A full interior detail typically takes 2 to 4 hours depending on the vehicle's size and condition. Heavily soiled interiors or large SUVs may take longer. We never rush the process — quality is our priority.",
              },
              {
                q: "Can you remove pet hair and pet odors?",
                a: "Absolutely. We use specialized tools and extraction equipment to remove pet hair from every surface, and our odor elimination process neutralizes pet smells at the source — not just covers them up.",
              },
              {
                q: "Is interior detailing safe for leather seats?",
                a: "Yes. We use pH-balanced cleaners and premium leather conditioners that clean without stripping natural oils. Our conditioning treatment restores moisture and protects against future cracking and fading.",
              },
              {
                q: "How often should I get my car's interior detailed?",
                a: "We recommend a professional interior detail every 3 to 6 months for most drivers. If you have kids, pets, or eat in your car frequently, every 2 to 3 months keeps things in top shape.",
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
            Ready for a Fresh Interior?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Join hundreds of satisfied customers in Avon, Indiana who trust Top Choice Detailing for their interior car detailing needs. Veteran owned, detail obsessed.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Your Detail Today
          </Link>
        </div>
      </section>
    </>
  );
}
