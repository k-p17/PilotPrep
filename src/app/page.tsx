'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';


const gridItems = [
  {
    href: '/questions',
    icon: '📘',
    title: 'DGCA Exam MCQ Practice',
    description: 'Explore DGCA Exam MCQ Practice in detail',
  },
  {
    href: '/flowchart',
    icon: '🧑‍✈️',
    title: 'Pilot Training Flowchart',
    description: 'Explore Pilot Training Flowchart in detail',
  },
  {
    href: '/mock-tests',
    icon: '📝',
    title: 'Mock Test Practice',
    description: 'Explore Mock Test Practice in detail',
  },
  {
    href: '/practice',
    icon: '📚',
    title: 'Subject-wise Questions',
    description: 'Practice step-wise questions and concepts',
  },
  {
    href: '/progress',
    icon: '📊',
    title: 'Your Progress',
    description: 'Track your subject-wise preparation',
  },
  {
    href: '/resources',
    icon: '📖',
    title: 'Resources & Books',
    description: 'Explore important books & guides',
  },
  {
    href: '/contact',
    icon: '📞',
    title: 'Contact & Help',
    description: 'Get help and connect with us',
  },
];

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>PilotPrep – DGCA CPL Preparation</h1>
        <p className={styles.description}>
          This platform helps aspiring pilots prepare for DGCA CPL exams with MCQs, mock tests, and a complete training roadmap.
        </p>
      </div>

      <div className={styles.grid}>
        {gridItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={item.href} className={styles.card}>
              <h2 className={styles.cardTitle}>
                {item.icon} {item.title}
              </h2>
              <p className={styles.cardText}>{item.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
<Footer />

      {/* Background visual graphic */}
      <div className={styles['background-graphic']} />
    </main>
  );
}
