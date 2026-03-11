import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './WorkSection.css';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });










  const y = useTransform(scrollYProgress, [0, 1], [100 * (index + 1), -100 * (index + 1)]);

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.play().catch(err => console.log("Video play failed:", err));
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="work-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      style={{ y }}
    >
      <div className="work-image-wrapper">
        <img src={project.image} alt={project.title} className="work-static-img" />
        <div className="video-window-overlay">
          <video
            src={project.video}
            loop
            muted
            playsInline
            className="work-video-window"
          />
          <div className="play-button">
            <div className="play-icon"></div>
          </div>
        </div>
      </div>
      <div className="work-info">
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: 'HAGGAR',
      subtitle: 'Hidden Seams',
      image: '/projects/haggar.avif',
      video: '/projects/haggar.mp4'
    },
    {
      id: 2,
      title: 'ALZINCOLOR',
      subtitle: 'Raise the Volume',
      image: '/projects/alzincolor.png',
      video: '/projects/alzincolor.mp4'
    },
    {
      id: 3,
      title: 'DORITOS',
      subtitle: 'Big Dip Energy',
      image: '/projects/68af54dba66dde590ec8563a_2-DORITOS-Big_Dip_Energy.avif',
      video: '/projects/file-3.mp4'
    },
    {
      id: 4,
      title: 'PRIMITIVE FLOW',
      subtitle: 'Raw Motion',
      image: '/projects/primitive.avif',
      video: '/projects/file.mp4 (1080p).mp4'
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
    <section id="work" className="work-section">
      <div className="work-header">
        <span className="plus">+</span>
        <span className="section-title">WORK</span>
        <span className="plus">+</span>
      </div>
      <div className="work-intro">
        <h2 className="overflow-hidden">
          <BouncyText text="WE LISTEN." /><br />
          <BouncyText text="WE CRAFT." /><br />
          <BouncyText text="WE DELIVER." />
        </h2>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
