'use client';

import Link from 'next/link';

// ✅ Full list of DGCA CPL theory subjects
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

export default function SubjectsPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Select a Subject</h1>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            <Link href={`/practice/subjects/${subject.slug}`}>
              {subject.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
