import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Motorcycle Detailing",
  description:
    "Professional motorcycle detailing in Avon, Indiana. Top Choice Detailing offers specialized bike detailing including chrome polishing, engine detailing, seat cleaning, paint protection, and more. Veteran owned.",
  keywords: [
    "motorcycle detailing",
    "bike detailing",
    "chrome polishing",
    "motorcycle wash",
    "motorcycle paint protection",
    "engine detailing",
    "motorcycle seat cleaning",
    "Avon Indiana motorcycle detailing",
  ],
  openGraph: {
    title: "Motorcycle Detailing | Top Choice Detailing",
    description:
      "Specialized motorcycle detailing in Avon, IN. Chrome polishing, engine detailing, paint protection. Veteran owned.",
    type: "website",
  },
};

export default function MotorcycleDetailingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/motorcycle-detailing.png"
          alt="Professional motorcycle detailing in Avon, Indiana"
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
            Motorcycle{" "}
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Detailing
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Your bike deserves the same precision care you give it on the road.
            Our specialized motorcycle detailing in Avon, Indiana brings out
            every detail.
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
              src="/images/motorcycle-detailing.png"
              alt="Motorcycle chrome polishing and engine detailing"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Specialized Care for{" "}
              <span className="text-[#2970e1]">Two Wheels</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Motorcycles aren&apos;t cars — and they shouldn&apos;t be detailed
              like one. At Top Choice Detailing, we understand the unique
              surfaces, finishes, and mechanical components that make bike
              detailing a specialty.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From chrome polishing to engine bay cleaning, we treat your
              motorcycle with the expertise and care it demands. Whether you ride
              a cruiser, sport bike, touring machine, or vintage classic,
              we&apos;ll make it shine.
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
              Complete motorcycle detailing tailored to your bike
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hand Wash & Rinse",
                desc: "A careful hand wash using motorcycle-safe products removes road grime without damaging finishes or electronics.",
              },
              {
                title: "Chrome Polishing",
                desc: "Exhaust pipes, handlebars, and chrome accents are polished to a brilliant, mirror-like finish.",
              },
              {
                title: "Engine Detailing",
                desc: "Engine surfaces are degreased and detailed to remove built-up oil, grease, and road film safely.",
              },
              {
                title: "Seat Cleaning",
                desc: "Leather or vinyl seats are cleaned and conditioned to restore their look and prevent cracking.",
              },
              {
                title: "Paint Protection",
                desc: "Paint is polished to remove light imperfections and sealed with wax or coating for long-lasting protection.",
              },
              {
                title: "Wheel & Spoke Detail",
                desc: "Wheels and spokes are individually cleaned, decontaminated, and dressed for a showroom-quality finish.",
              },
              {
                title: "Chain & Drivetrain",
                desc: "Chain is cleaned and inspected. Drivetrain components are wiped down for a clean, well-maintained look.",
              },
              {
                title: "Windscreen & Gauge Cleaning",
                desc: "Windscreen polished for clarity, gauges carefully cleaned without scratching or damaging displays.",
              },
              {
                title: "Final Dressing",
                desc: "Rubber, plastic trim, and tires are dressed with UV-protectant for a rich, clean finished look.",
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
            Our Motorcycle Detailing{" "}
            <span className="text-[#2970e1]">Process</span>
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Rider-approved care from start to finish
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                desc: "We inspect your bike's finish, chrome, engine, and surfaces to identify areas that need special attention.",
              },
              {
                step: "2",
                title: "Wash & Degrease",
                desc: "Gentle hand wash and targeted degreasing of engine and drivetrain components using bike-safe products.",
              },
              {
                step: "3",
                title: "Polish & Protect",
                desc: "Chrome is polished, paint is corrected if needed, and all surfaces receive protective treatment.",
              },
              {
                step: "4",
                title: "Dress & Detail",
                desc: "Final dressing on rubber and trim, seat conditioning, and a complete inspection to ensure perfection.",
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
            Why Detail Your{" "}
            <span className="text-[#2970e1]">Motorcycle</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Prevent Corrosion",
                desc: "Road salt, bugs, and moisture cause corrosion on exposed metal and chrome. Regular detailing removes these before they cause damage.",
              },
              {
                title: "Maintain Resale Value",
                desc: "A clean, well-maintained motorcycle commands a significantly higher price when it's time to sell or trade.",
              },
              {
                title: "Spot Issues Early",
                desc: "Our detailed inspection during the detailing process can reveal leaks, wear, or damage you might not notice otherwise.",
              },
              {
                title: "Ride With Pride",
                desc: "There's nothing like riding a freshly detailed bike. Gleaming chrome, deep paint gloss, and a spotless finish turn heads everywhere.",
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
                q: "Do you detail all types of motorcycles?",
                a: "Yes. We detail cruisers, sport bikes, touring bikes, adventure bikes, dirt bikes, and vintage/classic motorcycles. Each type gets a tailored approach based on its specific finishes and components.",
              },
              {
                q: "Is it safe to wash a motorcycle engine?",
                a: "When done properly, yes. We use targeted degreasing and controlled water application to clean engine surfaces without forcing water into electrical connections or sensitive components.",
              },
              {
                q: "How often should I detail my motorcycle?",
                a: "We recommend a full detail at the start and end of riding season at minimum. If you ride frequently, a monthly wash and quarterly full detail will keep your bike in peak condition.",
              },
              {
                q: "Can you apply ceramic coating to a motorcycle?",
                a: "Absolutely. Ceramic coating is excellent for motorcycles — it protects paint, chrome, and exposed surfaces from the elements while making cleanup much easier. Ask about our motorcycle ceramic coating packages.",
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
            Give Your Bike the Detail It Deserves
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Veteran owned, rider approved. Top Choice Detailing is Avon,
            Indiana&apos;s trusted choice for professional motorcycle detailing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Schedule Your Bike Detail
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
