import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="relative bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
            Veteran Owned &amp; Operated
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Motorcycle Detailing
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Your bike deserves the same precision care you give it on the road. Our specialized motorcycle detailing in Avon, Indiana brings out every detail.
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
              Specialized Care for Two Wheels
            </h2>
            <p className="text-lg text-gray-600">
              Motorcycles aren&apos;t cars — and they shouldn&apos;t be detailed like one. At Top Choice Detailing, we understand the unique surfaces, finishes, and mechanical components that make bike detailing a specialty. From chrome polishing to engine bay cleaning, we treat your motorcycle with the expertise and care it demands. Whether you ride a cruiser, sport bike, touring machine, or vintage classic, we&apos;ll make it shine.
            </p>
          </div>

          {/* What's Included */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What&apos;s Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Motorcycle Detailing Process
          </h2>
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
            Why Detail Your Motorcycle?
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
            Give Your Bike the Detail It Deserves
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Veteran owned, rider approved. Top Choice Detailing is Avon, Indiana&apos;s trusted choice for professional motorcycle detailing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Your Bike Detail
          </Link>
        </div>
      </section>
    </>
  );
}
