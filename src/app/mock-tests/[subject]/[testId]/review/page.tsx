// app/mock-tests/[subject]/[testId]/review/page.tsx
'use client'

import { useSearchParams } from 'next/navigation';

export default function ReviewPage() {
  const searchParams = useSearchParams();

  const questions = JSON.parse(searchParams.get('questions') || '[]');
  const userAnswers = JSON.parse(searchParams.get('answers') || '[]');

  return (
    <div>
      <h1>Review Answers</h1>
      {questions.map((q: any, index: number) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.answer;

        return (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <p><strong>Q{index + 1}:</strong> {q.question}</p>
            <ul>
              {q.options.map((opt: string, i: number) => {
                const isUserSelected = userAnswer === i;
                const isCorrectAnswer = q.answer === i;

                return (
                  <li
                    key={i}
                    style={{
                      backgroundColor: isCorrectAnswer
                        ? 'lightgreen'
                        : isUserSelected
                        ? 'salmon'
                        : 'transparent',
                      fontWeight: isCorrectAnswer || isUserSelected ? 'bold' : 'normal',
                    }}
                  >
                    {opt} {isCorrectAnswer ? '✓' : isUserSelected ? '✗' : ''}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
