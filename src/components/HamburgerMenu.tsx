'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/header.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#hamburger-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <div id="hamburger-menu" className="hamburger-menu">
      <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </div>

      {isOpen && (
        <div className="menu-popup">
          {[
            { name: 'Home', path: '/' },
            { name: 'Flowchart', path: '/flowchart' },
            { name: 'MCQ Practice', path: '/questions' },
            { name: 'Mock Tests', path: '/mock-tests' },
            { name: 'Resources', path: '/resources' },
            { name: 'Contact', path: '/contact' },
          ].map(link => (
            <div
              key={link.path}
              className="menu-item"
              onClick={() => handleNavigation(link.path)}
            >
              {link.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
