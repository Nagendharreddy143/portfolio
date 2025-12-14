import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionId, Experience as ExperienceType } from '../types';
import { Briefcase, Calendar, Code2, ExternalLink } from 'lucide-react';

const experiences: ExperienceType[] = [
    {
        id: 1,
        company: 'Klyrodrift Technologies Private Limited',
        role: 'Full-Stack Developer',
        duration: 'July 2025 – December 2025',
        period: '6 months',
        project: 'Xploar.ai',
        link: 'https://xploar.ai/',
        logo: '/xploar.ai.png',
        description: 'Contributed to building Xploar.ai, the flagship AI-powered UPSC learning platform. Took part in the brand and product evolution from Aspirant.ai into Xploar.ai.',
        achievements: [
            'Designed and developed core product features including AI Answer Evaluation, Mock Tests, Townhall Discussion platform, and Personalized News',
            'Built AI automation workflows using n8n for email newsletter system, streamlining content delivery to thousands of UPSC aspirants',
            'Built scalable and reusable UI components using React and React Native',
            'Integrated Spring Boot backend APIs with MySQL-backed data handling',
            'Improved UI/UX consistency, performance, and user flow across the platform',
            'Participated in product-level decisions and real-user feedback iterations'
        ],
        technologies: ['React.js', 'React Native', 'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL', 'Gemini API', 'n8n', 'AI Automation', 'Maven', 'Git', 'Linux']
    },
    {
        id: 2,
        company: 'Firstbench.ai',
        role: 'Software Development Intern (Full-Stack)',
        duration: 'April 2025 – July 2025',
        period: '4 months',
        project: 'Aspirant.ai',
        link: 'https://aspirantai.in/',
        logo: '/Vector.png',
        description: 'Worked on Aspirant.ai, an AI-driven learning and evaluation platform designed specifically for UPSC aspirants.',
        achievements: [
            'Helped design the system architecture for an AI-based content, evaluation, and news platform',
            'Developed frontend features using React and React Native with clean, modular, and reusable components',
            'Worked on AI-focused learning workflows including structured content delivery',
            'Collaborated with mobile team to integrate APIs and maintain feature parity across platforms',
            'Actively participated in UI/UX discussions, improving readability and navigation'
        ],
        technologies: ['React.js', 'React Native', 'HTML', 'CSS', 'JavaScript', 'REST APIs', 'Spring Boot', 'Git']
    }
];

const Experience: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

    return (
        <section
            ref={sectionRef}
            id={SectionId.EXPERIENCE}
            className="bg-white py-16 md:py-24 px-6 md:px-12 scroll-mt-20"
        >
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#FF3B3B] text-sm font-bold tracking-widest uppercase block mb-3">
                        Experience
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Professional Journey
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl">
                        Building scalable AI-powered platforms and delivering production-ready features
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Animated Timeline Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gray-200">
                        <motion.div
                            className="w-full bg-gradient-to-b from-[#FF3B3B] to-black"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    {/* Experience Cards */}
                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                className="relative pl-8 md:pl-24"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    className="absolute left-[-8px] md:left-[23px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#FF3B3B] shadow-lg"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                                />

                                {/* Card */}
                                <motion.div
                                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Header */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                                    {exp.role}
                                                </h3>
                                                <div className="flex items-center gap-2 text-gray-700 mb-1">
                                                    <Briefcase size={18} className="text-[#FF3B3B]" />
                                                    <span className="font-semibold">{exp.company}</span>
                                                </div>
                                                {exp.project && (
                                                    <div className="flex items-center gap-3 text-sm text-gray-600 ml-6">
                                                        <div>
                                                            Project: <span className="font-semibold text-[#FF3B3B]">{exp.project}</span>
                                                        </div>
                                                        {exp.link && (
                                                            <motion.a
                                                                href={exp.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF3B3B] text-white text-xs font-medium rounded-full hover:bg-black transition-colors duration-300"
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                            >
                                                                <span>View Live</span>
                                                                <ExternalLink size={12} />
                                                            </motion.a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="hidden md:flex flex-col items-end gap-3">
                                                {/* Company Logo */}
                                                {exp.logo && (
                                                    <motion.div
                                                        className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.2 + 0.3 }}
                                                    >
                                                        <img
                                                            src={exp.logo}
                                                            alt={`${exp.company} logo`}
                                                            className="h-12 w-auto object-contain"
                                                        />
                                                    </motion.div>
                                                )}

                                                {/* Duration Badge */}
                                                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                                                    <Calendar size={16} />
                                                    <span>{exp.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-700 mb-3">
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.achievements.slice(0, 3).map((achievement, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start gap-3 text-sm text-gray-600"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.2 + i * 0.1 }}
                                                >
                                                    <span className="text-[#FF3B3B] mt-1 flex-shrink-0">▸</span>
                                                    <span>{achievement}</span>
                                                </motion.li>
                                            ))}
                                            {/* Show remaining achievements on desktop only */}
                                            {exp.achievements.slice(3).map((achievement, i) => (
                                                <motion.li
                                                    key={i + 3}
                                                    className="hidden md:flex items-start gap-3 text-sm text-gray-600"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.2 + (i + 3) * 0.1 }}
                                                >
                                                    <span className="text-[#FF3B3B] mt-1 flex-shrink-0">▸</span>
                                                    <span>{achievement}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Code2 size={18} className="text-[#FF3B3B]" />
                                            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-700">
                                                Technologies
                                            </h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full hover:bg-[#FF3B3B] transition-colors duration-300 cursor-default"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.2 + i * 0.05 }}
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Summary Stats */}
                <motion.div
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="bg-gradient-to-br from-[#FF3B3B] to-black text-white p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold mb-2">10+</div>
                        <div className="text-sm uppercase tracking-wider opacity-90">Months Experience</div>
                    </div>
                    <div className="bg-gradient-to-br from-black to-gray-800 text-white p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold mb-2">2</div>
                        <div className="text-sm uppercase tracking-wider opacity-90">Companies</div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold mb-2">15+</div>
                        <div className="text-sm uppercase tracking-wider opacity-90">Technologies</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
