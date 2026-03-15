"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Interior Detailing",
  "Exterior Detailing",
  "Ceramic Coating",
  "Window Tinting",
  "Motorcycle Detailing",
  "Fleet Detailing",
  "Paint Correction",
];

export default function ContactFormClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-10 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 shadow-lg shadow-green-100">
          <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-3">Message Sent Successfully!</h3>
        <p className="text-green-700 mb-3 text-lg">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <p className="text-green-600 text-sm mb-8">
          Prefer to talk now? Call us at{" "}
          <a href="tel:+13865887840" className="font-semibold underline hover:text-green-800">
            (386) 588-7840
          </a>
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="inline-block rounded-lg bg-[#2970e1] px-8 py-3.5 text-base font-bold text-white hover:bg-[#082f6d] transition-colors shadow-lg"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
      <input type="hidden" name="subject" value="New Contact Form Submission - Top Choice Detailing" />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Doe"
          className="w-full rounded-lg border border-gray-300 px-4 py-3.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:shadow-md focus:outline-none transition-all"
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:shadow-md focus:outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(317) 555-0123"
            className="w-full rounded-lg border border-gray-300 px-4 py-3.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:shadow-md focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Service Interested In <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3.5 text-gray-900 shadow-sm focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:shadow-md focus:outline-none transition-all bg-white"
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Vehicle Info */}
      <div>
        <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Vehicle Year / Make / Model
        </label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          placeholder="2024 Toyota Camry"
          className="w-full rounded-lg border border-gray-300 px-4 py-3.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:shadow-md focus:outline-none transition-all"
        />
      </div>

      {/* Preferred Date */}
      <div>
        <label htmlFor="preferred_date" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Preferred Date
        </label>
        <input
          type="date"
          id="preferred_date"
          name="preferred_date"
          className="w-full rounded-lg border border-gray-300 px-4 py-3.5 text-gray-900 shadow-sm focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:shadow-md focus:outline-none transition-all"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your vehicle and what you're looking for..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:shadow-md focus:outline-none transition-all resize-y"
        />
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700 flex items-center gap-3">
          <svg className="h-5 w-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-[#2970e1] px-6 py-4 text-base font-bold text-white hover:bg-[#082f6d] transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transform hover:-translate-y-0.5 disabled:hover:translate-y-0"
      >
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      {/* Phone Fallback */}
      <p className="text-center text-sm text-gray-500 pt-2">
        Prefer to call?{" "}
        <a href="tel:+13865887840" className="text-[#2970e1] font-semibold hover:underline">
          (386) 588-7840
        </a>
      </p>
    </form>
  );
}
