import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function CTASection({
  headline = "Ready to Make Your Vehicle Shine?",
  subheadline = "Join hundreds of satisfied customers across Central Indiana. Book your detail today and see why we're the top choice.",
  ctaText = "Book Today - Limited Availability",
  ctaLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-16 md:py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-light/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
          <span className="text-sm font-semibold text-accent-light">
            Limited Spots Available This Week
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-[family-name:var(--font-catamaran)] leading-tight mb-5">
          {headline}
        </h2>

        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
          {subheadline}
        </p>

        {/* CTA Button */}
        <div className="mb-10">
          <Link
            href={ctaLink}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-dark font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl animate-pulse-glow"
          >
            {ctaText}
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {/* Veteran Owned */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-accent-light"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-white">Veteran Owned</p>
            <p className="text-xs text-white/60">Discipline &amp; Precision</p>
          </div>

          {/* 5-Star Reviews */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm font-semibold text-white">5-Star Reviews</p>
            <p className="text-xs text-white/60">Trusted by Hundreds</p>
          </div>

          {/* Satisfaction Guaranteed */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-white">100% Satisfaction</p>
            <p className="text-xs text-white/60">Guaranteed Results</p>
          </div>
        </div>
      </div>
    </section>
  );
}
