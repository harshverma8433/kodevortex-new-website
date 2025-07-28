import React, { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTypewriter } from 'react-simple-typewriter';

const WhatIsKodeVortex = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Typewriter effect for the title
  const [text] = useTypewriter({
    words: ["KODE VORTEX"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 100,
    delaySpeed: 1800
  });
  
  // Responsive background elements
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const textRevealVariants = {
    hidden: { 
      opacity: 0,
      clipPath: "inset(0 100% 0 0)"
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Particle effect for background decoration
  const particleCount = 20;
  const particles = [...Array(particleCount)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    speed: Math.random() * 1 + 0.2
  }));

  // Feature grid items
  const features = [
    {
      title: "Expert-Led Training",
      description: "Learn from industry professionals with years of real-world experience",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Hands-On Projects",
      description: "Apply your knowledge through practical, industry-relevant projects",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Structured Learning",
      description: "Follow clear learning paths designed for optimal skill progression",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Industry Recognition",
      description: "Earn certifications that are valued and recognized in the tech industry",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative mt-32 min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 overflow-hidden py-16 px-4">
      {/* Enhanced background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.12),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.15),transparent_60%)]"></div>
        
        {/* Animated particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, particle.speed * 20, 0],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + particle.speed * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Glass morphism accent elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Enhanced section heading with animated underline */}
          <motion.div 
            variants={itemVariants} 
            className="mb-10 text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-tight mb-4">
              WHAT IS 
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                {text}
                <span className="inline-block w-1 h-8 md:h-10 ml-1 bg-indigo-400 animate-blink"></span>
              </span>
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ width: "0px" }}
              animate={{ width: "180px" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            ></motion.div>
          </motion.div>

          {/* Main content with responsive layout */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            className="w-full"
          >
            {/* Description with fancy border */}
            <motion.div 
              variants={itemVariants}
              className="relative mx-auto max-w-3xl mb-16 px-8 py-8"
            >
              <div className="absolute left-0 top-0 w-8 h-8 border-l-2 border-t-2 border-indigo-400 opacity-70"></div>
              <div className="absolute right-0 top-0 w-8 h-8 border-r-2 border-t-2 border-indigo-400 opacity-70"></div>
              
              <motion.p 
                variants={textRevealVariants}
                className="text-2xl md:text-2xl text-zinc-200 leading-relaxed text-center"
              >
                KodeVortex is a cutting-edge learning platform designed to equip students and professionals with high-tech and industry-relevant skills. We bridge the gap between academic knowledge and real-world applications through expert-led training, hands-on projects, and structured learning paths.
              </motion.p>
              
              <motion.p 
                variants={textRevealVariants}
                className="text-xl md:text-xl text-zinc-200 leading-relaxed text-center mt-4"
              >
                Join us to build expertise, gain industry-recognized certifications, and take your career to the next level! 🚀
              </motion.p>
              
              <div className="absolute left-0 bottom-0 w-8 h-8 border-l-2 border-b-2 border-indigo-400 opacity-70"></div>
              <div className="absolute right-0 bottom-0 w-8 h-8 border-r-2 border-b-2 border-indigo-400 opacity-70"></div>
            </motion.div>

            {/* Feature grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 max-w-6xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group"
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg w-14 h-14 flex items-center justify-center text-purple-300 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to action button */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mt-16"
            >
              <motion.button 
                className="group relative px-8 py-4 overflow-hidden rounded-full text-white font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Enter the Vortex
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        @media (max-width: 640px) {
          .container {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIsKodeVortex;