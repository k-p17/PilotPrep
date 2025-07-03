import './globals.css';
import '../styles/header.css';
import '../styles/floatingButton.css';
import Header from '../components/Header';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PilotPrep - DGCA Exam Prep',
  description: 'MCQs, subject-wise tests, and more for aspiring pilots',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Header />

          <main>{children}</main>

          {/* Floating Help Button */}
          <Link href="/contact">
            <button className="floating-button">Help</button>
          </Link>
        </div>
      </body>
    </html>
  );
}
