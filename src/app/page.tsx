import type { Metadata } from "next";
import Link from "next/link";

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
    href: "/services/interior-detailing",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4",
  },
  {
    title: "Exterior Detailing",
    description:
      "Hand wash, clay bar treatment, polish, and premium wax protection. Head-turning shine every time.",
    href: "/services/exterior-detailing",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    title: "Ceramic Coating",
    description:
      "Industry-leading ceramic protection that lasts years. Unmatched gloss, hydrophobic finish, UV protection.",
    href: "/services/ceramic-coating",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Window Tinting",
    description:
      "Professional-grade window tint installation. UV protection, heat rejection, privacy, and sleek aesthetics.",
    href: "/services/window-tinting",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z",
  },
  {
    title: "Motorcycle Detailing",
    description:
      "Specialized care for your bike. Chrome polishing, paint correction, and protective coatings built for riders.",
    href: "/services/motorcycle-detailing",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Fleet Detailing",
    description:
      "Keep your business fleet looking professional. Volume pricing, flexible scheduling, consistent results.",
    href: "/services/fleet-detailing",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Paint Correction",
    description:
      "Multi-stage paint correction to remove swirl marks, scratches, and oxidation. Factory-fresh finish restored.",
    href: "/services/paint-correction",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
];

const testimonials = [
  {
    name: "Marcus T.",
    location: "Avon, IN",
    rating: 5,
    text: "Chance and his team did an incredible job on my truck. It looked better than the day I bought it. The attention to detail is unmatched. I've tried other places in the area and nobody comes close.",
  },
  {
    name: "Sarah K.",
    location: "Plainfield, IN",
    rating: 5,
    text: "I was blown away by how my car looked after the interior detail. Pet hair, coffee stains, everything gone. It smells amazing too. Worth every penny and then some!",
  },
  {
    name: "James R.",
    location: "Brownsburg, IN",
    rating: 5,
    text: "Got ceramic coating done on my new Mustang and it's been 8 months. Still beads water like crazy and the shine is unreal. Chance really knows his stuff. Veteran owned and it shows in the discipline.",
  },
  {
    name: "Lisa M.",
    location: "Mooresville, IN",
    rating: 5,
    text: "As a busy mom, I never had time to deep clean my SUV. Top Choice made it look brand new in just a few hours. The kids' mess was no match for them! Already booked my next appointment.",
  },
  {
    name: "David P.",
    location: "Indianapolis, IN",
    rating: 5,
    text: "I manage a fleet of 12 vehicles for my company. Top Choice handles all of them with consistent quality and fair pricing. Professional, punctual, and always deliver. Can't recommend enough.",
  },
];

const serviceAreas = [
  "Avon",
  "Plainfield",
  "Brownsburg",
  "Mooresville",
  "Indianapolis",
  "Camby",
  "Danville",
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-4">
              Veteran Owned &amp; Operated in Avon, Indiana
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your Vehicle Deserves the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Top Choice
              </span>{" "}
              in Professional Detailing
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Premium auto detailing that goes beyond clean. We deliver
              showroom-quality results with military precision, using only the
              finest products and proven techniques. Trusted by hundreds of
              vehicle owners across Central Indiana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#082f6d] font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book Your Detail Today
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
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>5.0 Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Avon Trusts Top Choice Detailing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are not just another car wash. We are professional detailers
              who treat every vehicle like it is our own.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Veteran Owned",
                description:
                  "Military discipline and work ethic in every detail. We bring the same commitment to excellence that we learned in service.",
                icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
              },
              {
                title: "Premium Products",
                description:
                  "We use only professional-grade products and coatings. No shortcuts, no cheap substitutes. Your vehicle gets the best.",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
              },
              {
                title: "Expert Craftsmanship",
                description:
                  "Years of experience and continuous training. We stay ahead of the latest techniques and technologies in auto care.",
                icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
              },
              {
                title: "Satisfaction Guaranteed",
                description:
                  "Not happy? We will make it right. Period. Our reputation is built on exceeding expectations every single time.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-[#082f6d] rounded-full mb-5">
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
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Auto Detailing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a quick refresh to full paint correction and ceramic coating,
              we have the right service for every vehicle and every budget.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[#2970e1] hover:shadow-lg transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200">
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
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2970e1] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-[#2970e1]">
                  Learn More
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Do not just take our word for it. Hear from real customers across
              Central Indiana who trust Top Choice Detailing with their vehicles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
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
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proudly Serving Central Indiana
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based in Avon, Indiana, we provide professional car detailing
              services to communities across the west side of Indianapolis and
              beyond.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-[#082f6d] to-[#2970e1] text-white rounded-full font-medium shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {area}, IN
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Not in our listed areas? Contact us - we may still be able to serve
            you!
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
            Ready to Give Your Vehicle the Treatment It Deserves?
          </h2>
          <p className="text-lg text-blue-100 mb-4 max-w-2xl mx-auto">
            Join hundreds of satisfied customers across Central Indiana.
            Professional results, premium products, veteran-owned integrity.
          </p>
          <p className="text-sm text-blue-200 mb-8">
            Appointments fill up fast - especially on weekends. Book now to
            secure your spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#082f6d] font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
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
              href="tel:+13171234567"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-lg"
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
              Call Us Now
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
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
              Free Estimates
            </div>
            <div className="flex items-center gap-2">
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
              Veteran Owned
            </div>
            <div className="flex items-center gap-2">
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
              Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
