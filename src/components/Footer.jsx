import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer-site">
      <div className="footer-top">
        <div className="footer-vision">
          <h2>Got a vision? We've got<br />caffeine and emotional<br />availability.</h2>
        </div>
        <div className="footer-nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          { }
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <span className="col-label">OUR ADDRESS</span>
          <p>
            LA
          </p>
        </div>
        <div className="footer-col">
          <span className="col-label">GET IN TOUCH</span>
          <p>
            <a href="mailto:info@evercraftmedia.com">cody@evercraft.media</a><br />
            <a href="tel:9728697778">972.869.7778</a>
          </p>
        </div>
        <div className="footer-col">
          <span className="col-label">SOCIALS</span>
          <p>
            <a href="#">Instagram</a><br />
            <a href="#">Vimeo</a><br />
            <a href="#">Facebook</a><br />
            <a href="#">LinkedIn</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© EVERCRAFT MEDIA, 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
