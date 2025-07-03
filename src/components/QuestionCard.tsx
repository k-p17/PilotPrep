'use client';

type QuestionCardProps = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export default function QuestionCard({
  question,
  options,
  correctAnswer,
}: QuestionCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{question}</p>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {options.map((option, idx) => (
          <li key={idx}>
            <label>
              <input
                type="radio"
                name={question}
                value={option}
                style={{ marginRight: '0.5rem' }}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
