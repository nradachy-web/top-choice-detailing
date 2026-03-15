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
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="inline-block rounded-lg bg-[#2970e1] px-6 py-3 text-sm font-semibold text-white hover:bg-[#082f6d] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
      <input type="hidden" name="subject" value="New Contact Form Submission - Top Choice Detailing" />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Doe"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:outline-none transition-colors"
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(317) 555-0123"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
          Service Interested In <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:outline-none transition-colors bg-white"
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
        <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-700 mb-1">
          Vehicle Year / Make / Model
        </label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          placeholder="2024 Toyota Camry"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:outline-none transition-colors"
        />
      </div>

      {/* Preferred Date */}
      <div>
        <label htmlFor="preferred_date" className="block text-sm font-semibold text-gray-700 mb-1">
          Preferred Date
        </label>
        <input
          type="date"
          id="preferred_date"
          name="preferred_date"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:outline-none transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your vehicle and what you're looking for..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2970e1] focus:ring-2 focus:ring-[#2970e1]/20 focus:outline-none transition-colors resize-y"
        />
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-[#2970e1] px-6 py-3.5 text-base font-bold text-white hover:bg-[#082f6d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
