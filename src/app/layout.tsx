import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Quiroz Marble & Granite",
  description:
    "Marble and granite fabrication for homes and light commercial projects in Los Angeles County and Glendale.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="site-body"
        style={{
          margin: 0,
          backgroundColor: "#121218",
          color: "#F5F5F5",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Header with nav */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 30,
            borderBottom: "1px solid #1F2933",
            backgroundColor: "#0B0F19",
          }}
        >
          <nav
            style={{
              maxWidth: "1120px",
              margin: "0 auto",
              padding: "1rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#F5F5F5",
                textDecoration: "none",
              }}
            >
              Quiroz Marble &amp; Granite
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.75rem",
                fontSize: "0.9rem",
              }}
            >
              {/* Main nav links */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}
              >
                <Link href="/services" className="nav-link-dark">
                  Services
                </Link>
                <Link href="/gallery" className="nav-link-dark">
                  Gallery
                </Link>
                <Link href="/about" className="nav-link-dark">
                  About
                </Link>
                <Link
                  href="/contact"
                  className="btn-pill-ghost"
                  style={{
                    padding: "0.45rem 1.1rem",
                    fontSize: "0.88rem",
                    textDecoration: "none",
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <div className="site-main">{children}</div>

        {/* Global footer with links + social */}
        <footer
          style={{
            borderTop: "1px solid #1F2933",
            backgroundColor: "#050814",
          }}
        >
          <div
            style={{
              maxWidth: "1120px",
              margin: "0 auto",
              padding: "1.6rem 1.5rem",
              display: "grid",
              gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)",
              gap: "1.5rem",
              fontSize: "0.82rem",
              color: "#9CA3AF",
            }}
          >
            {/* Left: brand + links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div style={{ color: "#E5E7EB", fontSize: "0.9rem" }}>
                Quiroz Marble &amp; Granite
              </div>
              <div style={{ fontSize: "0.8rem" }}>
                Based in Los Angeles, serving surrounding areas with custom
                marble, granite, and quartz fabrication and installation.
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                  marginTop: "0.3rem",
                }}
              >
                {/* Helpful footer links */}
                <Link href="/services" className="nav-link-dark">
                  Services
                </Link>
                <Link href="/gallery" className="nav-link-dark">
                  Gallery
                </Link>
                <Link href="/about" className="nav-link-dark">
                  About
                </Link>
                <Link href="/contact" className="nav-link-dark">
                  Contact
                </Link>
                {/* Blog stays in footer as Articles */}
                <Link href="/blog" className="nav-link-dark">
                  Articles
                </Link>
              </div>
            </div>

            {/* Right: social + legal */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "flex-end",
                textAlign: "right",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontSize: "0.8rem",
                  color: "#9CA3AF",
                }}
              >
                {/* Footer social placeholders */}
                <a
                  href="#"
                  aria-label="Instagram"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  IG
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  FB
                </a>
                <a
                  href="#"
                  aria-label="Houzz"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  HZ
                </a>
              </div>

              <div style={{ opacity: 0.9 }}>Los Angeles, California</div>
              <div>
                © {new Date().getFullYear()} Quiroz Marble &amp; Granite. All
                rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
