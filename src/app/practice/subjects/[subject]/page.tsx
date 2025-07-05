'use client';
import './style.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';



// ✅ All common DGCA subjects with their sources
const subjectSources: Record<string, string[]> = {
  'air-navigation': ['pilotprep', 'pariksha'],
  'meteorology': ['pilotprep', 'pariksha'],
  'air-regulation': ['pilotprep', 'pariksha'],
  'technical-general': ['pilotprep', 'pariksha'],
  'aircraft-instruments': ['pilotprep', 'pariksha'],
  'airframes': ['pilotprep', 'pariksha'],
  'engines': ['pilotprep', 'pariksha'],
  'electrics': ['pilotprep', 'pariksha'],
  'radio-aids': ['pilotprep', 'pariksha'],
  'flight-planning': ['pilotprep', 'pariksha'],
};

export default function SubjectPage() {
  const params = useParams();
  const subject = params.subject as string;

  const sources = subjectSources[subject];

  if (!sources) {
    return (
      <div className="container">
        <h2>No sources available for this subject.</h2>
        <p>Check if the subject exists in <code>subjectSources</code>.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Select Source for <span style={{ textTransform: 'capitalize' }}>{subject.replace('-', ' ')}</span></h1>
      <ul className="options">
        {sources.map((source) => (
          <li key={source}>
            <Link href={`/practice/subjects/${subject}/${source}`}>
              <strong>{source.toUpperCase()}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
