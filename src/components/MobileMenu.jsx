import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MobileMenu.css';

const AnimatedLink = ({ title, delay, onClick }) => {
  const letters = title.split('');

  return (
    <div className="menu-link-wrapper" onClick={onClick}>
      <motion.div
        className="menu-link"
        initial="initial"
        whileHover="hover"
        whileTap="hover"
      >
        {letters.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hover: { y: '-100%' }
            }}
            transition={{
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
              delay: i * 0.02
            }}
            className="letter-container"
          >
            <span className="letter-top">{char === ' ' ? '\u00A0' : char}</span>
            <span className="letter-bottom">{char === ' ' ? '\u00A0' : char}</span>
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="menu-header">
            {}
            <div className="menu-header-right">
              {}
              <button className="nav-btn close-btn" onClick={onClose}>CLOSE</button>
            </div>
          </div>

          <div className="menu-links-container">
            <AnimatedLink title="HOME" onClick={() => { window.location.hash = 'home'; onClose(); }} />
            <AnimatedLink title="WORK" onClick={() => { window.location.hash = 'work'; onClose(); }} />
            <AnimatedLink title="SERVICES" onClick={() => { window.location.hash = 'services'; onClose(); }} />
            <AnimatedLink title="ABOUT" onClick={() => { window.location.hash = 'about'; onClose(); }} />
            <AnimatedLink title="CONTACT" onClick={() => { window.location.hash = 'footer'; onClose(); }} />
          </div>

          <div className="menu-footer">
            <div className="menu-socials">
              <span>SOCIALS:</span>
              <a href="#">INSTAGRAM</a>
              <a href="#">VIMEO</a>
              <a href="#">LINKEDIN</a>
              <a href="#">FACEBOOK</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
