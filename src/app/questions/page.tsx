'use client';

import Link from 'next/link';

const subjects = [
  { slug: 'air-regulations', label: 'Air Regulations' },
  { slug: 'air-navigation', label: 'Air Navigation' },
  { slug: 'meteorology', label: 'Meteorology' },
  { slug: 'technical-general', label: 'Technical General' },
];

export default function QuestionsPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>DGCA Exam MCQ Practice</h1>
      <p>Select a subject to start practicing real MCQs from DGCA exams:</p>

      <ul style={{ marginTop: '1.5rem' }}>
        {subjects.map((subject) => (
          <li key={subject.slug} style={{ marginBottom: '1rem' }}>
            <Link href={`/questions/${subject.slug}`}>
              {subject.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
