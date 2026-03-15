import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Top Choice Detailing | Professional Auto Detailing in Avon, Indiana | Veteran Owned",
  description:
    "Top Choice Detailing offers premium auto detailing services in Avon, Indiana. Veteran owned and operated. Interior & exterior detailing, ceramic coating, window tinting, paint correction. Serving Avon, Plainfield, Brownsburg, Mooresville & Indianapolis.",
  keywords:
    "auto detailing Avon Indiana, car detailing near me, veteran owned detailing, professional car care, ceramic coating Avon, window tinting Indiana, paint correction, interior detailing, exterior detailing, motorcycle detailing, fleet detailing",
  openGraph: {
    title: "Top Choice Detailing | Avon, Indiana's Premier Auto Detailing",
    description:
      "Veteran owned professional auto detailing in Avon, IN. Premium products, expert craftsmanship, guaranteed satisfaction.",
    type: "website",
    locale: "en_US",
  },
};

const services = [
  {
    title: "Interior Detailing",
    description:
      "Deep cleaning, leather conditioning, stain removal, and odor elimination. Your cabin restored to showroom condition.",
    href: "/interior-detailing",
    image: "/images/interior-detailing.png",
  },
  {
    title: "Exterior Detailing",
    description:
      "Hand wash, clay bar treatment, polish, and premium wax protection. Head-turning shine every time.",
    href: "/exterior-detailing",
    image: "/images/exterior-detailing.png",
  },
  {
    title: "Ceramic Coating",
    description:
      "Industry-leading ceramic protection that lasts years. Unmatched gloss, hydrophobic finish, UV protection.",
    href: "/ceramic-coating",
    image: "/images/ceramic-coating.png",
  },
  {
    title: "Window Tinting",
    description:
      "Professional-grade window tint installation. UV protection, heat rejection, privacy, and sleek aesthetics.",
    href: "/window-tinting",
    image: "/images/window-tinting.png",
  },
  {
    title: "Motorcycle Detailing",
    description:
      "Specialized care for your bike. Chrome polishing, paint correction, and protective coatings built for riders.",
    href: "/motorcycle-detailing",
    image: "/images/motorcycle-detailing.png",
  },
  {
    title: "Fleet Detailing",
    description:
      "Keep your business fleet looking professional. Volume pricing, flexible scheduling, consistent results.",
    href: "/fleet-detailing",
    image: "/images/fleet-detailing.png",
  },
  {
    title: "Paint Correction",
    description:
      "Multi-stage paint correction to remove swirl marks, scratches, and oxidation. Factory-fresh finish restored.",
    href: "/paint-correction",
    image: "/images/paint-correction.png",
  },
];

const testimonials = [
  {
    name: "Marcus T.",
    location: "Avon, IN",
    vehicle: "2023 Ford F-150",
    rating: 5,
    text: "Chance and his team did an incredible job on my truck. It looked better than the day I bought it. The attention to detail is unmatched. I've tried other places in the area and nobody comes close.",
  },
  {
    name: "Sarah K.",
    location: "Plainfield, IN",
    vehicle: "2022 Toyota Highlander",
    rating: 5,
    text: "I was blown away by how my car looked after the interior detail. Pet hair, coffee stains, everything gone. It smells amazing too. Worth every penny and then some!",
  },
  {
    name: "James R.",
    location: "Brownsburg, IN",
    vehicle: "2024 Ford Mustang GT",
    rating: 5,
    text: "Got ceramic coating done on my new Mustang and it's been 8 months. Still beads water like crazy and the shine is unreal. Chance really knows his stuff. Veteran owned and it shows in the discipline.",
  },
  {
    name: "Lisa M.",
    location: "Mooresville, IN",
    vehicle: "2021 Chevy Tahoe",
    rating: 5,
    text: "As a busy mom, I never had time to deep clean my SUV. Top Choice made it look brand new in just a few hours. The kids' mess was no match for them! Already booked my next appointment.",
  },
  {
    name: "David P.",
    location: "Indianapolis, IN",
    vehicle: "Fleet of 12 Vehicles",
    rating: 5,
    text: "I manage a fleet of 12 vehicles for my company. Top Choice handles all of them with consistent quality and fair pricing. Professional, punctual, and always deliver. Can't recommend enough.",
  },
];

const serviceAreas = [
  { name: "Avon", slug: "avon" },
  { name: "Plainfield", slug: "plainfield" },
  { name: "Brownsburg", slug: "brownsburg" },
  { name: "Mooresville", slug: "mooresville" },
  { name: "Indianapolis", slug: "indianapolis" },
  { name: "Camby", slug: "camby" },
  { name: "Danville", slug: "danville" },
];

const trustBadges = [
  { label: "500+ Vehicles Detailed", icon: "car" },
  { label: "5.0 Star Rating", icon: "star" },
  { label: "Veteran Owned", icon: "flag" },
  { label: "Satisfaction Guaranteed", icon: "shield" },
];

const processSteps = [
  {
    step: "01",
    title: "Book Online",
    description:
      "Choose your service and schedule a time that works for you. Quick, easy, no hassle.",
  },
  {
    step: "02",
    title: "We Detail",
    description:
      "Our certified professionals get to work using premium products and proven techniques.",
  },
  {
    step: "03",
    title: "You Enjoy",
    description:
      "Pick up your vehicle looking and feeling better than new. Satisfaction guaranteed.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TrustBadgeIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "car":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      );
    case "star":
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    case "flag":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      );
    case "shield":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-main.png"
            alt="Premium auto detailing by Top Choice Detailing in Avon, Indiana"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082f6d]/90 via-[#082f6d]/70 to-[#082f6d]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-blue-200 font-semibold text-sm uppercase tracking-widest mb-6 animate-fade-in">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Veteran Owned &amp; Operated
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up">
              {"Avon's Premier"}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                Auto Detailing Studio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
              Where military precision meets automotive excellence. Premium
              detailing, ceramic coatings, and paint correction trusted by
              hundreds of vehicle owners across Central Indiana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-400">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2970e1] text-white font-bold rounded-xl hover:bg-[#1d5bc2] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5 text-lg"
              >
                Book Your Detail
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
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg"
              >
                <svg
                  className="mr-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now: (317) 663-7677
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-in-up animation-delay-600">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <div className="text-blue-300 flex-shrink-0">
                    <TrustBadgeIcon icon={badge.icon} />
                  </div>
                  <span className="text-white text-sm font-medium leading-tight">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ========== SOCIAL PROOF BAR ========== */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
              Trusted by Central Indiana&apos;s finest vehicles
            </p>
            <div className="flex items-center gap-2">
              <StarRating count={5} />
              <span className="text-gray-700 font-bold text-sm">5.0</span>
              <span className="text-gray-400 text-sm">|</span>
              <span className="text-gray-500 text-sm">Based on 50+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2970e1] font-semibold text-sm uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              Professional Auto Detailing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From a quick refresh to full paint correction and ceramic coating,
              we have the right service for every vehicle and every budget.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#082f6d] to-[#2970e1]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2970e1] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-bold text-[#2970e1] group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <svg
                      className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/hero-main.png"
                  alt="Premium auto detailing results at Top Choice Detailing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-[#082f6d] text-white rounded-xl p-5 shadow-xl hidden md:block">
                <p className="text-3xl font-extrabold">500+</p>
                <p className="text-blue-200 text-sm font-medium">Vehicles Detailed</p>
              </div>
            </div>

            {/* Right: Value Props */}
            <div>
              <p className="text-[#2970e1] font-semibold text-sm uppercase tracking-widest mb-3">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                The Top Choice Difference
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We are not just another car wash. We are professional detailers
                who bring military discipline, premium products, and genuine
                passion to every single vehicle.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Veteran Owned & Operated",
                    description:
                      "Military discipline and work ethic in every detail. We bring the same commitment to excellence that we learned in service.",
                    icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9",
                  },
                  {
                    title: "Premium Products Only",
                    description:
                      "We use only professional-grade products and coatings. No shortcuts, no cheap substitutes. Your vehicle gets the best.",
                    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                  },
                  {
                    title: "Certified Professionals",
                    description:
                      "Years of experience and continuous training. We stay ahead of the latest techniques and technologies in auto care.",
                    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                  },
                  {
                    title: "100% Satisfaction Guarantee",
                    description:
                      "Not happy? We will make it right. Period. Our reputation is built on exceeding expectations every single time.",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#082f6d] to-[#2970e1] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2970e1] font-semibold text-sm uppercase tracking-widest mb-3">
              Customer Reviews
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              What Our Customers Are Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Do not just take our word for it. Hear from real customers across
              Central Indiana who trust Top Choice Detailing with their vehicles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <StarRating count={testimonial.rating} />
                <p className="text-gray-700 mt-4 mb-6 leading-relaxed flex-1 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#082f6d] to-[#2970e1] flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.vehicle} &middot; {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2970e1] font-semibold text-sm uppercase tracking-widest mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Getting your vehicle detailed has never been easier.
              Three simple steps to a showroom finish.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#2970e1]/20 via-[#2970e1] to-[#2970e1]/20" />
            {processSteps.map((step) => (
              <div key={step.step} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white font-extrabold text-xl mb-6 shadow-lg shadow-blue-500/25 relative z-10">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICE AREAS ========== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2970e1] font-semibold text-sm uppercase tracking-widest mb-3">
              Locations We Serve
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              Proudly Serving Central Indiana
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Based in Avon, Indiana, we provide professional auto detailing
              services to communities across the west side of Indianapolis and
              beyond.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-gray-700 rounded-xl font-medium shadow-sm border border-gray-200 hover:border-[#2970e1] hover:text-[#2970e1] hover:shadow-md transition-all duration-300 group"
              >
                <svg
                  className="w-4 h-4 text-[#2970e1] group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {area.name}, IN
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Not in our listed areas? Contact us &mdash; we may still be able to serve
            you!
          </p>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-main.png"
            alt="Book your detail with Top Choice Detailing"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#082f6d]/95 via-[#082f6d]/85 to-[#2970e1]/80" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-yellow-300 font-semibold text-sm uppercase tracking-wider mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Limited Availability &mdash; Book This Week
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Give Your Vehicle the
            <br className="hidden sm:block" />
            Treatment It Deserves?
          </h2>
          <p className="text-lg text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers across Central Indiana.
            Professional results, premium products, veteran-owned integrity.
          </p>
          <p className="text-sm text-blue-200/70 mb-10">
            Appointments fill up fast &mdash; especially on weekends. Secure your
            spot today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#2970e1] text-white font-bold rounded-xl hover:bg-[#1d5bc2] transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Schedule Your Detail
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
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (317) 663-7677
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
            {["Free Estimates", "Veteran Owned", "Satisfaction Guaranteed"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-400"
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
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
