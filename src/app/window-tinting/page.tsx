import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Tinting with Lifetime Guarantee",
  description:
    "Professional window tinting in Avon, Indiana with carbon film and lifetime guarantee. Top Choice Detailing offers UV protection, heat rejection, glare reduction, and privacy. Legal tint levels for Indiana. Veteran owned.",
  keywords: [
    "window tinting Avon Indiana",
    "car window tint",
    "carbon window film",
    "UV protection window tint",
    "heat rejection tint",
    "Indiana tint laws",
    "privacy window tint",
    "Avon Indiana window tinting",
  ],
  openGraph: {
    title: "Window Tinting | Top Choice Detailing",
    description:
      "Carbon window tint with lifetime guarantee in Avon, IN. UV protection, heat rejection & privacy. Veteran owned.",
    type: "website",
  },
};

export default function WindowTintingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
            Veteran Owned &amp; Operated
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Window Tinting
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-4">
            Premium carbon window film with a lifetime guarantee. Stay cool, protect your interior, and ride in style.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-semibold mb-8">
            Carbon Film &bull; Lifetime Guarantee
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
              Why Carbon Window Film?
            </h2>
            <p className="text-lg text-gray-600">
              Not all window tint is created equal. At Top Choice Detailing, we exclusively use carbon window film — a premium, non-metallic film that won&apos;t interfere with your electronics, GPS, or cell signal. Carbon film delivers superior heat rejection, UV protection, and a sleek matte-black finish that doesn&apos;t fade or turn purple over time. And it&apos;s all backed by a lifetime guarantee.
            </p>
          </div>

          {/* What's Included */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What&apos;s Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Carbon Window Film",
                desc: "Premium carbon-infused film that won't fade, bubble, or turn purple. Delivers a clean, factory-look finish.",
              },
              {
                title: "UV Protection",
                desc: "Blocks up to 99% of harmful UV rays, protecting your skin and preventing dashboard, seat, and trim fading.",
              },
              {
                title: "Heat Rejection",
                desc: "Significantly reduces cabin heat, keeping your vehicle cooler in the Indiana summer and easing the load on your AC.",
              },
              {
                title: "Glare Reduction",
                desc: "Cuts blinding sun glare for safer, more comfortable driving, especially during sunrise and sunset commutes.",
              },
              {
                title: "Privacy & Security",
                desc: "Tinted windows make it harder for outsiders to see inside your vehicle, protecting your valuables and personal privacy.",
              },
              {
                title: "Interior Protection",
                desc: "By blocking UV and heat, tint extends the life of your leather, upholstery, and dashboard materials.",
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

      {/* Indiana Tint Laws */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Indiana Window Tint Laws
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            We ensure every tint job complies with Indiana state law so you never have to worry about a ticket. Here are the legal VLT (Visible Light Transmission) limits:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Sedans</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Windshield</span>
                  <span className="font-semibold text-gray-900">Non-reflective tint on top 5 inches</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Front Side Windows</span>
                  <span className="font-semibold text-gray-900">30% VLT</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Rear Side Windows</span>
                  <span className="font-semibold text-gray-900">30% VLT</span>
                </li>
                <li className="flex justify-between">
                  <span>Rear Window</span>
                  <span className="font-semibold text-gray-900">30% VLT</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-4">SUVs &amp; Trucks</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Windshield</span>
                  <span className="font-semibold text-gray-900">Non-reflective tint on top 5 inches</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Front Side Windows</span>
                  <span className="font-semibold text-gray-900">30% VLT</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Rear Side Windows</span>
                  <span className="font-semibold text-gray-900">Any darkness</span>
                </li>
                <li className="flex justify-between">
                  <span>Rear Window</span>
                  <span className="font-semibold text-gray-900">Any darkness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Tinting Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                desc: "We discuss your desired shade, explain Indiana tint laws, and recommend the best VLT for your needs.",
              },
              {
                step: "2",
                title: "Glass Prep",
                desc: "Windows are thoroughly cleaned and prepped to ensure a perfect bond with no dust or debris underneath.",
              },
              {
                step: "3",
                title: "Precision Install",
                desc: "Film is computer-cut to your vehicle's exact specifications and carefully applied for a bubble-free, seamless fit.",
              },
              {
                step: "4",
                title: "Quality Check",
                desc: "Every window is inspected for alignment, bubbles, and edges to ensure a flawless, factory-look installation.",
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
                q: "How long does window tinting take?",
                a: "Most vehicles can be tinted in 2 to 4 hours. We recommend leaving your vehicle with us so we can take our time and deliver a flawless installation without rushing.",
              },
              {
                q: "Will window tint interfere with my electronics?",
                a: "No. Carbon window film is non-metallic, so it will not interfere with your cell signal, GPS, Bluetooth, or satellite radio. This is one of the key advantages of carbon film over cheaper metallic tint.",
              },
              {
                q: "How long before I can roll my windows down?",
                a: "We recommend waiting 3 to 5 days after installation before rolling your windows down. This allows the film to fully cure and bond to the glass.",
              },
              {
                q: "What does the lifetime guarantee cover?",
                a: "Our lifetime guarantee covers bubbling, peeling, cracking, fading, and discoloration for as long as you own the vehicle. If there's ever an issue, we'll replace it at no charge.",
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
            Stay Cool. Look Sharp. Tint Today.
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Premium carbon window tinting with a lifetime guarantee. Veteran owned, trusted across Avon, Indiana and the surrounding communities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Your Tint Today
          </Link>
        </div>
      </section>
    </>
  );
}
