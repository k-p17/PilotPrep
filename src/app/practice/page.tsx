'use client';

import Link from 'next/link';

const subjects = [
  { slug: 'air-regulation', label: 'Air Regulation' },
  { slug: 'air-navigation', label: 'Navigation' },
  { slug: 'meteorology', label: 'Meteorology' },
  { slug: 'technical-general', label: 'Technical General' },
  { slug: 'aircraft-instruments', label: 'Aircraft Instruments' },
  { slug: 'airframes', label: 'Airframes' },
  { slug: 'engines', label: 'Engines' },
  { slug: 'electrics', label: 'Electrics' },
  { slug: 'radio-aids', label: 'Radio Aids' },
  { slug: 'flight-planning', label: 'Flight Planning' },
  { slug: 'rtr', label: 'RTR(A)' },
];

export default function PracticePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Subject-wise Practice</h1>
      <p>Select a topic or subject to start targeted practice questions and review answers.</p>
      <ul style={{ marginTop: '1.5rem' }}>
        {subjects.map((subject, index) => (
          <li key={index} style={{ marginBottom: '0.8rem' }}>
            <Link href={`/practice/subjects/${subject.slug}`}>
              {subject.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
