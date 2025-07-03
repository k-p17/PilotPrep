'use client';

import React from 'react';

export default function DGCAExamsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1E40AF' }}>
        DGCA Exams
      </h1>
      <p style={{ marginTop: '1rem' }}>
        After completing your CPL Ground Classes, you need to pass DGCA exams in the following subjects:
      </p>
      <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', listStyle: 'disc' }}>
        <li>Air Navigation</li>
        <li>Air Regulation</li>
        <li>Meteorology</li>
        <li>Technical General</li>
        <li>Technical Specific (aircraft-specific)</li>
      </ul>
      <p style={{ marginTop: '1rem' }}>
        These exams are conducted online by DGCA, usually every 2-3 months. You can register via the Pariksha portal.
      </p>
    </div>
  );
}
