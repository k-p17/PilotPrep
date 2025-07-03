'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const MockTestPage = () => {
  const { subject, testId } = useParams();
  const router = useRouter();

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is the height of the troposphere at the equator?',
      options: ['7 km', '11 km', '17 km', '21 km'],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: 'Which instrument measures atmospheric pressure?',
      options: ['Thermometer', 'Barometer', 'Altimeter', 'Aneroid'],
      correctAnswer: 1,
    },
  ]);

  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit(); // Auto-submit
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time
  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (qIndex: number, optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[qIndex] = optionIndex;
    setSelectedAnswers(updated);
  };

  const handleSubmit = () => {
    const score = questions.reduce((total, q, i) => {
      return selectedAnswers[i] === q.correctAnswer ? total + 1 : total;
    }, 0);

    // Store data for review
    const attemptData = {
      subject,
      testId,
      questions,
      selectedAnswers,
      score,
      total: questions.length,
      timeTaken: 30 * 60 - timeLeft,
      date: new Date().toISOString(),
    };

    localStorage.setItem('latestMockTestResult', JSON.stringify(attemptData));

    // Navigate to result page
    router.push(`/mock-tests/${subject}/${testId}/result`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mock Test: {subject}</h1>

      <div style={{ marginBottom: '20px', fontSize: '18px', color: 'red' }}>
        ⏱ Time Left: {formatTime(timeLeft)}
      </div>

      {questions.map((q, i) => (
        <div key={q.id} style={{ marginBottom: '20px' }}>
          <p><strong>Q{i + 1}:</strong> {q.question}</p>
          {q.options.map((opt, j) => (
            <label key={j} style={{ display: 'block', marginLeft: '20px' }}>
              <input
                type="radio"
                name={`q-${i}`}
                checked={selectedAnswers[i] === j}
                onChange={() => handleOptionSelect(i, j)}
              />{' '}
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontWeight: 'bold',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          marginRight: '10px',
        }}
      >
        Submit Test
      </button>

      <button
        onClick={() => router.push('/')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontWeight: 'bold',
          backgroundColor: '#ccc',
          color: '#000',
          border: 'none',
          borderRadius: '6px',
        }}
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default MockTestPage;
