export default function Home() {
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
      {/* Hero */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          gap: "2rem",
          alignItems: "center",
          marginBottom: "3.5rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Timeless Stone Craftsmanship for Los Angeles Homes
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              marginBottom: "0.75rem",
              color: "#555",
            }}
          >
            Custom marble and granite countertops, fireplaces, and surfaces
            fabricated and installed with precision for homeowners, contractors,
            realtors, and designers across Los Angeles County and Glendale.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              marginBottom: "1.5rem",
              color: "#555",
            }}
          >
            From first measure to final polish, our team handles every detail so
            your project finishes on time and looks exceptional for years to
            come.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              style={{
                padding: "0.8rem 1.6rem",
                backgroundColor: "#b98b3f",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Get a Free Quote
            </button>
            <button
              style={{
                padding: "0.8rem 1.4rem",
                backgroundColor: "transparent",
                color: "#444",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "0.95rem",
              }}
            >
              View Our Gallery
            </button>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "260px",
            backgroundColor: "#ddd",
            borderRadius: "8px",
            border: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          Future hero image of a finished kitchen or bathroom countertop
        </div>
      </section>

      {/* Who We Serve */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>
          Who We Serve in Los Angeles
        </h2>
        <p style={{ marginBottom: "1rem", color: "#555" }}>
          Whether it&apos;s a single vanity or a full home remodel, we tailor
          each project to your budget, timeline, and design vision.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0.75rem",
            color: "#444",
          }}
        >
          <div>
            • Homeowners planning kitchen, bathroom, and outdoor kitchen
            upgrades.
          </div>
          <div>
            • Contractors and builders needing a reliable stone fabrication
            partner.
          </div>
          <div>
            • Realtors looking to add value before listing or after purchase.
          </div>
          <div>
            • Interior designers sourcing premium stone for custom projects.
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ marginBottom: "3rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h2 style={{ fontSize: "1.8rem" }}>Custom Stone Services</h2>
          <button
            style={{
              padding: "0.4rem 0.9rem",
              fontSize: "0.9rem",
              backgroundColor: "transparent",
              color: "#444",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            View All Services
          </button>
        </div>
        <p style={{ marginBottom: "1rem", color: "#555" }}>
          We handle your project from slab selection to final installation,
          ensuring a smooth, predictable process at every step.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            {
              title: "Kitchen Countertops",
              body: "Custom marble, granite, and quartz countertops fabricated to fit your layout and appliances.",
            },
            {
              title: "Bathroom Vanities & Showers",
              body: "Elegant vanities, shower walls, and niches that stand up to daily use.",
            },
            {
              title: "Fireplaces & Feature Walls",
              body: "Statement fireplace surrounds and stone feature walls that become the focal point of your space.",
            },
            {
              title: "Outdoor Kitchens & BBQs",
              body: "Durable stone surfaces for patios, BBQ islands, and outdoor entertaining areas.",
            },
            {
              title: "Commercial & Multifamily",
              body: "Reception desks, lobby surfaces, and unit countertops for small commercial and multifamily projects.",
            },
          ].map((service) => (
            <div
              key={service.title}
              style={{
                backgroundColor: "#f2e9dd",
                padding: "1rem",
                borderRadius: "6px",
                border: "1px solid #e0d5c5",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>
          Our Simple 4-Step Process
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            {
              title: "Consultation & Quote",
              body: "Share your plans, measurements, and preferred materials; we provide a clear, itemized quote.",
            },
            {
              title: "Material Selection",
              body: "Choose from marble, granite, and quartz options that fit your design, maintenance needs, and budget.",
            },
            {
              title: "Precision Fabrication",
              body: "We template, cut, polish, and finish your stone using professional fabrication techniques.",
            },
            {
              title: "Installation & Final Walkthrough",
              body: "Our team installs, seals, and reviews every detail with you before we consider the job complete.",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              style={{
                backgroundColor: "#fdfaf6",
                padding: "1rem",
                borderRadius: "6px",
                border: "1px solid #e5dccd",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#b98b3f",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                }}
              >
                Step {index + 1}
              </div>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.3rem" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>
          Recent Projects
        </h2>
        <p style={{ marginBottom: "1rem", color: "#555" }}>
          A glimpse at some of the kitchens, bathrooms, fireplaces, and outdoor
          spaces we&apos;ve completed around Los Angeles County and Glendale.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {[
            "Glendale kitchen – white quartz island with waterfall edge.",
            "Los Angeles bathroom – marble vanity with full-height backsplash.",
            "Outdoor BBQ – granite countertop with built-in grill.",
            "Living room fireplace – stone feature wall with TV niche.",
          ].map((caption) => (
            <div
              key={caption}
              style={{
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid #ddd",
                backgroundColor: "#eee",
              }}
            >
              <div
                style={{
                  height: "140px",
                  background:
                    "linear-gradient(135deg, #d5d5d5 0%, #f0f0f0 50%, #c8c8c8 100%)",
                }}
              />
              <div
                style={{ padding: "0.6rem", fontSize: "0.9rem", color: "#444" }}
              >
                {caption}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <button
            style={{
              padding: "0.6rem 1.2rem",
              backgroundColor: "transparent",
              color: "#444",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            See more projects in our Gallery
          </button>
        </div>
      </section>

      {/* Why Choose Quiroz */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>
          Why Homeowners Trust Quiroz Marble &amp; Granite
        </h2>
        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "1.5rem",
            marginBottom: "1rem",
            color: "#555",
          }}
        >
          <li>
            Local expertise in Los Angeles County and Glendale projects and
            requirements.
          </li>
          <li>
            One dedicated point of contact from quote through installation.
          </li>
          <li>Careful protection of your home and cleanup after each visit.</li>
          <li>Transparent pricing with no surprise add-ons at the end.</li>
        </ul>
        <p style={{ fontStyle: "italic", color: "#666" }}>
          “Quiroz made our kitchen remodel easy and the countertops turned out
          beautiful.” – Homeowner in Glendale
        </p>
      </section>

      {/* Contact CTA */}
      <section
        style={{
          padding: "1.5rem",
          borderRadius: "8px",
          backgroundColor: "#e9dfcf",
          border: "1px solid #d1c4af",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
          Ready to Start Your Project?
        </h2>
        <p style={{ marginBottom: "0.8rem", color: "#444" }}>
          Tell us about your project and get a free, no-obligation quote within
          1–2 business days.
        </p>
        <button
          style={{
            padding: "0.8rem 1.6rem",
            backgroundColor: "#b98b3f",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            marginBottom: "0.6rem",
          }}
        >
          Request a Free Quote
        </button>
        <p style={{ fontSize: "0.95rem", color: "#555" }}>
          Or call us at (XXX) XXX-XXXX during normal business hours.
        </p>
      </section>
    </main>
  );
}
