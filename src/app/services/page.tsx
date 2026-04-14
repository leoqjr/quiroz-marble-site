"use client";

import { useRevealOnScroll } from "../useRevealOnScroll";

export default function ServicesPage() {
  useRevealOnScroll();

  return (
    <main
      style={{
        backgroundColor: "#121218",
        color: "#F5F5F5",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: "2.4rem 1.5rem 3rem",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      {/* Intro */}
      <section
        className="reveal"
        style={{
          maxWidth: "760px",
          marginBottom: "2.2rem",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            fontSize: "0.78rem",
            color: "#C9A46A",
            marginBottom: "0.7rem",
          }}
        >
          Services
        </p>
        <h1
          style={{
            fontSize: "2rem",
            margin: "0 0 0.8rem",
          }}
        >
          Custom stone fabrication &amp; installation.
        </h1>
        <p
          style={{
            margin: 0,
            color: "#9CA3AF",
            fontSize: "0.95rem",
            lineHeight: 1.6,
          }}
        >
          Marble, granite, and quartz for kitchens, baths, fireplaces, outdoor
          spaces, and light commercial projects across Los Angeles County and
          Glendale.
        </p>
      </section>

      {/* Services list with circular image slots */}
      <section
        className="reveal"
        style={{
          borderTop: "1px solid #1F2937",
        }}
      >
        {/* Kitchen */}
        <div
          className="reveal"
          style={{
            padding: "2.1rem 0",
            borderBottom: "1px solid #1F2937",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 0.9fr)",
            gap: "1.8rem",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.2rem",
                margin: "0 0 0.4rem",
              }}
            >
              Kitchen countertops
            </h2>
            <p
              style={{
                margin: "0 0 0.45rem",
                color: "#D4D4D8",
                fontSize: "0.94rem",
                lineHeight: 1.6,
              }}
            >
              New kitchens and remodels tailored to your cabinets, appliances,
              and layout.
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.1rem",
                color: "#9CA3AF",
                fontSize: "0.9rem",
                lineHeight: 1.5,
              }}
            >
              <li>Islands, peninsulas, and waterfall edges.</li>
              <li>Undermount sink and cooktop cutouts included.</li>
              <li>Marble, granite, and quartz in popular colors.</li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "1px solid #1F2937",
                background:
                  "radial-gradient(circle at top, rgba(148,163,184,0.35), rgba(15,23,42,1))",
              }}
            >
              {/* Later: replace with a kitchen <img> styled as a circle */}
            </div>
          </div>
        </div>

        {/* Bathrooms */}
        <div
          className="reveal"
          style={{
            padding: "2.1rem 0",
            borderBottom: "1px solid #1F2937",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 0.9fr)",
            gap: "1.8rem",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.2rem",
                margin: "0 0 0.4rem",
              }}
            >
              Bathroom vanities &amp; showers
            </h2>
            <p
              style={{
                margin: "0 0 0.45rem",
                color: "#D4D4D8",
                fontSize: "0.94rem",
                lineHeight: 1.6,
              }}
            >
              Stone surfaces that handle steam, splashes, and daily use.
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.1rem",
                color: "#9CA3AF",
                fontSize: "0.9rem",
                lineHeight: 1.5,
              }}
            >
              <li>Single and double vanities with splashes.</li>
              <li>Shower walls, niches, and benches.</li>
              <li>Tub decks and surrounds.</li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "1px solid #1F2937",
                background:
                  "radial-gradient(circle at top, rgba(201,164,106,0.35), rgba(15,23,42,1))",
              }}
            >
              {/* Later: replace with a bathroom <img> styled as a circle */}
            </div>
          </div>
        </div>

        {/* Fireplaces */}
        <div
          className="reveal"
          style={{
            padding: "2.1rem 0",
            borderBottom: "1px solid #1F2937",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 0.9fr)",
            gap: "1.8rem",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.2rem",
                margin: "0 0 0.4rem",
              }}
            >
              Fireplaces &amp; feature walls
            </h2>
            <p
              style={{
                margin: "0 0 0.45rem",
                color: "#D4D4D8",
                fontSize: "0.94rem",
                lineHeight: 1.6,
              }}
            >
              Statement slabs and surrounds that anchor your living space.
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.1rem",
                color: "#9CA3AF",
                fontSize: "0.9rem",
                lineHeight: 1.5,
              }}
            >
              <li>Modern full-height slabs or classic surrounds.</li>
              <li>TV and media wall cladding.</li>
              <li>Heat-appropriate materials around fireplaces.</li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "1px solid #1F2937",
                background:
                  "radial-gradient(circle at top, rgba(148,163,184,0.35), rgba(15,23,42,1))",
              }}
            >
              {/* Later: replace with a fireplace <img> styled as a circle */}
            </div>
          </div>
        </div>

        {/* Outdoor */}
        <div
          className="reveal"
          style={{
            padding: "2.1rem 0",
            borderBottom: "1px solid #1F2937",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 0.9fr)",
            gap: "1.8rem",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.2rem",
                margin: "0 0 0.4rem",
              }}
            >
              Outdoor kitchens &amp; BBQs
            </h2>
            <p
              style={{
                margin: "0 0 0.45rem",
                color: "#D4D4D8",
                fontSize: "0.94rem",
                lineHeight: 1.6,
              }}
            >
              Stone built for sun, spills, and year‑round entertaining.
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.1rem",
                color: "#9CA3AF",
                fontSize: "0.9rem",
                lineHeight: 1.5,
              }}
            >
              <li>BBQ islands, bars, and prep areas.</li>
              <li>Materials selected for outdoor exposure.</li>
              <li>Surfaces coordinated with your hardscape.</li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "1px solid #1F2937",
                background:
                  "radial-gradient(circle at top, rgba(56,189,248,0.35), rgba(15,23,42,1))",
              }}
            >
              {/* Later: replace with an outdoor kitchen <img> styled as a circle */}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section
        className="reveal"
        style={{
          marginTop: "2rem",
          marginBottom: "2.4rem",
          padding: "1.3rem 1.4rem",
          borderRadius: "16px",
          border: "1px solid #1F2937",
          backgroundColor: "#020617",
        }}
      >
        <h2
          style={{
            fontSize: "1.1rem",
            margin: "0 0 0.5rem",
          }}
        >
          Commercial &amp; multifamily projects
        </h2>
        <p
          style={{
            margin: "0 0 0.4rem",
            color: "#9CA3AF",
            fontSize: "0.93rem",
            lineHeight: 1.6,
          }}
        >
          Stone work for lobbies, offices, and multi‑unit projects with
          scheduling that works around active job sites.
        </p>
        <p
          style={{
            margin: 0,
            color: "#D4D4D8",
            fontSize: "0.9rem",
            lineHeight: 1.5,
          }}
        >
          Reception desks, lobby surfaces, and unit kitchens and baths across
          Los Angeles County and Glendale.
        </p>
      </section>

      {/* Who we work with */}
      <section
        className="reveal"
        style={{
          marginBottom: "2.2rem",
          padding: "1rem 1.2rem",
          borderRadius: "999px",
          border: "1px solid #1F2937",
          backgroundColor: "#020617",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.6rem",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "0.9rem",
            color: "#E5E7EB",
          }}
        >
          We regularly work with:
        </span>
        <span
          style={{
            fontSize: "0.86rem",
            color: "#9CA3AF",
          }}
        >
          Homeowners • General contractors • Designers • Property managers
        </span>
      </section>

      {/* CTA */}
      <section
        className="reveal"
        style={{
          padding: "1.5rem 1.6rem",
          borderRadius: "16px",
          background:
            "radial-gradient(circle at top, rgba(201,164,106,0.16), rgba(15,23,42,0.98))",
          border: "1px solid #1F2937",
          maxWidth: "760px",
        }}
      >
        <p
          style={{
            margin: "0 0 0.8rem",
            color: "#E5E7EB",
            fontSize: "0.95rem",
            lineHeight: 1.6,
          }}
        >
          Not sure which material or service you need? Share your plans or a few
          photos of your space and we&apos;ll recommend options that fit your
          budget and timeline.
        </p>
        <button
          style={{
            padding: "0.8rem 1.7rem",
            backgroundColor: "#C9A46A",
            color: "#0B1120",
            border: "none",
            borderRadius: "999px",
            cursor: "pointer",
            fontSize: "0.96rem",
            fontWeight: 500,
          }}
        >
          Schedule a consultation
        </button>
      </section>
    </main>
  );
}
