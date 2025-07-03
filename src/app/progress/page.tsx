// src/app/progress/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Attempt {
  subject: string;
  testId: string;
  score: number;
  total: number;
  timestamp: string;
}

const ProgressPage = () => {
  const [attempts, setAttempts] = useState<Attempt[]>([]);

  useEffect(() => {
    const progress = localStorage.getItem('mockTestProgress');
    if (progress) {
      setAttempts(JSON.parse(progress));
    }
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Your Test Progress</h1>
      {attempts.length === 0 ? (
        <p>No test attempts yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Test ID</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((a, i) => (
              <tr key={i}>
                <td>{a.subject}</td>
                <td>{a.testId}</td>
                <td>
                  {a.score} / {a.total}
                </td>
                <td>{new Date(a.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link href="/" style={{ marginTop: '2rem', display: 'inline-block' }}>⬅ Back to Home</Link>
    </div>
  );
};

export default ProgressPage;
