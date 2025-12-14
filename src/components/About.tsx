import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionId } from '../types';
import { Download } from 'lucide-react';
import chairImage from '../assets/chair with nani.png';
import resumePDF from '../assets/resume/r-1.pdf';

// Component for individual word reveal animation
const WordReveal: React.FC<{ children: string; index: number }> = ({ children, index }) => {
  return (
    <motion.span
      className="inline-block relative overflow-hidden mr-[0.25em]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.01, delay: index * 0.05 }}
    >
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
          ease: [0.33, 1, 0.68, 1]
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

// Component for text reveal with box effect
const TextRevealBox: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, index) => (
        <WordReveal key={index} index={index}>
          {word}
        </WordReveal>
      ))}
    </span>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to opacity for image
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      id={SectionId.ABOUT}
      className="bg-white py-2 md:py-4 px-6 md:px-12 scroll-mt-20"
    >
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center w-full">

        <motion.div
          className="md:col-span-5 relative"
          style={{ opacity: imageOpacity, scale: imageScale }}
        >
          <div className="w-full overflow-visible relative flex items-center justify-center">
            <img
              src={chairImage}
              alt="Nagendhar"
              className="object-contain w-full h-auto"
            />
          </div>
        </motion.div>

        <div className="md:col-span-7">
          <motion.span
            className="text-[#FF3B3B] text-sm font-bold tracking-widest uppercase block mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.span>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            <TextRevealBox text="Building" />
            {' '}
            <span className="text-gray-400 decoration-1 underline decoration-[#FF3B3B]">
              <TextRevealBox text="AI-powered" />
            </span>
            {' '}
            <TextRevealBox text="platforms for real impact." />
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 max-w-2xl">
            <TextRevealBox
              text="I'm a Full-Stack Developer passionate about creating scalable AI-driven applications. My journey started at Firstbench.ai, where I worked on Aspirant.ai, an AI-powered learning platform for UPSC aspirants. I contributed to system architecture, built modular React and React Native components, and helped shape the product's foundation."
              className="block mb-4"
            />
            <TextRevealBox
              text="I then worked at Klyrodrift Technologies on Xploar.ai, where I evolved from intern to full-stack developer. I built core features like AI Answer Evaluation, Mock Tests, and Discussion platforms, working across the entire stack—from Spring Boot APIs to React Native mobile apps."
              className="block mb-4"
            />
            <TextRevealBox
              text="Currently, I'm freelancing with my team at Tripple Factor, building websites and digital solutions for local businesses. I believe in writing clean, maintainable code that solves real problems."
            />
          </p>

          <div className="grid grid-cols-2 gap-5 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold mb-2 text-sm md:text-base">Tech Stack</h4>
              <ul className="space-y-1 text-gray-500 text-xs md:text-sm">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  React.js / React Native
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Java Spring Boot
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  TypeScript / JavaScript
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  MySQL / REST APIs
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-bold mb-2 text-sm md:text-base">Tools & AI</h4>
              <ul className="space-y-1 text-gray-500 text-xs md:text-sm">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Gemini API
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Tailwind CSS
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  Git / Maven
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  Expo / Vite
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Resume Button */}
          <motion.a
            href={resumePDF}
            download="Nagendhar_Reddy_Resume.pdf"
            className="inline-flex items-center gap-3 bg-[#FF3B3B] text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 group shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} className="group-hover:animate-bounce" />
            <span className="font-bold text-sm md:text-base">Resume</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default About;