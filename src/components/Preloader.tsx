import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    // Create slices for the cutting animation
    const slices = Array.from({ length: 8 }, (_, i) => i);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {/* Logo and text container */}
                    <div className="relative flex flex-col items-center justify-center gap-8">
                        {/* Logo container with slicing effect */}
                        <div className="relative w-48 h-48 md:w-64 md:h-64">
                            {/* Slicing overlay effect */}
                            <div className="absolute inset-0 flex">
                                {slices.map((slice) => (
                                    <motion.div
                                        key={slice}
                                        className="flex-1 bg-black border-r border-red-500/20"
                                        initial={{ scaleY: 1, opacity: 1 }}
                                        animate={{
                                            scaleY: 0,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: slice * 0.08,
                                            ease: [0.76, 0, 0.24, 1]
                                        }}
                                        style={{
                                            transformOrigin: slice % 2 === 0 ? 'top' : 'bottom'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Main logo with reveal animation */}
                            <motion.div
                                className="relative w-full h-full"
                                initial={{ scale: 1.2, rotate: -5 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.3,
                                    ease: [0.34, 1.56, 0.64, 1]
                                }}
                            >
                                <motion.img
                                    src="/image.svg"
                                    alt="Logo"
                                    className="w-full h-full object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                />
                            </motion.div>

                            {/* Cutting line effects */}
                            {slices.map((slice) => (
                                <motion.div
                                    key={`line-${slice}`}
                                    className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-red-500 to-transparent"
                                    style={{ left: `${(slice / slices.length) * 100}%` }}
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        scaleY: [0, 1, 1]
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: slice * 0.08,
                                        ease: "easeOut"
                                    }}
                                />
                            ))}
                        </div>

                        {/* Loading text centered with logo */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <motion.p
                                className="text-white/60 text-sm md:text-base font-light tracking-[0.3em] uppercase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0.6] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                Loading
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
