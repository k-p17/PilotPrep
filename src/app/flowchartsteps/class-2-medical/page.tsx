export default function Page() {
  return (
    <div style={{ padding: '2rem', lineHeight: '1.8', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Class 2 Medical</h1>
      <p>
        Class 2 Medical is the first official step in your pilot training journey. It is conducted by a DGCA-approved doctor (AME).
        This examination ensures that you're medically fit to begin training.
      </p>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>Key Tests Include:</h2>
      <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc' }}>
        <li>Blood and urine tests</li>
        <li>ECG (heart check)</li>
        <li>X-Ray Chest</li>
        <li>EEG (brain activity test)</li>
        <li>Eye and ENT check-up</li>
      </ul>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>How to Apply:</h2>
      <ol style={{ paddingLeft: '1.2rem' }}>
        <li>Visit the <a href="https://www.dgca.gov.in" target="_blank">DGCA website</a> and locate the list of Class 2 Medical Examiners.</li>
        <li>Book an appointment with a nearby approved AME.</li>
        <li>Attend the medical test and receive the assessment report.</li>
      </ol>
      <p style={{ marginTop: '1.5rem' }}>
        After passing the Class 2 Medical, the AME uploads the result to the eGCA portal. You can then apply for your Computer Number.
      </p>
    </div>
  );
}
