import React from 'react';
import { SectionId } from '../types';
import { Linkedin, Github, Instagram, ArrowDown } from 'lucide-react';
import nagendharPortrait from '../assets/bw-removebg-preview .png';

const skills = [
  "React Native", "Java Spring Boot", "TypeScript", "Microservices",
  "UI/UX Design", "System Architecture", "Expo", "PostgreSQL",
  "React Native", "Java Spring Boot", "TypeScript", "Microservices",
  "UI/UX Design", "System Architecture", "Expo", "PostgreSQL"
];

const Hero: React.FC = () => {
  // Helper function to render text with staggered animation delays per letter
  const renderLetters = (text: string, baseDelay: number) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        aria-hidden="true"
        className="inline-block animate-slide-up"
        style={{ animationDelay: `${baseDelay + (index * 0.1)}s` }}
      >
        {char}
      </span>
    ));
  };

  return (
    <section id={SectionId.HERO} className="relative h-screen w-full bg-[#E6E6E6] flex flex-col items-center justify-center overflow-hidden">

      {/* Background Large Text - Centered & Behind Image - Moved to Right */}
      <div className="absolute inset-0 flex items-center justify-end pr-[1%] md:pr-[8%] pointer-events-none z-0">
        <h1
          className="text-[35vw] md:text-[30vw] lg:text-[27vw] leading-none select-none uppercase"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: '#FFFFFF',
            transform: 'scaleX(0.75) scaleY(1.4)',
            transformOrigin: 'right center',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility'
          }}
        >
          PORTFOLIO
        </h1>
      </div>

      {/* Floating Info Top Left */}
      <div className="absolute top-24 left-6 md:left-12 z-20 animate-slide-up delay-300">
        <div className="text-[#FF3B3B] font-bold text-xs md:text-sm tracking-[0.2em] mb-2 uppercase">
          Full Stack Developer
        </div>
        <div className="text-black font-medium text-sm md:text-base max-w-[200px]">
          Building scalable mobile apps & backend systems.
        </div>
      </div>

      {/* Social Icons - Mobile: Bottom Right, Desktop: Left Center */}
      <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-6 absolute bottom-24 right-6 md:left-12 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:right-auto text-gray-500 z-20 animate-slide-up delay-500">
        <a href="https://www.linkedin.com/in/nagender-reddy1406/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3B3B] transition-colors"><Linkedin size={22} /></a>
        <a href="https://github.com/Nagendharreddy143" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3B3B] transition-colors"><Github size={22} /></a>
        <a href="https://www.instagram.com/nagendhar_1403/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3B3B] transition-colors"><Instagram size={22} /></a>
      </div>

      {/* Main Image - Centered (No overlay, no border, no shadow) - Fixed to not cut off shoulder */}
      <div className="relative z-10 flex items-end justify-center md:items-center md:pb-0 h-full md:mt-0 animate-slide-up delay-300">
        <div className="w-[100vw] h-auto md:w-[400px] md:h-auto lg:w-[450px] overflow-visible relative">
          <img
            src={nagendharPortrait}
            alt="Nagendhar Portrait"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Nickname Overlay - Handwritten Style in Red - Smaller and More Subtle */}
      <div className="absolute bottom-[35%] right-[5%] md:right-[10%] lg:right-[12%] z-20 pointer-events-none">
        <h2
          className="text-[5vw] md:text-[5.5vw] lg:text-[6vw] leading-none"
          style={{
            fontFamily: "'Pacifico', 'Brush Script MT', cursive",
            transform: 'rotate(-8deg)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
            letterSpacing: '0.03em',
            color: '#FF3B3B',
            fontWeight: 400
          }}
        >
          Nani
        </h2>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-24 md:bottom-24 right-6 md:right-12 flex items-center space-x-2 animate-bounce z-20 text-gray-500">
        <span className="text-xs tracking-widest uppercase hidden md:inline">Scroll</span>
        <ArrowDown size={16} />
      </div>

      {/* Skills Marquee - Fixed at Bottom */}
      <div className="absolute bottom-0 w-full bg-black text-white py-4 md:py-6 overflow-hidden z-30 border-t border-white/10">
        <div className="animate-marquee whitespace-nowrap">
          <div className="flex shrink-0">
            {skills.map((skill, index) => (
              <div key={`s1-${index}`} className="flex items-center mx-6 md:mx-10">
                <span className="text-[#FF3B3B] text-xs mr-4">●</span>
                <span className="text-lg md:text-2xl font-bold uppercase tracking-wider">{skill}</span>
              </div>
            ))}
          </div>
          <div className="flex shrink-0">
            {skills.map((skill, index) => (
              <div key={`s2-${index}`} className="flex items-center mx-6 md:mx-10">
                <span className="text-[#FF3B3B] text-xs mr-4">●</span>
                <span className="text-lg md:text-2xl font-bold uppercase tracking-wider">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;