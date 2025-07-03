'use client';
export default function FlowchartPage() {
  const steps = [
    { title: "Class 2 Medical", slug: "class-2-medical", color: "#fde68a" },
    { title: "Class 1 Medical", slug: "class-1-medical", color: "#fca5a5" },
    { title: "Computer Number", slug: "computer-number", color: "#a5b4fc" },
    { title: "CPL Ground Classes", slug: "cpl-ground-classes", color: "#6ee7b7" },
    { title: "DGCA Exams", slug: "dgca-exams", color: "#f9a8d4" },
    { title: "RTR Exam", slug: "rtr-exam", color: "#93c5fd" },
    { title: "Flight Training", slug: "flight-training", color: "#fdba74" },
    { title: "CPL License", slug: "cpl-license", color: "#c4b5fd" },
    { title: "Airline Preparation", slug: "airline-preparation", color: "#fcd34d" },
    { title: "Airline Job", slug: "airline-job", color: "#34d399" },
  ];

  return (
    <div style={{
      maxWidth: "700px",
      margin: "auto",
      padding: "2rem"
    }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "2rem"
      }}>
        Pilot Training Flowchart
      </h1>

      <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
        {/* vertical line */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "1rem",
          width: "2px",
          height: "100%",
          backgroundColor: "#d1d5db"
        }}></div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {steps.map((step, index) => (
            <div key={step.slug} style={{ position: "relative", display: "flex", alignItems: "center", gap: "1rem" }}>
              {/* dot on the line */}
              <div style={{
                position: "absolute",
                left: "-1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                backgroundColor: "#4b5563",
                border: "3px solid white",
                boxShadow: "0 0 0 2px #d1d5db"
              }}></div>

              {/* step box */}
              <a href={`/flowchartsteps/${step.slug}`} style={{
                backgroundColor: step.color,
                padding: "1.2rem 1.6rem",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                color: "#111827",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                display: "inline-block",
                transition: "transform 0.2s ease"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span style={{ fontWeight: "bold", marginRight: "0.5rem" }}>{index + 1}.</span>🔗 {step.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
