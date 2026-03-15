import type { Metadata } from "next";
import Image from "next/image";
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

const stats = [
  { value: "500+", label: "Vehicles Detailed" },
  { value: "5.0", label: "Star Rating" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "3+", label: "Years of Excellence" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src="/images/about-hero.png"
          alt="Top Choice Detailing workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082f6d]/90 via-[#082f6d]/75 to-[#082f6d]/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-4">
              Veteran Owned &amp; Operated
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
              Built on Service.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Driven by Passion.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Top Choice Detailing is more than a business. It is the
              culmination of a lifetime love for automobiles, forged through
              military service, and dedicated to the communities of Central
              Indiana.
            </p>
            <div className="mt-8">
              <a
                href="tel:+13176637677"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (317) 663-7677
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Logo + Owner Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="flex flex-col items-center gap-8">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#2970e1]/20 to-[#082f6d]/10 rounded-2xl blur-xl" />
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 flex items-center justify-center">
                  <Image
                    src="/logo.jpg"
                    alt="Top Choice Detailing Logo"
                    width={400}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 rounded-full px-6 py-3">
                <svg className="w-5 h-5 text-[#2970e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-sm font-semibold text-[#082f6d]">Veteran Owned &amp; Operated in Avon, Indiana</span>
              </div>
            </div>

            {/* Story Side */}
            <div>
              <p className="text-[#2970e1] font-semibold text-sm uppercase tracking-widest mb-3">
                The Founder
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Meet Chance - Veteran, Car Enthusiast, Perfectionist
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  For as long as he can remember, Chance has had a deep passion for
                  automobiles. Growing up, weekends were spent in the garage,
                  washing, waxing, and obsessing over every inch of paint. What
                  started as a hobby quickly became a calling - the satisfaction of
                  transforming a neglected vehicle into something that looks better
                  than the day it rolled off the lot.
                </p>
                <p className="text-lg leading-relaxed">
                  That same drive for excellence led Chance to serve in the United
                  States military, where the values of discipline, precision, and
                  unwavering commitment were not just taught - they were lived
                  every single day.
                </p>
                <p className="text-lg leading-relaxed">
                  After completing his service, Chance brought those values home to
                  Avon, Indiana, and channeled them into what he knows best -
                  making vehicles look incredible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military to Detailing Excellence */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[#2970e1] font-semibold text-sm uppercase tracking-widest mb-3">
              From Service to Service
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Military Discipline Meets Detailing Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The military taught Chance that good enough is never good enough, that
              attention to detail separates the ordinary from the exceptional, and
              that serving others is the highest calling. Top Choice Detailing was
              born from the belief that every vehicle owner in Central Indiana
              deserves access to truly professional auto detailing, delivered with
              integrity, skill, and genuine care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                military: "Discipline & Standards",
                detailing: "Refined processes with no shortcuts - every step is intentional and every detail matters.",
              },
              {
                military: "Attention to Detail",
                detailing: "Spots others miss, we catch. Corners others cut, we perfect. Hyper-awareness in every job.",
              },
              {
                military: "Commitment to Service",
                detailing: "You are not just a customer - you are someone we are honored to serve, every single time.",
              },
              {
                military: "Accountability",
                detailing: "We stand behind our work 100%. If something is not right, we make it right. No excuses.",
              },
            ].map((item) => (
              <div
                key={item.military}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#082f6d] to-[#2970e1] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.military}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-[52px]">{item.detailing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2970e1] font-semibold text-sm uppercase tracking-widest mb-3">
            Why We Do This
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <div className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] rounded-2xl p-10 md:p-14 shadow-xl">
            <svg
              className="w-12 h-12 text-blue-200/60 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-white leading-relaxed italic">
              To deliver excellence in every detail - protecting your investment,
              exceeding your expectations, and earning your trust through
              results, not promises. We believe every vehicle and every customer
              deserves the top choice in professional care.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#2970e1] font-semibold text-sm uppercase tracking-widest mb-3">
              What We Stand For
            </p>
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
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white rounded-2xl mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8"
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] rounded-3xl p-10 md:p-16 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Numbers Speak for Themselves
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                Every number represents a real person who trusted us with their
                vehicle. We do not take that lightly.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-blue-200 font-medium text-sm uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-24 md:py-32">
        <Image
          src="/images/hero-cta.png"
          alt="Professional auto detailing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082f6d]/90 via-[#082f6d]/80 to-[#082f6d]/70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Experience the Top Choice Difference?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
            Whether it is your daily driver, weekend car, motorcycle, or
            business fleet - we are ready to deliver results that speak for
            themselves.
          </p>
          <p className="text-blue-200 mb-10">
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
            <a
              href="tel:+13176637677"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-lg gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (317) 663-7677
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
