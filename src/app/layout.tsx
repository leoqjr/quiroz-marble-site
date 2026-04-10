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
        style={{
          margin: 0,
          backgroundColor: "#f0ebe3",
        }}
      >
        <header
          style={{
            borderBottom: "1px solid #ddd0c0",
            backgroundColor: "#fdfaf6",
          }}
        >
          <nav
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0.8rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "#222" }}>
              <span style={{ fontWeight: 600 }}>
                Quiroz Marble &amp; Granite
              </span>
            </Link>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                fontSize: "0.95rem",
              }}
            >
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link
                href="/contact"
                style={{
                  padding: "0.4rem 0.9rem",
                  borderRadius: "4px",
                  border: "1px solid #b98b3f",
                  color: "#b98b3f",
                }}
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <div style={{ paddingTop: "1.5rem", paddingBottom: "3rem" }}>
          {children}
        </div>
        <footer
          style={{
            borderTop: "1px solid #ddd0c0",
            backgroundColor: "#fdfaf6",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0.8rem 2rem",
              fontSize: "0.85rem",
              color: "#666",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            © {new Date().getFullYear()} Quiroz Marble &amp; Granite. All rights
            reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
