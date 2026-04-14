"use client";

import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "Marble vs. Granite: Which Is Right for Your Kitchen?",
      summary:
        "Compare the look, maintenance, and durability of marble and granite so you can choose the right countertop for your home.",
    },
    {
      title: "How to Care for Your New Stone Countertops",
      summary:
        "Simple daily habits and cleaning tips to keep marble, granite, and quartz surfaces looking their best.",
    },
    {
      title: "Top Countertop Colors Los Angeles Homeowners Love Right Now",
      summary:
        "From bright whites to warm neutrals, see which colors are popular in Los Angeles kitchens and baths.",
    },
    {
      title: "What to Expect During the Countertop Fabrication Process",
      summary:
        "A step-by-step overview of measuring, templating, fabrication, and installation so there are no surprises.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#121218",
        color: "#F5F5F5",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: "3rem 1.5rem 3.5rem",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      <section
        style={{
          maxWidth: "720px",
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
          Stone tips &amp; project ideas
        </p>
        <h1
          style={{
            fontSize: "2rem",
            margin: "0 0 0.8rem",
          }}
        >
          Short guides for planning and caring for stone.
        </h1>
        <p
          style={{
            margin: 0,
            color: "#9CA3AF",
            fontSize: "0.94rem",
            lineHeight: 1.6,
          }}
        >
          Browse quick reads on choosing materials, caring for countertops, and
          understanding the fabrication process.
        </p>
      </section>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {posts.map((post) => (
          <li
            key={post.title}
            style={{
              padding: "1.1rem 0",
              borderTop: "1px solid #1F2937",
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                margin: "0 0 0.4rem",
                color: "#E5E7EB",
              }}
            >
              {post.title}
            </h2>
            <p
              style={{
                margin: "0 0 0.25rem",
                color: "#9CA3AF",
                fontSize: "0.95rem",
                lineHeight: 1.5,
              }}
            >
              {post.summary}
            </p>
            <span
              style={{
                fontSize: "0.88rem",
                color: "#C9A46A",
              }}
            >
              Read more
            </span>
          </li>
        ))}
      </ul>

      {/* Contact CTA at bottom */}
      <section
        style={{
          marginTop: "2.4rem",
          padding: "1.4rem 1.6rem",
          borderRadius: "16px",
          border: "1px solid #1F2937",
          backgroundColor: "#020617",
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
          Reading about stone and planning a project of your own? Share a few
          details and we&apos;ll let you know what&apos;s possible in your
          space.
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
          Request a quote
        </Link>
      </section>
    </main>
  );
}
