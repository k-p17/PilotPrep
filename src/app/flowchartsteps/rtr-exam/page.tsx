'use client';

import React from 'react';

export default function RTRExamPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1E40AF' }}>
        RTR(A) Exam
      </h1>
      <p style={{ marginTop: '1rem' }}>
        The RTR(A) – Radio Telephony Restricted (Aeronautical) – is a mandatory license for pilots in India.
      </p>
      <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', listStyle: 'disc' }}>
        <li>It consists of two parts: Part 1 (practical and oral) and Part 2 (regulatory knowledge).</li>
        <li>Conducted by WPC (Wireless Planning & Coordination) in coordination with DGCA.</li>
        <li>You must pass both parts to be eligible for flying in Indian airspace.</li>
        <li>Preparation includes learning RT phraseology and rules related to Indian communication systems.</li>
      </ul>
    </div>
  );
}
