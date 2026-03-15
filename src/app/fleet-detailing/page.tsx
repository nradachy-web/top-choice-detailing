import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fleet Detailing for Businesses",
  description:
    "Professional fleet detailing in Avon, Indiana. Top Choice Detailing offers custom fleet plans, commercial vehicle detailing, volume pricing, and regular scheduling to keep your business vehicles looking professional. Veteran owned.",
  keywords: [
    "fleet detailing",
    "commercial vehicle detailing",
    "business fleet cleaning",
    "fleet maintenance",
    "fleet wash program",
    "company vehicle detailing",
    "Avon Indiana fleet detailing",
    "volume detailing pricing",
  ],
  openGraph: {
    title: "Fleet Detailing | Top Choice Detailing",
    description:
      "Custom fleet detailing plans for businesses in Avon, IN. Volume pricing, regular scheduling. Veteran owned.",
    type: "website",
  },
};

export default function FleetDetailingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/fleet-detailing.png"
          alt="Professional fleet detailing for businesses in Avon, Indiana"
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
            Fleet{" "}
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Detailing
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Keep your company vehicles looking professional with custom fleet
            detailing plans. Volume pricing, flexible scheduling, and consistent
            quality your business can count on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg shadow-white/20"
            >
              Request a Fleet Quote
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
              src="/images/fleet-detailing.png"
              alt="Commercial fleet vehicles being detailed"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Your Fleet Is{" "}
              <span className="text-[#2970e1]">Your Brand</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Your company vehicles are rolling billboards. Dirty, neglected
              fleet vehicles send the wrong message to customers and clients. At
              Top Choice Detailing in Avon, Indiana, we partner with businesses
              to keep their fleets spotless through customized detailing
              programs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you operate 3 vehicles or 30, we build a plan around your
              schedule, your budget, and your standards.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              What We{" "}
              <span className="text-[#2970e1]">Offer</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Comprehensive fleet care designed for your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Fleet Plans",
                desc: "We design a detailing program tailored to your fleet size, vehicle types, and the level of service each vehicle needs.",
              },
              {
                title: "Volume Pricing",
                desc: "The more vehicles you bring, the more you save. Our fleet pricing is designed to give businesses real value at scale.",
              },
              {
                title: "Flexible Scheduling",
                desc: "We work around your business hours. Weekly, bi-weekly, or monthly scheduling options to minimize downtime.",
              },
              {
                title: "Interior & Exterior Service",
                desc: "Full interior and exterior detailing available for every vehicle in your fleet, from sedans to trucks to vans.",
              },
              {
                title: "On-Site Capability",
                desc: "For larger fleets, we can bring our equipment to your location — no need to transport vehicles to our shop.",
              },
              {
                title: "Consistent Quality",
                desc: "Every vehicle in your fleet receives the same meticulous attention to detail. Our checklists ensure nothing is missed.",
              },
              {
                title: "Dedicated Account Manager",
                desc: "One point of contact for scheduling, changes, and communication. We make fleet detailing hassle-free for you.",
              },
              {
                title: "Vehicle Condition Reports",
                desc: "Receive condition reports after each detail so you can track the state of your fleet and catch issues early.",
              },
              {
                title: "Ceramic & Tint Add-Ons",
                desc: "Protect your fleet investment with ceramic coating or window tinting at discounted fleet rates.",
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

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Benefits for{" "}
            <span className="text-[#2970e1]">Your Business</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Professional Image",
                desc: "Clean vehicles project professionalism, build trust with clients, and reinforce your brand identity everywhere your fleet goes.",
              },
              {
                title: "Employee Satisfaction",
                desc: "Employees take more pride in their work when their company vehicle is clean and well-maintained. Morale matters.",
              },
              {
                title: "Preserve Vehicle Value",
                desc: "Regular detailing prevents paint damage, interior wear, and corrosion — extending the useful life and resale value of your fleet.",
              },
              {
                title: "Reduce Maintenance Costs",
                desc: "Detailing catches small issues before they become expensive problems. Clean vehicles run cooler and experience less corrosion.",
              },
              {
                title: "Impress Clients",
                desc: "When you pick up a client or visit their office, the condition of your vehicle speaks volumes about your attention to detail.",
              },
              {
                title: "Competitive Advantage",
                desc: "In a competitive market, a clean, professional fleet sets you apart from competitors who neglect their vehicles.",
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

      {/* Industries */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Industries We{" "}
            <span className="text-[#2970e1]">Serve</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "Real Estate",
              "Construction",
              "HVAC & Plumbing",
              "Delivery Services",
              "Landscaping",
              "Healthcare",
              "Sales Teams",
              "Rental Companies",
              "Government",
              "Nonprofits",
              "Transportation",
              "Any Business",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-700 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {industry}
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
                q: "How many vehicles do I need for fleet pricing?",
                a: "We offer fleet pricing starting at just 3 vehicles. The more vehicles in your program, the greater the per-vehicle savings. Contact us for a custom quote based on your fleet size.",
              },
              {
                q: "Can you come to our business location?",
                a: "Yes. For larger fleets, we offer on-site detailing at your business location. We bring all the equipment and supplies needed to detail your vehicles on your schedule, minimizing disruption to your operations.",
              },
              {
                q: "How do you handle scheduling for a fleet?",
                a: "We assign a dedicated account manager to your fleet. Together, we create a rotating schedule that keeps every vehicle clean without taking too many vehicles offline at once.",
              },
              {
                q: "What types of vehicles can you detail?",
                a: "We detail sedans, trucks, vans, SUVs, box trucks, and specialty vehicles. Whether you have a small sales fleet or a large service fleet, we have the expertise and equipment to handle it.",
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
            Put Your Best Fleet Forward
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Veteran owned and business-focused. Top Choice Detailing helps
            companies across Avon, Indiana keep their fleets clean, professional,
            and protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Your Fleet Quote
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
