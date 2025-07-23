import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TechnologyExpertise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  const technologies = [
    {
      title: "Web Development",
      description: "Modern frameworks, responsive design, and full-stack development with React, Node.js, and more.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#F28474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      )
    },
    {
      title: "AI & Machine Learning",
      description: "Practical applications of AI with hands-on experience in machine learning algorithms and data analysis.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#20B2AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Mobile Development",
      description: "Cross-platform app development using React Native and Flutter for iOS and Android.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#F28474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Generative AI",
      description: "Creating innovative solutions using LLMs, diffusion models, and other generative AI technologies for text, image, and code generation.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#20B2AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4.5v15m7.5-7.5h-15"></path>
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"></path>
          <path d="M12 7a5 5 0 100 10 5 5 0 000-10z"></path>
        </svg>
      )
    },
    {
      title: "Blockchain",
      description: "Distributed ledger technologies, smart contracts, and decentralized applications with a focus on real-world use cases.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#F28474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      )
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security training covering threat detection, penetration testing, secure coding practices, and risk management.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#20B2AA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      )
    },
    {
      title: "Cloud Computing",
      description: "Cloud architecture, deployment, and management across major platforms like AWS, Azure, and Google Cloud with focus on scalability.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#F28474]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      )
    }
  ];

  const visibleTechnologies = 1;
  const maxIndex = technologies.length - visibleTechnologies;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        staggerChildren: 0.3,
        delayChildren: 0.2
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.6, 0.05, -0.01, 0.9],
        type: "spring",
        stiffness: 100 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.15,
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 8
      } 
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 15px 30px rgba(242, 132, 116, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [maxIndex]);

  // Check if element is in view for animations
  const checkInView = () => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible && !isInView) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkInView);
    checkInView();
    return () => window.removeEventListener('scroll', checkInView);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index > maxIndex ? maxIndex : index);
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#141414] via-[#1c1c1c] to-[#252525] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Abstract geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {/* Large circle - Responsive sizing */}
        <motion.div
          className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full border-2 border-[#20B2AA]/30 -right-[100px] sm:-right-[120px] md:-right-[150px] -top-[100px] sm:-top-[120px] md:-top-[150px]"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 80,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Medium circle - Responsive sizing */}
        <motion.div
          className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] rounded-full border border-[#F28474]/20 right-[15%] sm:right-[18%] md:right-[20%] bottom-[8%] sm:bottom-[9%] md:bottom-[10%]"
          animate={{
            rotate: 270,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 70,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Small circle - Responsive sizing */}
        <motion.div
          className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] rounded-full border border-[#F28474]/20 -left-[50px] sm:-left-[70px] md:-left-[100px] bottom-[10%] sm:bottom-[12%] md:bottom-[15%]"
          animate={{
            rotate: -360,
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotate: {
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.1]" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgzMiwgMTc4LCAxNzAsIDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuMSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')",
          backgroundSize: "60px 60px"
        }} />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9InJnYmEoMjQyLCAxMzIsIDExNiwgMC4xNSkiIHN0cm9rZS13aWR0aD0iMS4xIiBkPSJNMCAwaDEyMHYxMjBIMHoiLz48L2c+PC9zdmc+')",
          backgroundSize: "120px 120px",
          transform: "rotate(30deg)",
        }} />
      </div>
      
      {/* Floating particles in background */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-b from-[#F28474] to-[#20B2AA] opacity-25"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)"
          }}
          animate={{
            y: [0, Math.random() * 80 - 40],
            x: [0, Math.random() * 80 - 40],
            opacity: [0.1, 0.35, 0.1],
            scale: [1, Math.random() * 0.6 + 1, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="relative mb-10 sm:mb-12 md:mb-16 text-center"
          variants={titleVariants}
        >
          <motion.div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6">
            <motion.h1 
              className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A71] via-[#E05E50] to-[#028985] font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight z-10 leading-tight px-4"
              animate={{
                textShadow: [
                  "0 0 10px rgba(242, 132, 116, 0.25)",
                  "0 0 18px rgba(242, 132, 116, 0.4)",
                  "0 0 10px rgba(242, 132, 116, 0.25)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              Our Technology Expertise
            </motion.h1>

            {/* Animated underline */}
            <motion.div 
              className="h-1 sm:h-1.5 bg-gradient-to-r from-[#FF8A71] via-[#E05E50] to-[#20B2AA] rounded-full w-20 sm:w-24 md:w-32"
              animate={{
                width: ["3rem", "8rem", "3rem"],
                opacity: [0.7, 1, 0.7],
                height: ["0.20rem", "0.30rem", "0.20rem"]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mt-4">
              Comprehensive training programs in cutting-edge technologies delivering industry-relevant skills for tomorrow's workforce.
            </p>
          </motion.div>

          {/* Light glow behind the title */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 sm:h-36 md:h-40 rounded-full bg-gradient-to-r from-[#F28474]/25 via-[#E05E50]/20 to-[#20B2AA]/25 blur-[80px] sm:blur-[90px] md:blur-[100px] opacity-40"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>

        {/* Technology cards slider with animation */}
        <div className="relative overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {technologies.slice(currentIndex, currentIndex + (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)).map((tech, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800/70 shadow-xl shadow-black/60 relative group overflow-hidden"
                >
                  {/* Hover effect glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#F28474]/15 to-[#20B2AA]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 overflow-hidden">
                    <div className="absolute rotate-45 bg-gradient-to-r from-[#F28474]/10 to-[#20B2AA]/10 w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 -right-4 -top-4 transform origin-bottom-left" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex-shrink-0 bg-gradient-to-br from-[#E05E50] to-[#20B2AA] p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-lg shadow-black/50 inline-block">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{tech.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{tech.description}</p>
                    
                    <motion.div 
                      className="mt-6 flex items-center text-[#F28474] text-sm font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: false, amount: 1 }}
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF8A71]/80 to-[#20B2AA]/80 w-0 group-hover:w-full transition-all duration-500 ease-out"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Slider controls */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#F28474] w-6' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow controls */}
          <button 
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 z-10 focus:outline-none"
            onClick={() => setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1)}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 z-10 focus:outline-none"
            onClick={() => setCurrentIndex(prev => prev === maxIndex ? 0 : prev + 1)}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Stats section with counter animation */}
        <motion.div 
          className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            { value: "500+", label: "Students Trained" },
            { value: "45+", label: "Corporate Partners" },
            { value: "120+", label: "Projects Completed" },
            { value: "90%", label: "Placement Rate" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl text-center border border-gray-800/20"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.6 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2), 0 0 8px rgba(242, 132, 116, 0.1)" 
              }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F28474] to-[#20B2AA]"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 2
                }}
                style={{ 
                  backgroundSize: '200% 100%',
                }}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA section with motion effects */}
        < motion.div
          className ="mt-16 sm:mt-20 md:mt-24 bg-gradient-to-r from-[#0c0c0c] to-[#121212] rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden border border-gray-800/30 mx-4 sm:mx-6 md:mx-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
        >
          {/* Background glow effects */}
          <motion.div
            className="absolute -top-24 -right-24 w-64 h-64 bg-[#F28474]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#20B2AA]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 4,
            }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-7 md:gap-8">
            <div className="md:max-w-xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">Ready to Transform Your Institution?</h3>
              <p className="text-gray-300 text-sm sm:text-base">Partner with us to establish a Centre of Excellence that empowers your students with industry-ready skills and enhances your institution's capabilities at no additional cost.</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-[#E05E50] to-[#F28474] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold text-white shadow-lg shadow-[#E05E50]/25 flex items-center gap-2 text-sm sm:text-base md:text-lg">
                Become a Partner
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </motion.div>
          </div>
          </motion.div>
      </div>
    </motion.div>
  );
};

export default TechnologyExpertise;