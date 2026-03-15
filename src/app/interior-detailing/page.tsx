import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/interior-detailing.png"
          alt="Professional interior car detailing in Avon, Indiana"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#082f6d]/80 via-[#082f6d]/70 to-[#0a0a0a]/90" />
        <div className="relative z-10 text-center text-white px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-4">
            Veteran Owned &amp; Operated
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Interior Car{" "}
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Detailing
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Give your vehicle&apos;s cabin the deep clean it deserves. Our
            professional interior auto detailing service in Avon, Indiana
            restores every surface to a like-new condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg shadow-white/20"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+13176637677"
              className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              Call (317) 663-7677
            </a>
          </div>
        </div>
      </section>

      {/* Image + Text Split Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/interior-detailing.png"
              alt="Interior detailing deep clean service"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              A Truly{" "}
              <span className="text-[#2970e1]">Deep Interior Clean</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Top Choice Detailing, our interior car detailing goes far
              beyond a basic vacuum. We meticulously clean, sanitize, and
              protect every inch of your vehicle&apos;s cabin — from the
              headliner to the floor mats.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you&apos;re dealing with stubborn stains, pet hair,
              lingering odors, or years of neglect, our veteran-level
              attention to detail brings your interior back to life.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              What&apos;s{" "}
              <span className="text-[#2970e1]">Included</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Every interior detail includes these professional-grade services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#2970e1]/10 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-[#2970e1]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Our Interior Detailing{" "}
            <span className="text-[#2970e1]">Process</span>
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            A systematic approach to delivering a flawless interior every time
          </p>
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
                <div className="w-16 h-16 bg-gradient-to-br from-[#2970e1] to-[#082f6d] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Benefits of Professional{" "}
            <span className="text-[#2970e1]">Interior Detailing</span>
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
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-10 bg-[#082f6d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-2xl md:text-3xl font-extrabold mb-1">Veteran</p>
              <p className="text-blue-200 text-sm">Owned &amp; Operated</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold mb-1">5.0 &#9733;</p>
              <p className="text-blue-200 text-sm">Customer Rating</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold mb-1">100%</p>
              <p className="text-blue-200 text-sm">Satisfaction Guaranteed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold mb-1">Premium</p>
              <p className="text-blue-200 text-sm">Products Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Frequently Asked{" "}
            <span className="text-[#2970e1]">Questions</span>
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
              <div key={item.q} className="border-b border-gray-100 pb-6">
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
      <section className="relative py-20 md:py-28">
        <Image
          src="/images/hero-main.png"
          alt="Top Choice Detailing background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#082f6d]/90 to-[#2970e1]/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Ready for a Fresh Interior?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Join hundreds of satisfied customers in Avon, Indiana who trust Top
            Choice Detailing for their interior car detailing needs. Veteran
            owned, detail obsessed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Schedule Your Detail Today
            </Link>
            <a
              href="tel:+13176637677"
              className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              (317) 663-7677
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
