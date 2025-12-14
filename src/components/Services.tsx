import React from 'react';
import { SectionId, Service } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services: Service[] = [
  {
    id: "01",
    title: "React Native App Development",
    description: "Cross-platform mobile applications that feel native.",
    subItems: ["iOS & Android", "Expo & CLI", "Performance Optimization"]
  },
  {
    id: "02",
    title: "Backend Development",
    description: "Robust and scalable server-side logic using Java.",
    subItems: ["Java Spring Boot", "RESTful APIs", "Microservices"]
  },
  {
    id: "03",
    title: "UI/UX Implementation",
    description: "Translating designs into pixel-perfect code.",
    subItems: ["Responsive Design", "Animations", "Design Systems"]
  }
];

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="relative bg-black text-white py-10 md:py-12 px-6 md:px-12 border-t border-white/10 scroll-mt-28">
      <div className="max-w-[1800px] mx-auto">

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF3B3B] text-sm font-bold tracking-widest uppercase block">
            Services
          </span>
        </motion.div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start border-b border-white/10 py-8 transition-all duration-500 hover:border-[#FF3B3B]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              {/* Hover Background - Subtle Glow */}
              <div className="absolute inset-0 bg-[#FF3B3B]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Huge Number */}
              <div className="md:col-span-4 relative overflow-hidden">
                <span className="text-5xl md:text-7xl leading-none font-bold outline-text block transition-all duration-700 group-hover:text-white/5 group-hover:-translate-y-2 group-hover:scale-105 origin-left">
                  {service.id}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-5 pt-1 z-10">
                <div className="flex items-center space-x-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold transition-colors duration-300 group-hover:text-[#FF3B3B]">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="text-[#FF3B3B] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" size={20} />
                </div>
                <p className="text-[#B3B3B3] text-sm md:text-base transition-colors duration-300 group-hover:text-white">
                  {service.description}
                </p>
              </div>

              {/* Sub items */}
              <div className="md:col-span-3 pt-3 md:pt-1 md:text-right z-10">
                <ul className="space-y-1.5">
                  {service.subItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[10px] md:text-xs text-[#555] group-hover:text-[#FF3B3B] uppercase tracking-wide border-b border-white/5 pb-1 inline-block md:block ml-auto w-fit md:w-full transition-colors duration-500"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-x-2">
                        0{idx + 1} {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;