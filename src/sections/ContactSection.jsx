"use client";

import Button from "@/components/Button";
import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState({ email: "", name: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // TODO: send `form` to your API / email service
    console.log(form);
    setForm({ email: "", name: "", message: "" });
    setSubmitted(true);
  };

  const fieldClass = (field) =>
    `w-full rounded-md border bg-white px-4 py-3.5 text-sm text-[#0d1b2a] placeholder-gray-400 focus:outline-none focus:ring-1 ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:border-[#2AA9C4] focus:ring-[#2AA9C4]"
    }`;

  return (
    <section className="bg-[#c3d1d1] py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left: heading */}
        <div>
          <h2 className="text-3xl font-bold leading-tight text-[#0d1b2a] sm:text-4xl">
            Let&apos;s talk about how digital initiatives can transform your business
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#0d1b2a]/70">
            We&apos;ll happily assist in exploring what will work best for you. Like,
            really best.
          </p>
        </div>

        {/* Right: form */}
        <div>
          <h3 className="text-3xl font-semibold text-[#0d1b2a]">
            Schedule Meeting
          </h3>

          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={fieldClass("email")}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={fieldClass("name")}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`resize-none ${fieldClass("message")}`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {submitted && (
              <p className="text-sm font-medium text-green-700">
                Thanks! We&apos;ll be in touch shortly.
              </p>
            )}

            <Button type="submit" size="lg">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
