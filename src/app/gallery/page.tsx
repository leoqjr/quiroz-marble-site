"use client";

import Link from "next/link";
import { useState } from "react";
import { useRevealOnScroll } from "../useRevealOnScroll";

type Category =
  | "All"
  | "Kitchens"
  | "Bathrooms"
  | "Fireplaces & Feature Walls"
  | "Outdoor Kitchens & BBQs"
  | "Commercial";

const projects = [
  {
    id: 1,
    category: "Kitchens" as Category,
    title: "Glendale kitchen",
    location: "Glendale, CA",
    caption: "White quartz island with waterfall edge.",
  },
  {
    id: 2,
    category: "Kitchens" as Category,
    title: "Los Angeles kitchen",
    location: "Los Angeles, CA",
    caption: "Dark granite perimeter with light island.",
  },
  {
    id: 3,
    category: "Bathrooms" as Category,
    title: "Master bath",
    location: "Glendale, CA",
    caption: "Marble vanity with full-height backsplash.",
  },
  {
    id: 4,
    category: "Bathrooms" as Category,
    title: "Guest bath",
    location: "Los Angeles, CA",
    caption: "Quartz vanity and shower niche.",
  },
  {
    id: 5,
    category: "Fireplaces & Feature Walls" as Category,
    title: "Living room feature wall",
    location: "Burbank, CA",
    caption: "Stone feature wall with TV niche.",
  },
  {
    id: 6,
    category: "Outdoor Kitchens & BBQs" as Category,
    title: "Backyard BBQ",
    location: "Pasadena, CA",
    caption: "Granite countertop with built-in grill.",
  },
  {
    id: 7,
    category: "Commercial" as Category,
    title: "Restaurant bar top",
    location: "Los Angeles, CA",
    caption: "Durable quartz bar counter for a busy restaurant.",
  },
  {
    id: 8,
    category: "Commercial" as Category,
    title: "Conference table",
    location: "Glendale, CA",
    caption: "Custom stone conference table for an office space.",
  },
];

const categories: Category[] = [
  "All",
  "Kitchens",
  "Bathrooms",
  "Fireplaces & Feature Walls",
  "Outdoor Kitchens & BBQs",
  "Commercial",
];

export default function GalleryPage() {
  useRevealOnScroll();

  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#121218",
        color: "#F5F5F5",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: "2.6rem 1.5rem 2.6rem",
        maxWidth: "1120px",
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
            marginBottom: "0.7rem",
          }}
        >
          Project gallery
        </p>
        <h1
          style={{
            fontSize: "2rem",
            margin: "0 0 0.8rem",
          }}
        >
          Kitchens, baths, and more around Los Angeles.
        </h1>
        <p
          style={{
            marginBottom: "0.7rem",
            color: "#D4D4D8",
            fontSize: "0.95rem",
            lineHeight: 1.6,
          }}
        >
          A small selection of stonework projects across Los Angeles County and
          Glendale.
        </p>
        <p
          style={{
            margin: 0,
            color: "#9CA3AF",
            fontSize: "0.9rem",
            lineHeight: 1.6,
          }}
        >
          Photos are representative. Details can be tailored to your plans and
          space.
        </p>
      </section>

      {/* Category filters */}
      <section
        className="reveal"
        style={{
          marginBottom: "2.2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
          }}
        >
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: "0.45rem 0.9rem",
                  borderRadius: "999px",
                  border: isActive ? "1px solid #C9A46A" : "1px solid #1F2937",
                  backgroundColor: isActive ? "#C9A46A" : "#020617",
                  color: isActive ? "#0B1120" : "#E5E7EB",
                  fontSize: "0.87rem",
                  cursor: "pointer",
                  transition:
                    "background-color 0.15s ease, border-color 0.15s ease",
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects grid – clean tiles, no text inside box */}
      <section
        className="reveal"
        style={{
          marginBottom: "2.4rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "1.4rem",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #1F2937",
                backgroundColor: "#020617",
              }}
            >
              {/* Image placeholder – swap for <img> later */}
              <div
                style={{
                  width: "100%",
                  paddingBottom: "70%", // large, clean tile
                  background:
                    "radial-gradient(circle at top, rgba(148,163,184,0.35), rgba(15,23,42,1))",
                }}
              />
              {/* Simple caption line below image */}
              <div
                style={{
                  padding: "0.6rem 0.85rem 0.8rem",
                  fontSize: "0.82rem",
                  color: "#9CA3AF",
                  borderTop: "1px solid #111827",
                }}
              >
                {project.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom helper + CTA */}
      <section
        className="reveal"
        style={{
          marginTop: "0.5rem",
          padding: "1.1rem 1.2rem",
          borderRadius: "14px",
          border: "1px solid #1F2937",
          backgroundColor: "#020617",
          display: "grid",
          gap: "0.7rem",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "0.98rem",
              margin: "0 0 0.4rem",
              color: "#E5E7EB",
            }}
          >
            Looking at details
          </h2>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.1rem",
              color: "#9CA3AF",
              fontSize: "0.88rem",
              lineHeight: 1.5,
            }}
          >
            <li>Clean seams and consistent edges.</li>
            <li>Thoughtful vein matching on corners and backsplashes.</li>
            <li>Proper support under overhangs and islands.</li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#D4D4D8",
              fontSize: "0.9rem",
            }}
          >
            Ready to start your own project? Share photos or plans and
            we&apos;ll recommend stones that fit your space.
          </p>
          <Link
            href="/contact"
            style={{
              marginLeft: "auto",
              padding: "0.6rem 1.4rem",
              backgroundColor: "#C9A46A",
              color: "#0B1120",
              borderRadius: "999px",
              fontSize: "0.88rem",
              fontWeight: 500,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Request a quote
          </Link>
        </div>
      </section>
    </main>
  );
}
