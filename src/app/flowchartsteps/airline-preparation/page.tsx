'use client';

import React from 'react';

export default function AirlinePreparationPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16A34A' }}>
        Airline Preparation
      </h1>
      <p style={{ marginTop: '1rem' }}>
        After obtaining your CPL, the next step is to prepare for airline selections. This includes simulator checks, aptitude tests, psychometry, group discussions, and interviews.
      </p>
      <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', listStyle: 'disc' }}>
        <li>Join a reputed airline prep institute or study independently with proper material.</li>
        <li>Practice aptitude, numerical reasoning, and personality tests (like COMPASS or PILAPT).</li>
        <li>Improve your simulator flying skills for airline-specific scenarios.</li>
        <li>Prepare for technical and HR interview questions.</li>
        <li>Stay updated on airline hiring announcements and apply accordingly.</li>
      </ul>
    </div>
  );
}
