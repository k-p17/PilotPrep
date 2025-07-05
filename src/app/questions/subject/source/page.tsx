'use client';

import { useParams } from 'next/navigation';
import questionsData from '@/src/data/questions'; // Adjust path if needed
import '../../../../styles/questions.css';
export default function SubjectSourceQuestionsPage() {
  const params = useParams();
  const subject = params.subject as string;
  const source = params.source as string;
  const key = `${subject}-${source}`;

  const questions = questionsData[key];

  if (!questions || questions.length === 0) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>No questions found for {subject} ({source})</h1>
        <p>Please check back later or select a different source.</p>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>Questions: {subject.toUpperCase()} ({source.toUpperCase()})</h1>
      {questions.map((q, index) => (
        <div key={index} className="question-block">
          <div className="question">
            {index + 1}. {q.question}
          </div>
          <ul className="options">
            {q.options.map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
