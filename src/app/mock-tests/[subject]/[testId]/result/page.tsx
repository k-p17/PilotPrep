'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ResultPage = () => {
  const router = useRouter();
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('latestMockTestResult');
    if (stored) {
      setResult(JSON.parse(stored));
    } else {
      console.warn('No result found in localStorage');
    }
  }, []);

  if (!result) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>No Result Found</h2>
        <p>Please attempt a mock test first.</p>
        <button
          onClick={() => router.push('/')}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
          }}
        >
          ⬅ Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mock Test Result</h1>
      <p><strong>Subject:</strong> {result.subject}</p>
      <p><strong>Test ID:</strong> {result.testId}</p>
      <p><strong>Date:</strong> {new Date(result.date).toLocaleString()}</p>
      <p><strong>Time Taken:</strong> {Math.floor(result.timeTaken / 60)} mins {result.timeTaken % 60} secs</p>
      <p><strong>Score:</strong> {result.score} / {result.total}</p>

      <h2 style={{ marginTop: '30px' }}>Review Answers:</h2>
      {result.questions.map((q: any, i: number) => (
        <div key={q.id} style={{ marginBottom: '20px' }}>
          <p><strong>Q{i + 1}:</strong> {q.question}</p>
          {q.options.map((opt: string, j: number) => {
            const isCorrect = j === q.correctAnswer;
            const isSelected = j === result.selectedAnswers[i];
            const color = isCorrect ? 'green' : isSelected ? 'red' : 'black';
            return (
              <p key={j} style={{ marginLeft: '20px', color }}>
                {isSelected ? '👉 ' : ''}{opt} {isCorrect ? '✔' : ''}
              </p>
            );
          })}
        </div>
      ))}

      <button
        onClick={() => router.push('/')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
        }}
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default ResultPage;
