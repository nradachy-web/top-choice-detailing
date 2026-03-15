import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="relative bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
            Veteran Owned &amp; Operated
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Ceramic Coating
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-4">
            The ultimate paint protection. Our lifetime ceramic coating comes with a free recoat promise — the last coating your vehicle will ever need.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-semibold mb-8">
            Lifetime Guarantee &bull; Free Recoat
          </div>
          <br />
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
              What Is Ceramic Coating?
            </h2>
            <p className="text-lg text-gray-600">
              Ceramic coating is a liquid polymer that chemically bonds to your vehicle&apos;s factory paint, creating a permanent or semi-permanent layer of protection. Unlike wax or sealant that wears off in weeks, our professional-grade ceramic coating creates a rock-hard, hydrophobic shell that repels water, dirt, and contaminants for years. At Top Choice Detailing in Avon, Indiana, we back our ceramic coating with a lifetime guarantee and free recoat — because we stand behind our work.
            </p>
          </div>

          {/* Coating Benefits */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ceramic Coating Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Ceramic Coating vs. Wax vs. Sealant
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 pr-4 text-gray-900 font-bold">Feature</th>
                  <th className="py-4 px-4 text-gray-900 font-bold">Wax</th>
                  <th className="py-4 px-4 text-gray-900 font-bold">Sealant</th>
                  <th className="py-4 pl-4 text-[#2970e1] font-bold">Ceramic Coating</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {[
                  ["Durability", "1–3 months", "4–6 months", "Lifetime"],
                  ["Hydrophobic", "Moderate", "Good", "Excellent"],
                  ["UV Protection", "Minimal", "Moderate", "Superior"],
                  ["Scratch Resistance", "None", "Minimal", "High"],
                  ["Chemical Resistance", "Low", "Moderate", "Excellent"],
                  ["Gloss Level", "Good", "Good", "Mirror-like"],
                  ["Maintenance", "Frequent reapply", "Regular reapply", "Yearly check-in"],
                ].map(([feature, wax, sealant, ceramic]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">{feature}</td>
                    <td className="py-3 px-4">{wax}</td>
                    <td className="py-3 px-4">{sealant}</td>
                    <td className="py-3 pl-4 font-semibold text-[#2970e1]">{ceramic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Ceramic Coating Process
          </h2>
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

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
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
            Protect Your Paint for Life
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Our lifetime ceramic coating with free recoat is the best value in paint protection. Veteran owned, trusted by drivers across Avon, Indiana and beyond.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Get Your Lifetime Coating
          </Link>
        </div>
      </section>
    </>
  );
}
