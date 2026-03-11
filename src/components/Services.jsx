import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';

const ServiceCard = ({ number, title, description, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div 
      ref={cardRef}
      className="service-card"
      style={{ zIndex: index + 1 }}
    >
      <motion.div 
        className="service-card-inner"
        style={{ y }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      >
        <div className="service-left">
          <span className="service-number">{number}</span>
          <h3 className="service-title">{title}</h3>
        </div>
        <div className="service-right">
          <p className="service-desc">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const KineticMarquee = () => {
  const marqueeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"]
  });

  
  const xMovement = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const images = [
    { src: '/projects/alzincolor.png', title: 'GOODWILL', sub: 'AI Experiment' },
    { src: '/projects/primitive.avif', title: 'UBER EATS', sub: 'AI Experiment' },
    { src: '/projects/haggar.avif', title: 'ESPN', sub: 'AI Experiment' },
    { src: '/projects/alzincolor.png', title: 'GOODWILL', sub: 'AI Experiment' },
    { src: '/projects/primitive.avif', title: 'UBER EATS', sub: 'AI Experiment' },
  ];

  return (
    <div ref={marqueeRef} className="kinetic-marquee-container">
      <motion.div style={{ x: xMovement }} className="kinetic-marquee-content">
        {images.map((img, i) => (
          <div key={i} className="kinetic-item">
            <div className="kinetic-img-wrapper">
              <img src={img.src} alt={img.title} />
            </div>
            <div className="kinetic-caption">
              <h4>{img.title}</h4>
              <p>{img.sub}</p>
            </div>
          </div>
        ))}
        {}
        {images.map((img, i) => (
          <div key={`copy-${i}`} className="kinetic-item">
            <div className="kinetic-img-wrapper">
              <img src={img.src} alt={img.title} />
            </div>
            <div className="kinetic-caption">
              <h4>{img.title}</h4>
              <p>{img.sub}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Services() {
  const services = [
    
    {
      number: "01",
      title: "PRE-PRODUCTION",
      description: "We're the dreamers who draw the map and the drill sergeants who make sure you never get lost. From the first spark of an idea to casting, locations, and logistics, we turn pre-production into an art form. The result? A shoot that feels effortless because the groundwork was anything but."
    },
    {
      number: "02",
      title: "PRODUCTION",
      description: "Lights, camera, and the relentless pursuit of the perfect shot. We bring top-tier equipment and a crew that works like a single organism to capture high-impact visuals. Whether on location or in a studio, we ensure every frame tells a compelling story with cinematic precision."
    },
    {
      number: "03",
      title: "POST-PRODUCTION",
      description: "This is where the magic comes together. Through precision editing, color grading, and sound design, we polish the raw footage into a masterpiece. Our post-production team breathes life into the vision, ensuring the final deliverable exceeds expectations on every platform."
    },
    {
      number: "04",
      title: "AI IN MOTION",
      description: "The soul of the story still comes from human hands, lived experience, and creative instinct. By exploring the edges of AI, we're learning how to expand possibility without losing authenticity. AI isn't just a tool; it's a co-conspirator in our creative process."
    }
  ];

  const BouncyText = ({ text, className }) => {
    const characters = text.split('');
    return (
      <span className={className} style={{ display: 'inline-block', overflow: 'hidden' }}>
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
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
    <section id="services" className="services-section">
      {}
      <div className="services-intro">
        <h2 className="overflow-hidden">
          <BouncyText text="STYLISH PRODUCTION." /><br />
          <BouncyText text="SEAMLESS EXECUTION." />
        </h2>
      </div>

      {}
      <div className="section-label-bar">
        <span className="plus">+</span>
        <span className="label-text">SERVICES</span>
        <span className="plus">+</span>
      </div>

      {}
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>

      {}
      <KineticMarquee />
    </section>
  );
}
