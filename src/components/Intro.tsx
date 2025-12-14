import React from 'react';
import { SectionId } from '../types';
import { ArrowRight } from 'lucide-react';

const Intro: React.FC = () => {
  return (
    <section id={SectionId.INTRO} className="bg-[#0A0A0A] text-white py-16 md:py-24 px-6 md:px-12 relative">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Label */}
        <div className="md:col-span-3">
          <span className="text-[#FF3B3B] text-sm font-bold tracking-widest uppercase block mb-4">
            Intro
          </span>
        </div>

        {/* Main Statement */}
        <div className="md:col-span-9">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-8">
            I’m a versatile <span className="text-white font-bold">developer</span> who partners with founders to turn ideas into <span className="text-[#FF3B3B]">fast, modern mobile apps</span>. I focus on clear interfaces, sharp decisions, and fast execution.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#B3B3B3] text-base leading-relaxed">
                Bringing your vision to life quickly and efficiently—whether it’s branding, apps, or websites—I’ve got it covered, delivering smooth and effective solutions from start to finish.
              </p>
            </div>
            <div className="flex items-end md:justify-end">
              <button
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center space-x-3 text-white border border-white/20 px-8 py-4 rounded-full hover:border-[#FF3B3B] hover:text-[#FF3B3B] transition-all duration-300"
              >
                <span>See my Work</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;