'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import '../styles/header.css';
import DarkModeToggle from './DarkModeToggle';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      {/* Left: Menu Button */}
      <div className="header-left">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Center: Title */}
      <div className="header-center">
        <h1 className="site-title">PilotPrep</h1>
      </div>

      {/* Right (optional) */}
      <div className="header-right"></div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="menu" ref={menuRef}>
          <Link href="/" className="menu-item" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/flowchart" className="menu-item" onClick={() => setMenuOpen(false)}>Flowchart</Link>
          <Link href="/mock-tests" className="menu-item" onClick={() => setMenuOpen(false)}>Mock Tests</Link>
          <Link href="/practice" className="menu-item" onClick={() => setMenuOpen(false)}>Practice</Link>
          <Link href="/contact" className="menu-item" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
