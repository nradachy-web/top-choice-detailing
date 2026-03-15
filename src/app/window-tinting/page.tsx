import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/window-tinting.png"
          alt="Professional window tinting service in Avon, Indiana"
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
            Window{" "}
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Tinting
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-4">
            Premium carbon window film with a lifetime guarantee. Stay cool,
            protect your interior, and ride in style.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-semibold mb-8">
            Carbon Film &bull; Lifetime Guarantee
          </div>
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
              src="/images/window-tinting.png"
              alt="Carbon window tint installation"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Why{" "}
              <span className="text-[#2970e1]">Carbon Window Film</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Not all window tint is created equal. At Top Choice Detailing, we
              exclusively use carbon window film — a premium, non-metallic film
              that won&apos;t interfere with your electronics, GPS, or cell
              signal.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Carbon film delivers superior heat rejection, UV protection, and a
              sleek matte-black finish that doesn&apos;t fade or turn purple
              over time. And it&apos;s all backed by a lifetime guarantee.
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
              Premium carbon film installation with complete coverage
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Indiana Tint Laws */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Indiana Window{" "}
            <span className="text-[#2970e1]">Tint Laws</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            We ensure every tint job complies with Indiana state law so you
            never have to worry about a ticket. Here are the legal VLT (Visible
            Light Transmission) limits:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Sedans</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Windshield</span>
                  <span className="font-semibold text-gray-900">
                    Non-reflective tint on top 5 inches
                  </span>
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
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                SUVs &amp; Trucks
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Windshield</span>
                  <span className="font-semibold text-gray-900">
                    Non-reflective tint on top 5 inches
                  </span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Front Side Windows</span>
                  <span className="font-semibold text-gray-900">30% VLT</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Rear Side Windows</span>
                  <span className="font-semibold text-gray-900">
                    Any darkness
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Rear Window</span>
                  <span className="font-semibold text-gray-900">
                    Any darkness
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Our Tinting{" "}
            <span className="text-[#2970e1]">Process</span>
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Precision installation for a flawless, factory-look finish
          </p>
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
            Stay Cool. Look Sharp. Tint Today.
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Premium carbon window tinting with a lifetime guarantee. Veteran
            owned, trusted across Avon, Indiana and the surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Schedule Your Tint Today
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
