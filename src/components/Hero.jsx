import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import firstImage from '../assets/firstImage.jpeg';
import secondImage from '../assets/secondImage.jpeg';
import thirdImage from '../assets/thirdImage.jpeg';
// all the featurs imags and bg will be here ...
const featuresData = [
  {
    title: "Primitive",
    text: "Capturing the raw essence of movement and nature through flora.",
    img: firstImage,
    cardImg: firstImage,
    boxColor: "#303036ff"
  },
  {
    title: "Doritos",
    text: "Energy and crunch brought to life through vibrant visual design.",
    img: secondImage,
    cardImg: secondImage,
    boxColor: "#d35400"
  },
  {
    title: "Alzincolor",
    text: "Vibrant color palettes meets minimalist structural design.",
    img: thirdImage,
    cardImg: thirdImage,
    boxColor: "#303036ff"

  },
  {
    title: "Haggar",
    text: "Minimalist approach to cinematic storytelling and fashion presentation.",
    img: "/projects/68af54d6c1542bd99dc4a6a5_1-HAGGAR-Hidden_Seams.avif",
    cardImg: "/projects/68af54d6c1542bd99dc4a6a5_1-HAGGAR-Hidden_Seams.avif",
    boxColor: "#a03030"
  }

];

const NomineeSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });



  const x = useTransform(scrollYProgress, [0.15, 1], ["0vw", "-375vw"]);



  const cardOp1 = useTransform(scrollYProgress, [0, 0.36, 0.46], [1, 1, 0]);
  const cardOp2 = useTransform(scrollYProgress, [0, 0.36, 0.46, 0.57, 0.67], [0, 0, 1, 1, 0]);
  const cardOp3 = useTransform(scrollYProgress, [0, 0.57, 0.67, 0.78, 0.88], [0, 0, 1, 1, 0]);
  const cardOp4 = useTransform(scrollYProgress, [0, 0.78, 0.88], [0, 0, 1]);

  const cardOpacities = [cardOp1, cardOp2, cardOp3, cardOp4];


  const textY = useTransform(scrollYProgress, [0, 0.25], ["0%", "-100vh"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);



  const op1 = useTransform(scrollYProgress, [0, 0.36, 0.46], [1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.36, 0.46, 0.57, 0.67], [0, 1, 1, 0]);
  const op3 = useTransform(scrollYProgress, [0.57, 0.67, 0.78, 0.88], [0, 1, 1, 0]);
  const op4 = useTransform(scrollYProgress, [0.78, 0.88, 1], [0, 1, 1]);

  const bgOpacities = [op1, op2, op3, op4];

  return (
    <section ref={sectionRef} className="nominee-scroll-outer">
      <div className="nominee-sticky-box">
        { }
        <div className="nominee-bg-layer">
          {featuresData.map((feature, index) => (
            <motion.div
              key={`bg-${index}`}
              className="nominee-fixed-bg"
              style={{
                backgroundImage: `url(${feature.img})`,
                opacity: bgOpacities[index]
              }}
            />
          ))}
          <div className="nominee-bg-overlay" />
        </div>

        <div className="nominee-content">
          <motion.div
            className="nominee-text-column"
            style={{ y: textY, opacity: textOpacity }}
          >
            <motion.h1
              className="nominee-main-title"
              initial={{ opacity: 1, y: 0 }}
            >
              Content - <span id='italic'>Without</span> the overhead.
            </motion.h1>
            <p className="nominee-main-desc">
              Evercraft Media supports brands, event producers, and enterprise teams who have continuous photo and video production needs. We cover live events, social media content, and in-studio asset creation & management.
            </p>
          </motion.div>

          <div className="nominee-feature-track-container">
            <motion.div style={{ x }} className="nominee-feature-horizontal-track">
              {featuresData.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card-nominee"
                  style={{ opacity: cardOpacities[index] }}
                >
                  <div className="feature-img-box">
                    <img src={feature.cardImg} alt={feature.title} />
                  </div>
                  <div className="feature-info-box" style={{ backgroundColor: feature.boxColor }}>
                    <h2 className="feature-info-title">
                      {feature.title.includes(' ')
                        ? <>{feature.title.split(' ').slice(0, -1).join(' ')} <em>{feature.title.split(' ').slice(-1)}</em></>
                        : feature.title}
                    </h2>
                    <p className="feature-info-text">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        { }
        <div className="nominee-vertical-bar">
          { }
          <span className="badge-text">Nominee</span>
        </div>
      </div>
    </section>
  );
};

export default NomineeSection;
