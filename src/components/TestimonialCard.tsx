interface TestimonialCardProps {
  quote: string;
  customerName: string;
  vehicleType?: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  customerName,
  vehicleType,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 mb-4">
        <svg
          className="w-8 h-8 text-primary/15 mb-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>
        <p className="text-gray-700 leading-relaxed text-sm">
          {quote}
        </p>
      </blockquote>

      {/* Customer Info */}
      <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
        {/* Avatar Placeholder */}
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">
            {customerName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-primary-dark">
            {customerName}
          </p>
          {vehicleType && (
            <p className="text-xs text-muted">{vehicleType}</p>
          )}
        </div>
      </div>
    </article>
  );
}
