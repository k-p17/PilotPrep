export default function ComputerNumberPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1E40AF" }}>
        Computer Number
      </h1>
      <p style={{ marginTop: "1rem" }}>
        To appear for DGCA exams, you need a computer number issued by DGCA. It acts like a roll number.
      </p>
      <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", listStyle: "disc" }}>
        <li>Apply through the Pariksha DGCA portal.</li>
        <li>Submit scanned documents (Class 10/12 mark sheets, passport, etc.).</li>
        <li>Verify your documents at the nearest Chief Flying Instructor (CFI) or DGCA office.</li>
        <li>Track status through the portal. Approval may take a few weeks.</li>
        <li>Once issued, use this number to register for DGCA theory exams.</li>
      </ul>
    </div>
  );
}
