import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X, Download } from 'lucide-react';
import logoImage from '../assets/image.png';
import resumePDF from '../assets/resume/r-1.pdf';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = [SectionId.EXPERIENCE, SectionId.SERVICES, SectionId.PROJECTS, SectionId.ABOUT, SectionId.CONTACT];
      const scrollPosition = window.scrollY + 150;

      // Check if we're at the top (Hero section)
      if (window.scrollY < 200) {
        setActiveSection(null);
        return;
      }

      // Check which section is active
      let foundSection = false;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            foundSection = true;
            break;
          }
        }
      }

      if (!foundSection) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100; // Increased offset for better positioning
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img
            src={logoImage}
            alt="NR Logo"
            className="h-8 md:h-10 w-auto transition-all duration-300"
            style={{
              filter: 'brightness(0) saturate(100%)'
            }}
          />
          <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-[#FF3B3B] transition-colors">
            Nagendhar
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12 text-sm font-medium tracking-wide">
          {[
            { id: SectionId.EXPERIENCE, label: 'Experience' },
            { id: SectionId.SERVICES, label: 'Services' },
            { id: SectionId.PROJECTS, label: 'Projects' },
            { id: SectionId.ABOUT, label: 'About' },
            { id: SectionId.CONTACT, label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative hover:text-[#FF3B3B] transition-colors"
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF3B3B] animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 md:hidden flex flex-col space-y-4 shadow-xl">
          <button onClick={scrollToTop} className="text-left py-2 hover:text-[#FF3B3B] font-bold">Home</button>
          <button onClick={() => scrollToSection(SectionId.EXPERIENCE)} className="text-left py-2 hover:text-[#FF3B3B]">Experience</button>
          <button onClick={() => scrollToSection(SectionId.SERVICES)} className="text-left py-2 hover:text-[#FF3B3B]">Services</button>
          <button onClick={() => scrollToSection(SectionId.PROJECTS)} className="text-left py-2 hover:text-[#FF3B3B]">Projects</button>
          <button onClick={() => scrollToSection(SectionId.ABOUT)} className="text-left py-2 hover:text-[#FF3B3B]">About</button>
          <button onClick={() => scrollToSection(SectionId.CONTACT)} className="text-left py-2 hover:text-[#FF3B3B]">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;