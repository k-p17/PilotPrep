'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const mockTests: Record<string, string[]> = {
  'air-navigation': ['test-1', 'test-2'],
  'meteorology': ['test-1'],
  'air-regulations': ['test-1'],
  'technical-general': ['test-1'],
  'rtr': ['test-1'],
};

export default function SubjectMockTests() {
  const params = useParams();
  const subject = params.subject as string;

  const tests = mockTests[subject] || [];

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Mock Tests for {subject?.toUpperCase()}</h1>
      <ul>
        {tests.map((testId: string) => (
          <li key={testId}>
            <Link href={`/mock-tests/${subject}/${testId}`}>
              {testId.replace('-', ' ').toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
