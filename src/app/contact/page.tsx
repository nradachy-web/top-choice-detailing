import type { Metadata } from "next";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description:
    "Contact Top Choice Detailing in Avon, Indiana for a free auto detailing quote. We offer interior detailing, exterior detailing, ceramic coating, window tinting, and more. Serving Avon, Plainfield, Brownsburg, Mooresville, and Indianapolis.",
  openGraph: {
    title: "Contact Top Choice Detailing | Free Quote in Avon, IN",
    description:
      "Get a free auto detailing quote from Top Choice Detailing. Veteran owned and operated in Avon, Indiana.",
  },
};

const SERVICE_AREAS = [
  "Avon",
  "Plainfield",
  "Brownsburg",
  "Mooresville",
  "Indianapolis",
  "Camby",
  "Danville",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#082f6d] to-[#2970e1] py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[var(--font-catamaran)] text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">
            Ready to give your vehicle the treatment it deserves? Reach out for a free,
            no-obligation quote today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Free Quote</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactFormClient />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Business Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      <svg className="h-5 w-5 text-[#2970e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Email</p>
                      <a
                        href="mailto:chance@top-choicedetailing.com"
                        className="text-sm text-[#2970e1] hover:underline break-all"
                      >
                        chance@top-choicedetailing.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      <svg className="h-5 w-5 text-[#2970e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Phone</p>
                      <a href="tel:+13175550123" className="text-sm text-[#2970e1] hover:underline">
                        (317) 555-0123
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      <svg className="h-5 w-5 text-[#2970e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Location</p>
                      <p className="text-sm text-gray-600">Avon, Indiana</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      <svg className="h-5 w-5 text-[#2970e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Hours</p>
                      <p className="text-sm text-gray-600">Monday &ndash; Saturday</p>
                      <p className="text-sm text-gray-600">8:00 AM &ndash; 6:00 PM</p>
                      <p className="text-sm text-gray-400 mt-0.5">Closed Sunday</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  {/* Replace src with your actual Google Maps embed URL */}
                  <iframe
                    title="Top Choice Detailing Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48882.82965498459!2d-86.43!3d39.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca5a3e2bcb3e7%3A0x1fd9d3e3e3e3e3e3!2sAvon%2C+IN!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[250px]"
                  />
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We proudly serve the following communities in central Indiana:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2970e1] shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
