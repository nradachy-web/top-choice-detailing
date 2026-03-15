import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Exterior Car Detailing",
  description:
    "Premium exterior car detailing in Avon, Indiana. Veteran owned Top Choice Detailing offers hand wash, clay bar treatment, paint decontamination, polish, wax, sealant, tire dressing, and trim restoration. Serving Avon, Plainfield, Brownsburg & Indianapolis.",
  keywords: [
    "exterior car detailing",
    "hand wash car detailing",
    "clay bar treatment",
    "car polish",
    "car wax",
    "paint decontamination",
    "tire dressing",
    "trim restoration",
    "Avon Indiana detailing",
  ],
  openGraph: {
    title: "Exterior Car Detailing | Top Choice Detailing",
    description:
      "Hand wash, clay bar, polish, wax & sealant exterior detailing in Avon, IN. Veteran owned & operated.",
    type: "website",
  },
};

export default function ExteriorDetailingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/exterior-detailing.png"
          alt="Professional exterior car detailing in Avon, Indiana"
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
            Exterior Car{" "}
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Detailing
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            A meticulous hand wash is just the beginning. Our full exterior
            detailing service in Avon, Indiana restores your paint&apos;s depth,
            gloss, and protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg shadow-white/20"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+13865887840"
              className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              Call (386) 588-7840
            </a>
          </div>
        </div>
      </section>

      {/* Image + Text Split Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/exterior-detailing.png"
              alt="Exterior car detailing hand wash and polish"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              More Than Just a{" "}
              <span className="text-[#2970e1]">Car Wash</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Automatic car washes leave swirl marks, miss contaminants, and
              offer zero protection. At Top Choice Detailing, every exterior
              detail starts with a careful hand wash and ends with long-lasting
              protection that keeps your vehicle looking showroom-ready.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our exterior car detailing process is designed to safely remove
              contaminants, restore shine, and shield your paint from the
              elements.
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
              A comprehensive exterior detail from start to finish
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hand Wash",
                desc: "A safe, two-bucket hand wash using pH-neutral shampoo removes dirt without scratching your paint.",
              },
              {
                title: "Clay Bar Treatment",
                desc: "A clay bar glides across your paint to pull out embedded contaminants like iron, tar, and industrial fallout.",
              },
              {
                title: "Paint Decontamination",
                desc: "Iron remover and tar solvent chemically dissolve bonded contaminants that washing alone can't remove.",
              },
              {
                title: "Machine Polish",
                desc: "A single-stage polish removes light swirls and haze, restoring clarity and depth to your clear coat.",
              },
              {
                title: "Wax / Sealant Application",
                desc: "A durable wax or paint sealant is applied by hand to protect against UV rays, rain, and road grime.",
              },
              {
                title: "Tire & Wheel Detail",
                desc: "Wheels are decontaminated and dressed, and tires receive a rich, satin tire dressing for a clean finish.",
              },
              {
                title: "Trim Restoration",
                desc: "Faded black plastic trim is restored to a deep, dark finish with long-lasting trim coating.",
              },
              {
                title: "Glass Polish",
                desc: "Exterior glass is cleaned and polished for maximum clarity and water-shedding performance.",
              },
              {
                title: "Door Jambs",
                desc: "Door jambs, gas cap area, and trunk jambs are wiped clean for a truly thorough finish.",
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

      {/* Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Our Exterior Detailing{" "}
            <span className="text-[#2970e1]">Process</span>
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Precision at every step to deliver a flawless finish
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Rinse & Pre-Wash",
                desc: "A thorough rinse and foam pre-wash loosens heavy dirt and reduces the chance of scratching during the hand wash.",
              },
              {
                step: "2",
                title: "Wash & Decontaminate",
                desc: "Two-bucket hand wash followed by clay bar and chemical decontamination to strip embedded fallout.",
              },
              {
                step: "3",
                title: "Polish & Protect",
                desc: "Machine polish to restore gloss, then a protective layer of wax or sealant is applied for lasting shine.",
              },
              {
                step: "4",
                title: "Dress & Inspect",
                desc: "Tires dressed, trim restored, glass polished, and a final walk-around to ensure perfection.",
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
            Why Professional{" "}
            <span className="text-[#2970e1]">Exterior Detailing</span>{" "}
            Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Protect Your Investment",
                desc: "Your vehicle's paint is constantly under attack from UV rays, bird droppings, tree sap, and road salt. Professional detailing and protection keeps it looking new.",
              },
              {
                title: "Prevent Paint Damage",
                desc: "Contaminants left on your paint eat into the clear coat over time. Clay bar treatment and decontamination remove them before they cause permanent damage.",
              },
              {
                title: "Boost Resale Value",
                desc: "A vehicle with well-maintained paint and a glossy finish commands significantly more at trade-in or private sale.",
              },
              {
                title: "Superior to Automatic Washes",
                desc: "Automatic car washes use abrasive brushes and recycled water that grind dirt into your paint. Our hand wash method is safe, thorough, and scratch-free.",
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
                q: "What is the difference between a car wash and exterior detailing?",
                a: "A car wash simply removes surface dirt. Exterior detailing is a comprehensive process that includes decontamination, clay bar treatment, polishing, and applying protective coatings. It restores and protects your paint, not just cleans it.",
              },
              {
                q: "How often should I get my car detailed on the outside?",
                a: "We recommend a full exterior detail every 3 to 6 months. If your vehicle is parked outside or driven daily, quarterly detailing keeps your paint protected year-round.",
              },
              {
                q: "Will the clay bar scratch my paint?",
                a: "When used properly with the right lubrication, a clay bar is completely safe for your paint. It's designed to pull contaminants off the surface without scratching. We follow it with a polish to ensure a flawless finish.",
              },
              {
                q: "What is paint decontamination?",
                a: "Paint decontamination is the process of removing bonded contaminants like iron particles, tar, and industrial fallout from your vehicle's paint. These contaminants can't be removed with a regular wash and, if left untreated, will damage your clear coat over time.",
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
            Make Your Paint Shine Again
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Trusted by car owners across Avon, Plainfield, Brownsburg, and
            Indianapolis. Veteran owned, quality guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Schedule Your Detail Today
            </Link>
            <a
              href="tel:+13865887840"
              className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              (386) 588-7840
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
