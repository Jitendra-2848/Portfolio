"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-10">
      <header className="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Contact Me</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Have a question or want to work together? Leave a message below or connect directly.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Get in Touch</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I am always open to discussing new projects, backend systems, creative ideas, or opportunities.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <span className="block font-medium text-zinc-500 text-xs uppercase">Email</span>
              <a
                href={`mailto:${portfolioData.email}`}
                className="hover:underline font-medium"
              >
                {portfolioData.email}
              </a>
            </div>

            <div>
              <span className="block font-medium text-zinc-500 text-xs uppercase">Location</span>
              <span>{portfolioData.location}</span>
            </div>

            <div>
              <span className="block font-medium text-zinc-500 text-xs uppercase">Socials</span>
              <div className="flex flex-col gap-1 pt-1">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub →
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn →
                </a>
                <a
                  href={portfolioData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter / X →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xl">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Thank you for reaching out!</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Your message has been received. I will get back to you as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-4 px-4 py-2 text-sm border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-1 focus:ring-zinc-400"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-1 focus:ring-zinc-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-1 focus:ring-zinc-400"
                  placeholder="Project inquiry / feedback"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-1 focus:ring-zinc-400 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity text-sm"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
