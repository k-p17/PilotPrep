'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const subjectSources: Record<string, string[]> = {
  'air-regulations': ['pilotprep', 'pariksha'],
  'air-navigation': ['pilotprep', 'pariksha'],
  meteorology: ['pilotprep', 'pariksha'],
  'technical-general': ['pilotprep', 'pariksha'],
};

export default function SubjectQuestionsPage() {
  const params = useParams();
  const subject = params.subject as string;

  const sources = subjectSources[subject];

  if (!sources) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>No sources found for "{subject}"</h1>
        <p>Please check if the subject name is correct.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Choose Source for: {subject.toUpperCase()}</h1>
      <ul>
        {sources.map((source) => (
          <li key={source}>
            <Link href={`/questions/${subject}/${source}`}>
              {source.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
