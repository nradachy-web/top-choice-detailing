import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ceramic Coating with Lifetime Guarantee",
  description:
    "Lifetime ceramic coating in Avon, Indiana with free recoat guarantee. Top Choice Detailing offers professional hydrophobic ceramic paint protection with UV resistance, scratch resistance, and chemical resistance. Veteran owned.",
  keywords: [
    "ceramic coating Avon Indiana",
    "lifetime ceramic coating",
    "paint protection",
    "hydrophobic coating",
    "ceramic paint protection",
    "UV protection coating",
    "scratch resistant coating",
    "Avon Indiana ceramic coating",
  ],
  openGraph: {
    title: "Lifetime Ceramic Coating | Top Choice Detailing",
    description:
      "Lifetime ceramic coating with free recoat guarantee in Avon, IN. Hydrophobic paint protection from a veteran owned detailer.",
    type: "website",
  },
};

export default function CeramicCoatingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/ceramic-coating.png"
          alt="Professional ceramic coating application in Avon, Indiana"
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
            Ceramic{" "}
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Coating
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-4">
            The ultimate paint protection. Our lifetime ceramic coating comes
            with a free recoat promise — the last coating your vehicle will ever
            need.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-semibold mb-8">
            Lifetime Guarantee &bull; Free Recoat
          </div>
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
              src="/images/ceramic-coating.png"
              alt="Ceramic coating hydrophobic protection"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              What Is{" "}
              <span className="text-[#2970e1]">Ceramic Coating</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Ceramic coating is a liquid polymer that chemically bonds to your
              vehicle&apos;s factory paint, creating a permanent or
              semi-permanent layer of protection. Unlike wax or sealant that
              wears off in weeks, our professional-grade ceramic coating creates
              a rock-hard, hydrophobic shell that repels water, dirt, and
              contaminants for years.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Top Choice Detailing in Avon, Indiana, we back our ceramic
              coating with a lifetime guarantee and free recoat — because we
              stand behind our work.
            </p>
          </div>
        </div>
      </section>

      {/* Coating Benefits */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Ceramic Coating{" "}
              <span className="text-[#2970e1]">Benefits</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              The most advanced paint protection available today
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hydrophobic Surface",
                desc: "Water beads and sheets off instantly, making your vehicle easier to wash and keeping it cleaner longer between washes.",
              },
              {
                title: "UV Protection",
                desc: "Blocks harmful UV rays that cause paint oxidation and fading, keeping your color deep and vibrant for years.",
              },
              {
                title: "Scratch Resistance",
                desc: "The hard ceramic layer adds an additional barrier against light scratches, swirl marks, and marring from daily driving.",
              },
              {
                title: "Chemical Resistance",
                desc: "Protects against bird droppings, tree sap, acid rain, bug splatter, and road salt that etch into unprotected paint.",
              },
              {
                title: "Enhanced Gloss",
                desc: "Amplifies the depth and clarity of your paint's color with a mirror-like, wet-look shine that turns heads.",
              },
              {
                title: "Lifetime Guarantee",
                desc: "Our coating comes with a lifetime warranty and free recoat — bring your vehicle in yearly and we'll keep it protected forever.",
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

      {/* Comparison */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Ceramic Coating vs.{" "}
            <span className="text-[#2970e1]">The Rest</span>
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="py-4 pr-4 pl-6 text-gray-900 font-bold">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-gray-900 font-bold">Wax</th>
                  <th className="py-4 px-4 text-gray-900 font-bold">
                    Sealant
                  </th>
                  <th className="py-4 px-4 pr-6 text-[#2970e1] font-bold">
                    Ceramic Coating
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {[
                  ["Durability", "1-3 months", "4-6 months", "Lifetime"],
                  ["Hydrophobic", "Moderate", "Good", "Excellent"],
                  ["UV Protection", "Minimal", "Moderate", "Superior"],
                  ["Scratch Resistance", "None", "Minimal", "High"],
                  ["Chemical Resistance", "Low", "Moderate", "Excellent"],
                  ["Gloss Level", "Good", "Good", "Mirror-like"],
                  [
                    "Maintenance",
                    "Frequent reapply",
                    "Regular reapply",
                    "Yearly check-in",
                  ],
                ].map(([feature, wax, sealant, ceramic]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="py-3 pr-4 pl-6 font-medium text-gray-900">
                      {feature}
                    </td>
                    <td className="py-3 px-4">{wax}</td>
                    <td className="py-3 px-4">{sealant}</td>
                    <td className="py-3 px-4 pr-6 font-semibold text-[#2970e1]">
                      {ceramic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Our Ceramic Coating{" "}
            <span className="text-[#2970e1]">Process</span>
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Meticulous preparation ensures lasting, flawless results
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Decontamination",
                desc: "Full hand wash, clay bar, and chemical decontamination to strip every contaminant from the paint surface.",
              },
              {
                step: "2",
                title: "Paint Correction",
                desc: "Machine polish removes swirls, scratches, and imperfections so the coating bonds to a flawless surface.",
              },
              {
                step: "3",
                title: "Coating Application",
                desc: "Professional-grade ceramic coating is carefully applied panel by panel, building up layers of protection.",
              },
              {
                step: "4",
                title: "Cure & Inspect",
                desc: "The coating cures under controlled conditions. A final inspection ensures full coverage and flawless results.",
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
                q: "What does 'lifetime ceramic coating with free recoat' mean?",
                a: "It means exactly what it sounds like. When you purchase our ceramic coating, you're covered for the life of your vehicle. Bring it in once a year for a quick inspection, and we'll recoat it at no charge if needed. No hidden fees, no fine print.",
              },
              {
                q: "How long does ceramic coating take to apply?",
                a: "The full process — including wash, decontamination, paint correction, and coating application — typically takes 1 to 2 days. The coating needs time to cure properly for maximum durability.",
              },
              {
                q: "Do I still need to wash my car after ceramic coating?",
                a: "Yes, but washing becomes much easier and less frequent. The hydrophobic surface repels dirt and water, so contaminants slide off with a simple rinse. We recommend a hand wash every 2 to 4 weeks.",
              },
              {
                q: "Is ceramic coating worth the investment?",
                a: "Absolutely. When you factor in the cost of regular waxing, sealant applications, and potential paint damage from unprotected surfaces, ceramic coating pays for itself. Plus, our lifetime guarantee means you never pay for paint protection again.",
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
            Protect Your Paint for Life
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Our lifetime ceramic coating with free recoat is the best value in
            paint protection. Veteran owned, trusted by drivers across Avon,
            Indiana and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Your Lifetime Coating
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
