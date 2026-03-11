import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import logo from '../assets/logo.png';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'work', 'services', 'about'];
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <div className="nav-links-vertical">
            <a href="#home" className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>HOME</a>
            <a href="#work" className={`nav-item ${activeSection === 'work' ? 'active' : ''}`}>WORK</a>
            <a href="#services" className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}>SERVICES</a>
            <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>ABOUT</a>
          </div>
        </div>

        <div className="nav-center">
          <a href="#home" className="brand-logo">
            <img src={logo} alt="Evercraft Media" className="brand-logo-img" />
          </a>
        </div>

        <div className="nav-right">
          <div className="nav-actions">
            <button className="nav-btn-action">LET'S TALK</button>
            <button className="nav-btn-action menu-trigger" onClick={() => setIsMenuOpen(true)}>MENU</button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navigation;
