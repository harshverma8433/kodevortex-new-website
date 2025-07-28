import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./OurTeam1.css";

// Import your team member images
import suraj_nayak from "./suraj_nayak.jpg";
import sonal_mittal from "./sonal_mittal.jpg";
import rishabh_triphati from "./rishabh_triphati.jpg";
import sanskriti from "./sanskriti.jpg";

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const controls = useAnimation();
  const cardRef = useRef(null);

  // Enhanced team members data with skills
  const teamMembers = [
    {
      name: "Suraj Nayak",
      image: suraj_nayak,
      role: "Co-founder & Project Manager",
      bio: "Visionary leader with expertise in project management and team coordination.",
      skills: ["Project Management", "Team Leadership", "Strategic Planning"],
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sonal Mittal",
      image: sonal_mittal,
      role: "Fullstack Developer",
      bio: "Passionate developer with a keen eye for creating seamless user experiences.",
      skills: ["React", "Node.js", "UI/UX Integration"],
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Rishabh Tripathi",
      image: rishabh_triphati,
      role: "Fullstack & ML Developer",
      bio: "Innovative problem-solver blending web development with machine learning expertise.",
      skills: ["Machine Learning", "Python", "Data Visualization"],
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sanskrati Agrawal",
      image: sanskriti,
      role: "UI/UX Designer",
      bio: "Creative designer focused on crafting intuitive and beautiful interfaces.",
      skills: ["UI Design", "User Research", "Prototyping"],
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ];

  // Stats about the team
  const teamStats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Years Experience", value: "12+" },
  ];

  // Auto-rotate through team members
  useEffect(() => {
    let interval;
    if (isAutoplay && !isHovering) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % teamMembers.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, teamMembers.length, isHovering]);

  // Control animations based on view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(67, 56, 202, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  // Parallax effect for hover
  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovering) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 5;
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetCardPosition = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-zinc-800">
      {/* Enhanced animated background elements with more depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        
        {/* More varied animated background elements */}
        <motion.div 
          initial={{ x: "-10%", y: "10%" }}
          animate={{ 
            x: "5%", 
            y: "-5%",
            scale: [1, 1.1, 1],
            transition: { 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 20,
              ease: "easeInOut",
              scale: {
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
              }
            }
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-indigo-600/20 opacity-20 blur-3xl"
        ></motion.div>
        
        <motion.div 
          initial={{ x: "10%", y: "-5%" }}
          animate={{ 
            x: "-15%", 
            y: "10%",
            scale: [1, 1.2, 1],
            transition: { 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 15,
              ease: "easeInOut",
              scale: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }
            }
          }}
          className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-purple-600/20 opacity-20 blur-3xl"
        ></motion.div>
        
        <motion.div 
          initial={{ x: "0%", y: "0%" }}
          animate={{ 
            x: "10%", 
            y: "5%",
            scale: [1, 1.15, 1],
            transition: { 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 18,
              ease: "easeInOut",
              scale: {
                duration: 22,
                repeat: Infinity,
                repeatType: "reverse",
              }
            }
          }}
          className="absolute top-2/3 left-1/4 w-72 h-72 rounded-full bg-pink-600/20 opacity-10 blur-3xl"
        ></motion.div>
        
        {/* Added floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              scale: Math.random() * 0.6 + 0.2,
            }}
            animate={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              transition: { 
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }
            }}
            className="absolute w-4 h-4 rounded-full bg-white blur-sm"
          ></motion.div>
        ))}
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-indigo-500/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-500/20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-pink-500/30 rounded-full"></div>
      
      {/* Added animated decorative elements */}
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-20 w-48 h-48 border border-indigo-500/10 rounded-full"
      ></motion.div>
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-20 w-64 h-64 border border-purple-500/10 rounded-full"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Enhanced section heading with 3D effects and animations */}
          <motion.div className="text-center mb-20" variants={textVariants}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-3 px-8 py-3 rounded-full bg-gradient-to-r from-zinc-900/40 to-zinc-800/40 backdrop-blur-sm border border-zinc-700/30 shadow-lg shadow-indigo-900/30"
            >
              <motion.p 
                initial={{ letterSpacing: "2px" }}
                animate={{ letterSpacing: "4px" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="text-purple-300 font-medium tracking-widest text-2xl"
              >
                THE BRILLIANT MINDS
              </motion.p>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 perspective-text"
              variants={textVariants}
            >
             
             
              <motion.span 
                initial={{ textShadow: "0 0 10px rgba(99,102,241,0.4)" }}
                animate={{ textShadow: "0 0 25px rgba(99,102,241,0.7)" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="text-white drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              >
                KodeVortex
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                ></motion.div>
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* IMPROVED TEAM SHOWCASE with better image handling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Enhanced featured member card with 3D effects but clearer image */}
            <motion.div 
              className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-indigo-900/30"
              variants={textVariants}
              onHoverStart={() => {
                setIsAutoplay(false);
                setIsHovering(true);
              }}
              onHoverEnd={() => {
                setIsAutoplay(true);
                setIsHovering(false);
                resetCardPosition();
              }}
              onMouseMove={handleMouseMove}
              ref={cardRef}
              whileHover="hover"
              variants={cardVariants}
            >
              {/* Enhanced glowing border effect */}
              <motion.div 
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 z-10"
              ></motion.div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative h-full w-full transition-transform duration-700"
                >
                  {/* Content overlay - Only appears on hover, leaving image clear by default */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-zinc-950/40 z-20 flex flex-col justify-end p-8"
                  >
                    {/* Content container with glass effect */}
                    <div className="backdrop-blur-sm bg-zinc-900/30 p-6 rounded-xl border border-zinc-700/30 transform transition-all duration-300">
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg"
                      >
                        {teamMembers[activeIndex].name}
                      </motion.h3>
                      
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4"
                      ></motion.div>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-purple-200 text-lg font-medium mb-3"
                      >
                        {teamMembers[activeIndex].role}
                      </motion.p>
                      
                      {/* Skills tags */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="flex flex-wrap gap-2 mb-4"
                      >
                        {teamMembers[activeIndex].skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 text-xs bg-zinc-800/70 backdrop-blur-sm rounded-full text-zinc-200 border border-zinc-700/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </motion.div>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-zinc-300 mb-6"
                      >
                        {teamMembers[activeIndex].bio}
                      </motion.p>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="flex space-x-4"
                      >
                        {Object.keys(teamMembers[activeIndex].socials).map((platform) => (
                          <motion.a
                            key={platform}
                            whileHover={{ 
                              scale: 1.2, 
                              boxShadow: "0 0 15px rgba(99, 102, 241, 0.7)" 
                            }}
                            whileTap={{ scale: 0.95 }}
                            href={teamMembers[activeIndex].socials[platform]}
                            className="w-10 h-10 rounded-full bg-zinc-800/50 backdrop-blur-sm flex items-center justify-center text-zinc-300 hover:bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 border border-zinc-700/30"
                          >
                            <SocialIcon platform={platform} />
                          </motion.a>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Image - Always clear and full visibility */}
                  <motion.div className="h-full w-full">
                    <img
                      src={teamMembers[activeIndex].image}
                      alt={teamMembers[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>

                
              </AnimatePresence>

              
              
              {/* Improved navigation buttons with better positioning */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-30 pointer-events-none">
                <motion.button
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(99, 102, 241, 0.5)",
                    boxShadow: "0 0 15px rgba(99, 102, 241, 0.7)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
                    setIsAutoplay(false);
                  }}
                  className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-zinc-700/30 transition-all duration-300 pointer-events-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                
                
                <motion.button
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(99, 102, 241, 0.5)",
                    boxShadow: "0 0 15px rgba(99, 102, 241, 0.7)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
                    setIsAutoplay(false);
                  }}
                  className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-zinc-700/30 transition-all duration-300 pointer-events-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>

                
              </div>
              
              {/* Enhanced progress indicator with better styling */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
                <div className="flex space-x-3 p-2 rounded-full bg-black/40 backdrop-blur-sm">
                  {teamMembers.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setActiveIndex(index);
                        setIsAutoplay(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                          ? "bg-gradient-to-r from-indigo-400 to-purple-400 scale-125" 
                          : "bg-white/30"
                      }`}
                    ></motion.button>
                  ))}
                </div>
                
              </div>
              
              {/* Quick name indicator that appears briefly on load */}
              <motion.div
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 0, y: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none"
              >
                <p className="text-white font-bold text-xl text-center">{teamMembers[activeIndex].name}</p>
                
              </motion.div>
              
            </motion.div>

            
            
            {/* Enhanced team stats and other members section */}
            <motion.div 
              className="space-y-10"
              variants={textVariants}
            >
              {/* Improved team stats section with more visual appeal */}
              {/* <motion.div 
                variants={textVariants}
                className="grid grid-cols-3 gap-4"
              >
                {teamStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(99, 102, 241, 0.3)" }}
                    className="p-6 rounded-xl bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm border border-zinc-700/30 text-center transform transition-all duration-300"
                  >
                    <motion.p 
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: index * 0.5 }}
                      className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-sm text-purple-200 mt-2 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div> */}
              
              {/* Improved team members thumbnails with better hover effects */}
              <motion.div variants={textVariants}>
                <h3 className="text-xl font-semibold text-indigo-300 mb-4">Meet the Team</h3>
                <div className="flex flex-wrap gap-6">
                  {teamMembers.map((member, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ 
                        scale: 1.15,
                        y: -8,
                        boxShadow: "0 15px 30px rgba(99, 102, 241, 0.4)" 
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setActiveIndex(index);
                        setIsAutoplay(false);
                      }}
                      className="relative group"
                    >
                      <div className={`w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                        index === activeIndex 
                          ? "ring-4 ring-indigo-400 shadow-lg shadow-indigo-500/30" 
                          : "ring-2 ring-white/30"
                      }`}>
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Improved name tooltip on hover */}
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 rounded-lg text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {member.name}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-600 rotate-45"></div>
                      </div>
                      
                      {/* Active indicator */}
                      {index === activeIndex && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
                        ></motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
              
              {/* Enhanced team description with improved glass effect */}
              <motion.div 
                className="p-8 rounded-xl bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-lg border border-zinc-700/30 shadow-lg shadow-indigo-900/20"
                variants={textVariants}
                whileHover={{ boxShadow: "0 25px 50px rgba(99, 102, 241, 0.3)" }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Our Team?</h3>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  Our team brings together expertise from diverse fields to deliver exceptional results. 
                  With a passion for innovation and attention to detail, we transform ideas into 
                  impactful solutions that drive success for our clients and partners.
                </p>
                
                {/* Improved achievements/benefits section with better layout */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: "💡", label: "Innovative Approach" },
                    { icon: "⚡", label: "Fast Delivery" },
                    { icon: "🛠️", label: "Custom Solutions" },
                    { icon: "🤝", label: "Dedicated Support" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800/30 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600/40 to-purple-600/40 backdrop-blur-sm flex items-center justify-center text-xl border border-zinc-700/30 shadow-lg shadow-indigo-900/20">
                        {item.icon}
                      </div>
                      <span className="text-indigo-200 font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Enhanced call-to-action button with animation effects */}
                <motion.button 
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 0 30px rgba(99, 102, 241, 0.7)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  // className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-lg transition-all duration-300 relative overflow-hidden group"
                >

                </motion.button>
                <motion.button 
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 0 30px rgba(99, 102, 241, 0.7)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Work With Our Team</span>
                  <motion.div 
                    initial={{ x: "-100%", opacity: 0.5 }}
                    whileHover={{ x: "100%", opacity: 0.8 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"
                  ></motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Simple component for social icons
const SocialIcon = ({ platform }) => {
  switch (platform) {
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      );
    case 'github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      );
    default:
      return null;
  }
};

export default OurTeam;