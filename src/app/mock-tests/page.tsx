'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const subjects = [
  { id: 'air-navigation', name: 'Air Navigation' },
  { id: 'meteorology', name: 'Meteorology' },
  { id: 'technical-general', name: 'Technical General' },
  { id: 'air-regulations', name: 'Air Regulations' },
  // Add more subjects as needed
]

export default function MockTestsPage() {
  const router = useRouter()

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Mock Tests</h1>
      <p>Select a subject to start a mock test:</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {subjects.map(subject => (
          <li key={subject.id} style={{ marginBottom: '1rem' }}>
            <Link
              href={`/mock-tests/${subject.id}`}
              style={{
                textDecoration: 'none',
                padding: '0.75rem 1rem',
                backgroundColor: '#0070f3',
                color: 'white',
                borderRadius: '6px',
                display: 'inline-block'
              }}
            >
              {subject.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Back to Home Button */}
      <div style={{ marginTop: '3rem' }}>
        <button
          onClick={() => router.push('/')}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  )
}
