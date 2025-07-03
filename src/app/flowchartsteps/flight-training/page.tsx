'use client';

import React from 'react';

export default function FlightTrainingPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1D4ED8' }}>
        Flight Training
      </h1>
      <p style={{ marginTop: '1rem' }}>
        Flight training is the core part of becoming a commercial pilot. After clearing your DGCA exams and medicals, you will begin your flying training.
      </p>
      <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', listStyle: 'disc' }}>
        <li>You need to complete at least 200 hours of flying for CPL.</li>
        <li>Flight training includes dual flights, solo flights, cross-country, night flying, and instrument flying.</li>
        <li>You can train in India or abroad (like South Africa, USA, etc.).</li>
        <li>Ensure your training institute is DGCA-approved if training outside India.</li>
        <li>Logging hours in your pilot logbook is critical.</li>
      </ul>
    </div>
  );
}
