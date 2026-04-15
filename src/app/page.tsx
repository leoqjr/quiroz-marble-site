// src/app/page.tsx
"use client";

import Image from "next/image";
import { useRevealOnScroll } from "./useRevealOnScroll";

export default function HomePage() {
  useRevealOnScroll();

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "#F9FAFB",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* HERO: full-width image background with text overlay */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "70vh",
          overflow: "hidden",
          borderBottom: "1px solid rgba(15,23,42,0.8)",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          <Image
            src="/home/hero.jpg"
            alt="Stone countertop installation by Quiroz Marble & Granite"
            fill
            priority
            quality={95}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(0.72) saturate(1.1)",
            }}
          />
          {/* Subtle gradient vignette for better text contrast */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(3,7,18,0.9) 0%, rgba(3,7,18,0.6) 40%, rgba(3,7,18,0.1) 100%)",
            }}
          />
        </div>

        {/* Hero content */}
        <div
          className="reveal"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "4.5rem 1.5rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "70vh",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              fontSize: "0.78rem",
              color: "#E5E7EB",
              marginBottom: "0.9rem",
            }}
          >
            LOS ANGELES • STONE • GRANITE • QUARTZ
          </p>

          <h1
            style={{
              fontSize: "clamp(2.6rem, 3.4vw + 1rem, 3.6rem)",
              lineHeight: 1.05,
              margin: "0 0 1.1rem",
              maxWidth: "30rem",
            }}
          >
            Stone surfaces crafted
            <br />
            for design‑driven projects.
          </h1>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#E5E7EB",
              maxWidth: "30rem",
              marginBottom: "2.1rem",
            }}
          >
            Quiroz Marble &amp; Granite partners with contractors and designers
            on high‑end stone projects across Los Angeles.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2.2rem",
            }}
          >
            <a
              href="/contact"
              className="btn-pill-light"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.9rem 2rem",
                fontWeight: 600,
                fontSize: "0.98rem",
                textDecoration: "none",
                backgroundColor: "#FACC15",
                color: "#0B1120",
                borderRadius: "999px",
                boxShadow:
                  "0 16px 40px rgba(0,0,0,0.65), 0 0 0 1px rgba(250,204,21,0.35)",
              }}
            >
              Request a project bid
            </a>
            <span
              style={{
                fontSize: "0.9rem",
                color: "#E5E7EB",
              }}
            >
              Trade‑focused • Licensed &amp; insured
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.7rem",
              fontSize: "0.86rem",
              color: "#D1D5DB",
            }}
          >
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: 600 }}>15+</div>
              <div>years craftsmanship</div>
            </div>
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: 600 }}>500+</div>
              <div>projects installed</div>
            </div>
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: 600 }}>LA</div>
              <div>serving Los Angeles County</div>
            </div>
          </div>
        </div>
      </section>

      {/* Thin divider strip */}
      <section
        style={{
          borderTop: "1px solid #111827",
          borderBottom: "1px solid #111827",
          backgroundColor: "#020617",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "1.4rem 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.9rem",
            color: "#9CA3AF",
          }}
        >
          <span>Custom homes • Remodels • Multi‑unit projects</span>
          <span>Serving Los Angeles County</span>
        </div>
      </section>

      {/* What we fabricate */}
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "3.1rem 1.5rem 2.5rem",
        }}
      >
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "1.7rem",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              margin: 0,
            }}
          >
            What we fabricate
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#9CA3AF",
              margin: 0,
            }}
          >
            Marble, granite, and quartz for design‑driven projects.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1.1rem",
            fontSize: "0.92rem",
            color: "#E5E7EB",
          }}
        >
          <div
            className="card-dark reveal"
            style={{
              padding: "1rem 1.1rem",
              borderRadius: "12px",
              border: "1px solid #1F2937",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.75))",
            }}
          >
            <h3
              style={{
                fontSize: "0.98rem",
                margin: "0 0 0.4rem",
                color: "#F9FAFB",
              }}
            >
              Countertops &amp; vanities
            </h3>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              Kitchens, baths, bars, and waterfall edges.
            </p>
          </div>

          <div
            className="card-dark reveal"
            style={{
              padding: "1rem 1.1rem",
              borderRadius: "12px",
              border: "1px solid #1F2937",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.75))",
            }}
          >
            <h3
              style={{
                fontSize: "0.98rem",
                margin: "0 0 0.4rem",
                color: "#F9FAFB",
              }}
            >
              Architectural details
            </h3>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              Fireplaces, feature walls, stairs, and custom stone pieces.
            </p>
          </div>

          <div
            className="card-dark reveal"
            style={{
              padding: "1rem 1.1rem",
              borderRadius: "12px",
              border: "1px solid #1F2937",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.75))",
            }}
          >
            <h3
              style={{
                fontSize: "0.98rem",
                margin: "0 0 0.4rem",
                color: "#F9FAFB",
              }}
            >
              Multi‑unit &amp; spec
            </h3>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              Streamlined fabrication for builders and developers.
            </p>
          </div>

          <div
            className="card-dark reveal"
            style={{
              padding: "1rem 1.1rem",
              borderRadius: "12px",
              border: "1px solid #1F2937",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.75))",
            }}
          >
            <h3
              style={{
                fontSize: "0.98rem",
                margin: "0 0 0.4rem",
                color: "#F9FAFB",
              }}
            >
              Custom residential
            </h3>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              Custom homes that prioritize craft and material.
            </p>
          </div>
        </div>
      </section>

      {/* Selected work (gallery) – images only, larger cards, higher quality */}
      <section
        style={{
          borderTop: "1px solid #111827",
          borderBottom: "1px solid #111827",
          backgroundColor: "#020617",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "2.6rem 1.5rem 2.9rem",
          }}
        >
          <div
            className="reveal"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "1.6rem",
              gap: "1rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                margin: 0,
              }}
            >
              Selected work
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#9CA3AF",
                margin: 0,
              }}
            >
              A glimpse into our shop and recent projects.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {/* Card 1 – shop */}
            <div
              className="reveal"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #1F2937",
                position: "relative",
                minHeight: "260px",
              }}
            >
              <Image
                src="/home/shop.jpg"
                alt="Inside our stone fabrication shop"
                fill
                quality={95}
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Card 2 – close-up sink */}
            <div
              className="reveal"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #1F2937",
                position: "relative",
                minHeight: "260px",
              }}
            >
              <Image
                src="/home/upclosesink.jpg"
                alt="Recent kitchen or bath installation"
                fill
                quality={95}
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Card 3 – wide island */}
            <div
              className="reveal"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #1F2937",
                position: "relative",
                minHeight: "260px",
              }}
            >
              <Image
                src="/home/wideisland.jpg"
                alt="Stone details, edges, and seams"
                fill
                quality={95}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* For the trade + CTA */}
      <section
        style={{
          borderTop: "1px solid #111827",
          backgroundColor: "#020617",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "3.1rem 1.5rem 3.5rem",
            display: "grid",
            gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
            gap: "2.6rem",
          }}
        >
          <div className="reveal">
            <h2
              style={{
                fontSize: "1.25rem",
                margin: "0 0 0.4rem",
              }}
            >
              Built for the trade.
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#9CA3AF",
                margin: "0 0 1rem",
              }}
            >
              The details, communication, and finish your clients expect.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.94rem",
                color: "#E5E7EB",
                display: "grid",
                gap: "0.6rem",
              }}
            >
              <li>Clear timelines that respect your schedule.</li>
              <li>Support on materials, details, and site conditions.</li>
              <li>Installers who leave the space ready to photograph.</li>
            </ul>
          </div>

          <div
            className="reveal"
            style={{
              borderRadius: "16px",
              border: "1px solid #1F2937",
              background:
                "radial-gradient(circle at top, rgba(201,164,106,0.16), rgba(15,23,42,0.98))",
              padding: "1.6rem 1.7rem",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                color: "#F9FAFB",
                margin: "0 0 0.7rem",
              }}
            >
              Share your next project.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#E5E7EB",
                margin: "0 0 1rem",
                lineHeight: 1.5,
              }}
            >
              Send your plans or scope and we&apos;ll follow up with a clear,
              trade‑friendly bid and timeline.
            </p>
            <a
              href="/contact"
              className="btn-pill-light"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.8rem 1.7rem",
                fontWeight: 600,
                fontSize: "0.94rem",
                textDecoration: "none",
                backgroundColor: "#C9A46A",
                color: "#0B1120",
                borderRadius: "999px",
              }}
            >
              Request a project bid
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
