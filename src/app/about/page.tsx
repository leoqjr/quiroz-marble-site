export default function AboutPage() {
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
        About Quiroz Marble &amp; Granite
      </h1>
      <p style={{ marginBottom: "1rem", color: "#555" }}>
        Quiroz Marble &amp; Granite is a family-run marble and granite
        fabrication shop serving Los Angeles County and Glendale with precise
        craftsmanship and dependable service.
      </p>
      <p style={{ marginBottom: "1.5rem", color: "#555" }}>
        We combine hands-on experience with modern fabrication methods to
        deliver stone surfaces that stay beautiful for years.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
          Our Commitment
        </h2>
        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "1.5rem",
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          <li>Respect for your home and job site from start to finish.</li>
          <li>Honest timelines and clear communication at every stage.</li>
          <li>Quality materials sourced from trusted stone suppliers.</li>
          <li>Careful attention to details like seams, edges, and finishes.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
          Serving Los Angeles County &amp; Glendale
        </h2>
        <p style={{ marginBottom: "0.75rem", color: "#555" }}>
          We focus on Los Angeles County and Glendale so we can respond quickly,
          coordinate with your contractor, and stay on top of local project
          requirements.
        </p>
        <p style={{ color: "#555" }}>
          Whether you&apos;re updating a single bathroom or planning a full
          remodel, our goal is to make your stonework the part of the project
          you don&apos;t have to worry about.
        </p>
      </section>
    </main>
  );
}
