"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectType: "",
    timeline: "",
    message: "",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(data.error || "Something went wrong. Please try again.");
        return;
      }

      alert(
        "Thank you! Your request was received. We will follow up within 1–2 business days.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        projectType: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      alert(
        "Could not submit the form. Please check your connection and try again.",
      );
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#222",
        backgroundColor: "#f8f4ef",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Request a Free Quote
      </h1>
      <p style={{ marginBottom: "1.5rem", color: "#555" }}>
        Share a few details about your project and we&apos;ll follow up with a
        quote or questions within 1–2 business days.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.3fr)",
          gap: "2rem",
        }}
      >
        {/* Left: fields */}
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
                marginBottom: "0.25rem",
                fontWeight: 500,
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
                width: "100%",
                padding: "0.6rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontWeight: 500,
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
                width: "100%",
                padding: "0.6rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontWeight: 500,
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
              style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="city"
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontWeight: 500,
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
              style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="projectType"
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontWeight: 500,
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
                width: "100%",
                padding: "0.6rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#fff",
              }}
            >
              <option value="">Select an option</option>
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
              <option value="fireplace">Fireplace / Feature Wall</option>
              <option value="outdoor">Outdoor Kitchen / BBQ</option>
              <option value="commercial">Commercial / Multifamily</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="timeline"
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontWeight: 500,
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
                width: "100%",
                padding: "0.6rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#fff",
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
                marginBottom: "0.25rem",
                fontWeight: 500,
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
              placeholder="Tell us about your space, materials you like, and any measurements you have."
              style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "0.8rem 1.6rem",
              backgroundColor: "#b98b3f",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              marginTop: "0.5rem",
              width: "fit-content",
            }}
          >
            Request a Free Quote
          </button>
        </div>

        {/* Right: info */}
        <div style={{ fontSize: "0.95rem", color: "#555" }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
            Other ways to reach us
          </h2>
          <p style={{ marginBottom: "0.6rem" }}>
            You can also call us at (XXX) XXX-XXXX during normal business hours.
          </p>
          <p style={{ marginBottom: "0.6rem" }}>
            We typically respond to quote requests within 1–2 business days.
          </p>
          <p>
            Serving Los Angeles County and Glendale with custom marble, granite,
            and quartz fabrication and installation.
          </p>
        </div>
      </form>
    </main>
  );
}
