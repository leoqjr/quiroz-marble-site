export default function ServicesPage() {
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
        Custom Stone Fabrication &amp; Installation Services
      </h1>
      <p style={{ marginBottom: "1.5rem", color: "#555" }}>
        Quiroz Marble &amp; Granite provides full-service fabrication and
        installation of marble, granite, and quartz surfaces for residential and
        light commercial projects across Los Angeles County and Glendale.
      </p>

      {/* Kitchen Countertops */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
          Kitchen Countertops
        </h2>
        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "1.5rem",
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          <li>Custom layouts for islands, peninsulas, and waterfall edges.</li>
          <li>Undermount sink and cooktop cutouts included.</li>
          <li>
            Options for marble, granite, and quartz in popular colors and
            finishes.
          </li>
        </ul>
      </section>

      {/* Bathrooms */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
          Bathroom Vanities, Showers &amp; Tub Surrounds
        </h2>
        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "1.5rem",
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          <li>Single and double vanities with backsplash and side splashes.</li>
          <li>Stone shower walls, niches, and benches.</li>
          <li>
            Easy-to-clean, sealed surfaces designed for moisture-heavy spaces.
          </li>
        </ul>
      </section>

      {/* Fireplaces */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
          Fireplaces &amp; Feature Walls
        </h2>
        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "1.5rem",
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          <li>
            Modern slabs or traditional surrounds in granite, marble, or quartz.
          </li>
          <li>TV wall and media unit cladding for a built-in look.</li>
          <li>Heat-resistant materials suited for fireplaces and stoves.</li>
        </ul>
      </section>

      {/* Outdoor */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
          Outdoor Kitchens &amp; BBQs
        </h2>
        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "1.5rem",
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          <li>Countertops for BBQ islands, bars, and prep areas.</li>
          <li>Materials selected for outdoor UV and weather exposure.</li>
          <li>Coordinated surfaces that match your patio and hardscape.</li>
        </ul>
      </section>

      {/* Commercial */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
          Commercial &amp; Multifamily Projects
        </h2>
        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "1.5rem",
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          <li>Reception desks, conference tables, and lobby surfaces.</li>
          <li>Unit kitchens and baths for multifamily developments.</li>
          <li>Flexible scheduling to work around active job sites.</li>
        </ul>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          padding: "1.5rem",
          borderRadius: "8px",
          backgroundColor: "#e9dfcf",
          border: "1px solid #d1c4af",
        }}
      >
        <p style={{ marginBottom: "0.8rem", color: "#444" }}>
          Not sure which material or service you need? Tell us about your
          project and we&apos;ll recommend options that fit your budget and
          timeline.
        </p>
        <button
          style={{
            padding: "0.8rem 1.6rem",
            backgroundColor: "#b98b3f",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Schedule a Consultation
        </button>
      </section>
    </main>
  );
}
