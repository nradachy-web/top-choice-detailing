import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "About Top Choice Detailing | Veteran Owned Auto Detailing in Avon, Indiana",
  description:
    "Learn about Top Choice Detailing, a veteran owned auto detailing business in Avon, Indiana. Founded by Chance, a veteran with a lifelong passion for automotive care. Professional car detailing with military precision.",
  keywords:
    "veteran owned detailing, about Top Choice Detailing, Chance auto detailing, Avon Indiana detailing, professional car care, veteran owned business Indiana",
  openGraph: {
    title: "About Top Choice Detailing | Veteran Owned, Avon Indiana",
    description:
      "Meet Chance, the veteran behind Top Choice Detailing. Lifelong passion for cars, military discipline, and a commitment to excellence in every detail.",
    type: "website",
    locale: "en_US",
  },
};

const values = [
  {
    title: "Integrity",
    description:
      "We do what we say and say what we do. No hidden fees, no bait-and-switch. Honest pricing, honest work, every single time.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Precision",
    description:
      "Every surface, every corner, every crevice. We approach each vehicle with surgical attention to detail. Nothing gets overlooked.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Customer First",
    description:
      "Your satisfaction is not just a goal - it is our standard. We listen, we communicate, and we deliver beyond expectations.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Veteran Values",
    description:
      "Discipline, accountability, and an unwavering commitment to the mission. These are not just words - they are how we operate every day.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Built on Service.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Driven by Passion.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Top Choice Detailing is more than a business. It is the
              culmination of a lifetime love for automobiles, forged through
              military service, and dedicated to the communities of Central
              Indiana.
            </p>
          </div>
        </div>
      </section>

      {/* Chance's Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Meet Chance - Veteran, Car Enthusiast, Perfectionist
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="leading-relaxed">
                For as long as he can remember, Chance has had a deep passion for
                automobiles. Growing up, weekends were spent in the garage,
                washing, waxing, and obsessing over every inch of paint. What
                started as a hobby quickly became a calling - the satisfaction of
                transforming a neglected vehicle into something that looks better
                than the day it rolled off the lot.
              </p>
              <p className="leading-relaxed">
                That same drive for excellence led Chance to serve in the United
                States military, where the values of discipline, precision, and
                unwavering commitment were not just taught - they were lived
                every single day. The military taught him that good enough is
                never good enough, that attention to detail separates the
                ordinary from the exceptional, and that serving others is the
                highest calling.
              </p>
              <p className="leading-relaxed">
                After completing his service, Chance brought those values home to
                Avon, Indiana, and channeled them into what he knows best -
                making vehicles look incredible. Top Choice Detailing was born
                from the belief that every vehicle owner in Central Indiana
                deserves access to truly professional auto detailing, delivered
                with integrity, skill, and genuine care.
              </p>
              <p className="leading-relaxed font-medium text-gray-900">
                Today, Top Choice Detailing serves hundreds of customers across
                Avon, Plainfield, Brownsburg, Mooresville, Indianapolis, and
                beyond. Every vehicle that comes through our hands receives the
                same meticulous attention - because that is the only standard we
                know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <svg
              className="w-10 h-10 text-[#2970e1] mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              To deliver excellence in every detail - protecting your investment,
              exceeding your expectations, and earning your trust through
              results, not promises. We believe every vehicle and every customer
              deserves the top choice in professional care.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are not just words on a wall. They guide every decision we
              make and every vehicle we touch.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-200 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white rounded-full mb-5">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={value.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Veteran Owned Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Veteran Owned Matters
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Discipline That Shows in the Results",
                  description:
                    "Military service instills a level of discipline that translates directly into our work. Every process is refined, every step is intentional, and every detail matters. There are no shortcuts.",
                },
                {
                  title: "Attention to Detail Is in Our DNA",
                  description:
                    "In the military, missing a detail can have serious consequences. We bring that same hyper-awareness to auto detailing. Spots others miss, we catch. Corners others cut, we perfect.",
                },
                {
                  title: "A Commitment to Service - Not Just a Job",
                  description:
                    "Veterans understand that serving others is a privilege, not a chore. When you bring your vehicle to Top Choice, you are not just a customer - you are someone we are honored to serve.",
                },
                {
                  title: "Accountability You Can Count On",
                  description:
                    "We stand behind our work 100%. If something is not right, we make it right. No excuses, no runaround. That is the veteran way.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow-sm flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 text-[#082f6d] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Commitment to You
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            When you choose Top Choice Detailing, you are choosing a team that
            is personally invested in making your vehicle look its absolute best.
            We are not here to do the minimum - we are here to exceed what you
            thought was possible.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            {[
              {
                stat: "500+",
                label: "Vehicles Detailed",
              },
              {
                stat: "100%",
                label: "Satisfaction Rate",
              },
              {
                stat: "5.0",
                label: "Average Rating",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-[#2970e1]">
                  {item.stat}
                </p>
                <p className="text-gray-600 font-medium mt-1">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            Every number represents a real person who trusted us with their
            vehicle. We do not take that lightly.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.3),transparent_70%)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Top Choice Difference?
          </h2>
          <p className="text-lg text-blue-100 mb-4 max-w-2xl mx-auto">
            Whether it is your daily driver, weekend car, motorcycle, or
            business fleet - we are ready to deliver results that speak for
            themselves.
          </p>
          <p className="text-sm text-blue-200 mb-8">
            Book today and see why Avon and Central Indiana trust Top Choice
            Detailing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#082f6d] font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Get a Free Estimate
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
