import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="relative bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
            Veteran Owned &amp; Operated
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Fleet Detailing
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Keep your company vehicles looking professional with custom fleet detailing plans. Volume pricing, flexible scheduling, and consistent quality your business can count on.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Request a Fleet Quote
          </Link>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Fleet Is Your Brand
            </h2>
            <p className="text-lg text-gray-600">
              Your company vehicles are rolling billboards. Dirty, neglected fleet vehicles send the wrong message to customers and clients. At Top Choice Detailing in Avon, Indiana, we partner with businesses to keep their fleets spotless through customized detailing programs. Whether you operate 3 vehicles or 30, we build a plan around your schedule, your budget, and your standards.
            </p>
          </div>

          {/* What's Included */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What We Offer
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Benefits for Your Business
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
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Industries We Serve
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
                className="bg-gray-50 rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-700 border border-gray-100"
              >
                {industry}
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
            Put Your Best Fleet Forward
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Veteran owned and business-focused. Top Choice Detailing helps companies across Avon, Indiana keep their fleets clean, professional, and protected.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#082f6d] font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Get Your Fleet Quote
          </Link>
        </div>
      </section>
    </>
  );
}
