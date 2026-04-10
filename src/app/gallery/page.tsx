export default function GalleryPage() {
  const sampleProjects = [
    {
      category: "Kitchens",
      caption: "Glendale kitchen – white quartz island with waterfall edge.",
    },
    {
      category: "Kitchens",
      caption:
        "Los Angeles kitchen – dark granite perimeter with light island.",
    },
    {
      category: "Bathrooms",
      caption: "Master bath – marble vanity with full-height backsplash.",
    },
    {
      category: "Bathrooms",
      caption: "Guest bath – quartz vanity and shower niche.",
    },
    {
      category: "Fireplaces & Feature Walls",
      caption: "Living room – stone feature wall with TV niche.",
    },
    {
      category: "Outdoor Kitchens & BBQs",
      caption: "Backyard BBQ – granite countertop with built-in grill.",
    },
  ];

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
        Project Gallery
      </h1>
      <p style={{ marginBottom: "1.5rem", color: "#555" }}>
        Explore a selection of kitchens, bathrooms, fireplaces, and outdoor
        spaces we&apos;ve completed for clients around Los Angeles County and
        Glendale.
      </p>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Kitchens</h2>
        <p style={{ marginBottom: "0.75rem", color: "#555" }}>
          From classic marble to durable quartz, we fabricate and install
          countertops that fit your layout and style.
        </p>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
          Bathrooms
        </h2>
        <p style={{ marginBottom: "0.75rem", color: "#555" }}>
          Vanities, tub surrounds, and shower walls designed to look great and
          stand up to daily use.
        </p>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
          Fireplaces &amp; Feature Walls
        </h2>
        <p style={{ marginBottom: "0.75rem", color: "#555" }}>
          Statement fireplace surrounds and stone accents that become the focal
          point of your space.
        </p>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
          Outdoor Kitchens &amp; BBQs
        </h2>
        <p style={{ marginBottom: "0.75rem", color: "#555" }}>
          Outdoor countertops and BBQ islands designed for entertaining and
          everyday cooking.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {sampleProjects.map((project) => (
            <div
              key={project.caption}
              style={{
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid #ddd",
                backgroundColor: "#eee",
              }}
            >
              <div
                style={{
                  height: "150px",
                  background:
                    "linear-gradient(135deg, #d5d5d5 0%, #f0f0f0 50%, #c8c8c8 100%)",
                }}
              />
              <div
                style={{ padding: "0.6rem", fontSize: "0.9rem", color: "#444" }}
              >
                <strong>{project.category}:</strong> {project.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      <p style={{ color: "#555" }}>
        Ready to start your own project? Request a free quote and we&apos;ll
        help you choose the right stone and layout.
      </p>
    </main>
  );
}
