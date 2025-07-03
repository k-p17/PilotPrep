import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>✈️ PilotPrep</div>

        <nav className={styles.links}>
          <Link href="/questions">MCQs</Link>
          <Link href="/mock-tests">Mock Tests</Link>
          <Link href="/flowchart">Flowchart</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <p className={styles.copy}>© {new Date().getFullYear()} PilotPrep. All rights reserved.</p>
      </div>
    </footer>
  );
}
