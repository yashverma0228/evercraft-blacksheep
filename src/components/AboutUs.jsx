import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });


  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -150]);
  const receiptsY = useTransform(scrollYProgress, [0.2, 0.6], [100, -100]);
  const partnersY = useTransform(scrollYProgress, [0.5, 1], [100, -50]);

  const BouncyText = ({ text, className }) => {
    const letters = text.split('');
    return (

      <span className={className} style={{ perspective: '1000px', display: 'inline-block' }}>
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              damping: 12,
              stiffness: 100,
              delay: i * 0.02
            }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <section id="about" className="about-us" ref={containerRef}>
      { }
      <div className="about-hero">
        <video
          src="/projects/file.mp4 (1080p).mp4"
          autoPlay
          loop
          muted
          playsInline
          className="about-bg-video"
        />
        <div className="about-hero-content">
          <motion.h2
            style={{ y: heroY }}
            className="overflow-hidden"
          >
            <BouncyText text="WE MAKE CREATIVE. SIMPLE." />
          </motion.h2>
        </div>
      </div>

      { }
      <div className="about-receipts">
        <div className="receipts-header">
          <span className="plus">+</span>
          <span className="section-title">ABOUT US</span>
          <span className="plus">+</span>
        </div>
        <motion.div style={{ y: receiptsY }} className="receipts-grid">
          <div className="receipts-left">
            <h3 className="overflow-hidden">
              WE CREATE VISUAL STORIES THAT WORK
            </h3>
          </div>
          <div className="receipts-right">
            <p>
              At Evercraft Media, we help brands, event producers, and enterprise teams create consistent, high-quality visual content without the complexity of managing production in-house.
            </p>
            <p>
              Our approach combines creative storytelling with efficient production workflows. From live event coverage and brand photography to cinematic video content, we craft visuals that elevate your brand and connect with your audience.
            </p>
            <p>
              We specialize in scalable content production for organizations that need reliable creative support. Whether it's capturing live experiences, producing social-ready content, or developing polished brand visuals, our team ensures every piece aligns with your broader marketing strategy.
            </p>
            <p>
              Evercraft Media partners with hospitality brands, lifestyle companies, corporate teams, and event organizers who require dependable production and high-quality results. Many of our collaborations happen behind the scenes, but the goal remains the same — deliver visuals that perform across platforms and help brands grow.
            </p>
            <p>
              At our core, we believe great production should feel effortless. By blending creative direction, technical expertise, and seamless collaboration, we turn ideas into content that truly represents your brand.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="about-partners">
        <div className="partners-header receipts-header">
          <span className="plus">+</span>
          <span className="section-title">CLIENTS AND PARTNERS</span>
          <span className="plus">+</span>
        </div>
        <motion.div style={{ y: partnersY }} className="partners-content">
          <h2 className="overflow-hidden">
            <BouncyText text="BRANDS WHO" /><br />
            <BouncyText text="SWIPED RIGHT." />
          </h2>
          <div className="marquee">
            <div className="marquee-content">
              {[
                'ADIDAS.png.webp', 'AVIATION+GIN.png.webp', 'BELLAGIO.png.webp',
                'DISNEY+LOGO.png.webp', 'MOONGOAT.png.webp', 'NBIBS.png.webp',
                'Netflix-Brand-Logo.png.webp', 'Prime.png.webp', 'ROLLS+ROYCE.png.webp'
              ].map((logo, index) => (
                <img
                  key={index}
                  src={`/Brand-icons/${logo}`}
                  alt="Partner Brand"
                  className="partner-logo"
                />
              ))}
              { }
              {[
                'ADIDAS.png.webp', 'AVIATION+GIN.png.webp', 'BELLAGIO.png.webp',
                'DISNEY+LOGO.png.webp', 'MOONGOAT.png.webp', 'NBIBS.png.webp',
                'Netflix-Brand-Logo.png.webp', 'Prime.png.webp', 'ROLLS+ROYCE.png.webp'
              ].map((logo, index) => (
                <img
                  key={`clone-${index}`}
                  src={`/Brand-icons/${logo}`}
                  alt="Partner Brand"
                  className="partner-logo"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
