'use client';

import { useParams } from 'next/navigation';

export default function MCQPage() {
  const params = useParams();
  const subject = params?.subject as string;
  const source = params?.source as string;

  // ✅ Question Bank
  const questionsData: {
    [key: string]: {
      question: string;
      options: string[];
      answer: string;
    }[];
  } = {
    // Air Navigation
    'air-navigation-pilotprep': [
      {
        question: 'What is the ICAO definition of VMC?',
        options: [
          'Visual Meteorological Conditions',
          'Visual Motion Control',
          'Very Minimum Climb',
          'Vertical Meteorological Condition',
        ],
        answer: 'Visual Meteorological Conditions',
      },
      {
        question: 'What is the shortest distance between two points on Earth?',
        options: ['Straight line', 'Great circle', 'Rhumb line', 'Meridian'],
        answer: 'Great circle',
      },
    ],
    'air-navigation-pariksha': [
      {
        question: 'How many degrees are in a nautical mile?',
        options: ['1°', '1.15°', '60°', 'None of the above'],
        answer: '1°',
      },
    ],

    // Meteorology
    'meteorology-pilotprep': [
      {
        question: 'What causes thunderstorms?',
        options: ['Cold front', 'Warm front', 'Inversion', 'Stratosphere'],
        answer: 'Cold front',
      },
    ],
    'meteorology-pariksha': [
      {
        question: 'What does a METAR report include?',
        options: ['Wind, Visibility, Weather', 'Runway Length', 'Fuel Status', 'Flight Plan'],
        answer: 'Wind, Visibility, Weather',
      },
    ],
  };

  const key = `${subject}-${source}`;
  const questions = questionsData[key];

  if (!questions || questions.length === 0) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>No questions available for <strong>{subject}</strong> ({source})</h2>
        <p>Check if your URL is correct.</p>
        <p>Looking for key: <code>{key}</code></p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Practice MCQs - {subject.toUpperCase()} ({source})</h1>
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <p><strong>{index + 1}.</strong> {q.question}</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {q.options.map((option, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>
                <input type="radio" id={`${index}-${i}`} name={`q-${index}`} />
                <label htmlFor={`${index}-${i}`} style={{ marginLeft: '0.5rem' }}>
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
