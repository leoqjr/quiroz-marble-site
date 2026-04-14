"use client";

import type { CSSProperties } from "react";
import React, { useState } from "react";
import { useRevealOnScroll } from "../useRevealOnScroll";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  timeline: string;
  message: string;
  honeypot: string;
};

type FormErrors = {
  name?: string;
  email?: string;
};

type StatusState =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

export default function ContactPage() {
  useRevealOnScroll();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectType: "",
    timeline: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<StatusState>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus(null);
  }

  function validate() {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate()) return;

    if (form.honeypot.trim()) {
      setStatus({
        type: "error",
        message: "Your submission could not be processed.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let data: unknown = null;

      try {
        data = await response.json();
      } catch {
        // non‑JSON response
      }

      const okJson =
        data &&
        typeof data === "object" &&
        "success" in data &&
        (data as { success: boolean }).success;

      if (!response.ok || !okJson) {
        const errorMsg =
          data &&
          typeof data === "object" &&
          "error" in data &&
          typeof (data as { error: string }).error === "string"
            ? (data as { error: string }).error
            : "Something went wrong. Please try again.";
        setStatus({ type: "error", message: errorMsg });
        return;
      }

      setStatus({
        type: "success",
        message:
          "Thank you. Your request was received and we will follow up within 1–2 business days.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        projectType: "",
        timeline: "",
        message: "",
        honeypot: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({
        type: "error",
        message:
          "Could not submit the form. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldBaseStyle: CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.75rem",
    borderRadius: "8px",
    border: "1px solid #27272f",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    fontSize: "0.94rem",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "3rem 1.5rem 3.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#f9fafb",
        backgroundColor: "#121218",
      }}
    >
      <section
        className="reveal"
        style={{
          maxWidth: "720px",
          marginBottom: "2.5rem",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            fontSize: "0.78rem",
            color: "#c9a46a",
            marginBottom: "0.7rem",
          }}
        >
          Request a project bid
        </p>
        <h1
          style={{
            fontSize: "2.1rem",
            margin: "0 0 0.6rem",
          }}
        >
          Share your next project.
        </h1>
        <p
          style={{
            margin: 0,
            color: "#9ca3af",
            fontSize: "0.95rem",
            lineHeight: 1.6,
          }}
        >
          Send a few details about the project and we&apos;ll follow up with a
          clear, trade‑friendly bid and timeline. Attach plans or links in the
          message box if you have them.
        </p>
      </section>

      {status && (
        <div
          className="reveal"
          style={{
            marginBottom: "1.4rem",
            padding: "0.9rem 1rem",
            borderRadius: "10px",
            fontSize: "0.95rem",
            backgroundColor:
              status.type === "success"
                ? "rgba(22, 163, 74, 0.12)"
                : "rgba(220, 38, 38, 0.12)",
            color: status.type === "success" ? "#bbf7d0" : "#fecaca",
            border:
              status.type === "success"
                ? "1px solid rgba(34,197,94,0.4)"
                : "1px solid rgba(248,113,113,0.4)",
          }}
        >
          {status.message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.3fr)",
          gap: "2.4rem",
        }}
      >
        {/* Honeypot */}
        <div
          style={{
            position: "absolute",
            left: "-10000px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <label htmlFor="honeypot">
            If you are a human, leave this field empty.
          </label>
          <input
            id="honeypot"
            name="honeypot"
            type="text"
            value={form.honeypot}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        {/* Form fields */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
        >
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "0.3rem",
                fontWeight: 500,
                fontSize: "0.9rem",
              }}
            >
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              style={{
                ...fieldBaseStyle,
                border: errors.name
                  ? "1px solid #f97373"
                  : fieldBaseStyle.border,
              }}
            />
            {errors.name && (
              <p
                style={{
                  color: "#fecaca",
                  fontSize: "0.8rem",
                  marginTop: "0.3rem",
                }}
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "0.3rem",
                fontWeight: 500,
                fontSize: "0.9rem",
              }}
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              style={{
                ...fieldBaseStyle,
                border: errors.email
                  ? "1px solid #f97373"
                  : fieldBaseStyle.border,
              }}
            />
            {errors.email && (
              <p
                style={{
                  color: "#fecaca",
                  fontSize: "0.8rem",
                  marginTop: "0.3rem",
                }}
              >
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              style={{
                display: "block",
                marginBottom: "0.3rem",
                fontWeight: 500,
                fontSize: "0.9rem",
              }}
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              style={fieldBaseStyle}
            />
          </div>

          <div>
            <label
              htmlFor="city"
              style={{
                display: "block",
                marginBottom: "0.3rem",
                fontWeight: 500,
                fontSize: "0.9rem",
              }}
            >
              Project city or area
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={form.city}
              onChange={handleChange}
              style={fieldBaseStyle}
            />
          </div>

          <div>
            <label
              htmlFor="projectType"
              style={{
                display: "block",
                marginBottom: "0.3rem",
                fontWeight: 500,
                fontSize: "0.9rem",
              }}
            >
              Project type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              style={{
                ...fieldBaseStyle,
                backgroundColor: "#020617",
              }}
            >
              <option value="">Select an option</option>
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
              <option value="fireplace">Fireplace / Feature wall</option>
              <option value="outdoor">Outdoor kitchen / BBQ</option>
              <option value="commercial">Commercial / multifamily</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="timeline"
              style={{
                display: "block",
                marginBottom: "0.3rem",
                fontWeight: 500,
                fontSize: "0.9rem",
              }}
            >
              Approximate timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              style={{
                ...fieldBaseStyle,
                backgroundColor: "#020617",
              }}
            >
              <option value="">Select an option</option>
              <option value="asap">ASAP</option>
              <option value="1-3-months">1–3 months</option>
              <option value="3-6-months">3–6 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                marginBottom: "0.3rem",
                fontWeight: 500,
                fontSize: "0.9rem",
              }}
            >
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about the space, stone you have in mind, and any measurements or links."
              style={{
                ...fieldBaseStyle,
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-pill-light"
            style={{
              padding: "0.8rem 1.7rem",
              border: "none",
              cursor: isSubmitting ? "default" : "pointer",
              fontSize: "0.98rem",
              marginTop: "0.7rem",
              width: "fit-content",
              opacity: isSubmitting ? 0.85 : 1,
              borderRadius: "999px",
              backgroundColor: "#C9A46A",
              color: "#0B1120",
              fontWeight: 600,
            }}
          >
            {isSubmitting ? "Sending..." : "Request a project bid"}
          </button>
        </div>

        {/* Sidebar info + map */}
        <div
          className="reveal"
          style={{
            fontSize: "0.95rem",
            color: "#9ca3af",
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.6rem",
                color: "#e5e7eb",
              }}
            >
              Other ways to reach us
            </h2>
            <p style={{ marginBottom: "0.5rem" }}>
              Call us at <span style={{ color: "#e5e7eb" }}>818‑913‑9773</span>{" "}
              during normal business hours, or leave a voicemail after hours and
              we&apos;ll return your call.
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              We typically respond to quote requests within 1–2 business days.
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              Based in Los Angeles and serving surrounding areas with custom
              marble, granite, and quartz fabrication and installation.
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.88rem",
                color: "#6b7280",
              }}
            >
              Contractors and designers: feel free to send plans, elevations, or
              spec sheets via a shared link in the form above.
            </p>
          </div>

          {/* Map */}
          <div>
            <h3
              style={{
                fontSize: "0.98rem",
                marginBottom: "0.5rem",
                color: "#e5e7eb",
              }}
            >
              Service area
            </h3>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #1F2937",
              }}
            >
              <iframe
                title="Glendale map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.264859374785!2d-118.269!3d34.1425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c1d109000001%3A0x4a0a0b0b0b0b0b0b!2sGlendale%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
