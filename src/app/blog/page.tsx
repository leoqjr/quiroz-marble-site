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
        Stone Tips &amp; Project Ideas
      </h1>
      <p style={{ marginBottom: "1.5rem", color: "#555" }}>
        Browse short guides to choosing marble and granite, caring for your
        countertops, and planning your next project.
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {posts.map((post) => (
          <li
            key={post.title}
            style={{
              padding: "1rem 0",
              borderBottom: "1px solid #e0d5c5",
            }}
          >
            <h2 style={{ fontSize: "1.3rem", marginBottom: "0.4rem" }}>
              {post.title}
            </h2>
            <p style={{ marginBottom: "0.3rem", color: "#555" }}>
              {post.summary}
            </p>
            <span style={{ fontSize: "0.9rem", color: "#b98b3f" }}>
              Read more
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
