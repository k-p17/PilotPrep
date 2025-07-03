'use client';

import React from 'react';

export default function CplLicensePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#DC2626' }}>
        CPL License Issuance
      </h1>
      <p style={{ marginTop: '1rem' }}>
        After successfully completing your flight training and passing all required DGCA exams, you can apply for the issuance of your Commercial Pilot License (CPL).
      </p>
      <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', listStyle: 'disc' }}>
        <li>Make sure all your flying hours are properly logged and verified.</li>
        <li>Submit required documents through eGCA.</li>
        <li>DGCA will verify your documents, flying records, and exam results.</li>
        <li>Once approved, your CPL will be issued digitally on eGCA.</li>
      </ul>
    </div>
  );
}
