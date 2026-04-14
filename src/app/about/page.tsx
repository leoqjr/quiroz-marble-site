"use client";

import Link from "next/link";
import { useRevealOnScroll } from "../useRevealOnScroll";

export default function AboutPage() {
  useRevealOnScroll();

  return (
    <main
      style={{
        backgroundColor: "#121218",
        color: "#F5F5F5",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: "2.2rem 1.5rem 2.6rem",
        maxWidth: "1040px",
        margin: "0 auto",
      }}
    >
      {/* Intro */}
      <section
        className="reveal"
        style={{
          maxWidth: "720px",
          marginBottom: "2rem",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            fontSize: "0.78rem",
            color: "#C9A46A",
            marginBottom: "0.6rem",
          }}
        >
          About Quiroz Marble &amp; Granite
        </p>
        <h1
          style={{
            fontSize: "1.9rem",
            margin: "0 0 0.7rem",
          }}
        >
          Family-run stone fabrication in Los Angeles.
        </h1>
        <p
          style={{
            margin: 0,
            color: "#9CA3AF",
            fontSize: "0.95rem",
            lineHeight: 1.6,
          }}
        >
          Quiroz Marble &amp; Granite is a family‑run marble and granite
          fabrication shop serving Los Angeles County and Glendale with precise
          craftsmanship and dependable service.
        </p>
      </section>

      {/* Row 1 – Shop / fabrication */}
      <section
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: "1.8rem",
          alignItems: "center",
          marginBottom: "2.2rem",
        }}
      >
        {/* Slightly shorter “square” */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "80%",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid #1F2937",
              background:
                "radial-gradient(circle at top, rgba(148,163,184,0.35), rgba(15,23,42,1))",
            }}
          >
            {/* <img src="/about-shop.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
          </div>
        </div>

        <div>
          <h2
            style={{
              fontSize: "1.15rem",
              margin: "0 0 0.6rem",
            }}
          >
            Hands-on fabrication, start to finish
          </h2>
          <p
            style={{
              margin: 0,
              color: "#D4D4D8",
              fontSize: "0.94rem",
              lineHeight: 1.6,
            }}
          >
            Every project is measured, templated, and fabricated with care in
            our shop before installation in your home. You get consistent
            quality and a team that knows your project details from the first
            visit to the final seam.
          </p>
        </div>
      </section>

      {/* Row 2 – Kitchen image + commitment list */}
      <section
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
          gap: "1.8rem",
          alignItems: "center",
          marginBottom: "2.2rem",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "1.15rem",
              margin: "0 0 0.6rem",
            }}
          >
            Our commitment to your project
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "0.94rem",
              color: "#E5E7EB",
              display: "grid",
              gap: "0.45rem",
              lineHeight: 1.5,
            }}
          >
            <li>Respect for your home and job site from start to finish.</li>
            <li>Honest timelines and clear communication at every stage.</li>
            <li>Quality materials from trusted stone suppliers.</li>
            <li>Careful attention to seams, edges, and finishes.</li>
          </ul>
        </div>

        {/* Slightly shorter “square” */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "80%",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid #1F2937",
              background:
                "radial-gradient(circle at top, rgba(201,164,106,0.35), rgba(15,23,42,1))",
            }}
          >
            {/* <img src="/about-kitchen.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
          </div>
        </div>
      </section>

      {/* Row 3 – Map / local focus */}
      <section
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: "1.8rem",
          alignItems: "center",
          marginBottom: "2.2rem",
        }}
      >
        {/* Slightly shorter “square” */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "80%",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid #1F2937",
              background:
                "radial-gradient(circle at top, rgba(56,189,248,0.3), rgba(15,23,42,1))",
            }}
          >
            {/* <img src="/about-la-map.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
          </div>
        </div>

        <div>
          <h2
            style={{
              fontSize: "1.15rem",
              margin: "0 0 0.6rem",
            }}
          >
            Serving Los Angeles County &amp; Glendale
          </h2>
          <p
            style={{
              marginBottom: "0.6rem",
              color: "#9CA3AF",
              fontSize: "0.94rem",
              lineHeight: 1.6,
            }}
          >
            We focus on Los Angeles County and Glendale so we can respond
            quickly, coordinate with your contractor, and stay on top of local
            project requirements.
          </p>
          <p
            style={{
              margin: 0,
              color: "#D4D4D8",
              fontSize: "0.94rem",
              lineHeight: 1.6,
            }}
          >
            Whether you&apos;re updating a single bathroom or planning a full
            remodel, our goal is to make your stonework the part of the project
            you don&apos;t have to worry about.
          </p>
        </div>
      </section>

      {/* Contact CTA added at bottom */}
      <section
        className="reveal"
        style={{
          marginTop: "2rem",
          padding: "1.4rem 1.6rem",
          borderRadius: "16px",
          border: "1px solid #1F2937",
          background:
            "radial-gradient(circle at top, rgba(201,164,106,0.16), rgba(15,23,42,0.98))",
          maxWidth: "720px",
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
          If our approach sounds like a fit for your project, we&apos;d be happy
          to look at your plans or photos and talk through options.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            padding: "0.8rem 1.7rem",
            backgroundColor: "#C9A46A",
            color: "#0B1120",
            borderRadius: "999px",
            fontSize: "0.96rem",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Contact us
        </Link>
      </section>
    </main>
  );
}
