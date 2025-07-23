import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TrainingApproach = () => {
  const sectionRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  
  // Track scroll position to control color transitions
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const element = sectionRef.current;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate how far through the section we've scrolled (0 to 1)
        let percentage = 0;
        
        // When element first enters viewport from the bottom
        if (elementTop < windowHeight && elementTop > 0) {
          percentage = (windowHeight - elementTop) / windowHeight;
        } 
        // When element is fully in viewport
        else if (elementTop <= 0 && elementTop + elementHeight >= 0) {
          percentage = Math.min(1, Math.abs(elementTop) / (elementHeight - windowHeight));
        }
        // When element has passed viewport
        else if (elementTop + elementHeight < 0) {
          percentage = 1;
        }
        
        setScrollPercentage(Math.min(1, Math.max(0, percentage)));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const phases = [
    {
      title: "Phase 1",
      description: "A 6-day intensive hands-on training program covering 42 hours of practical learning. Designed for in-depth skill development, it includes interactive sessions, real-world applications, and expert guidance.",
      icon: "🎓"
    },
    {
      title: "Phase 2",
      description: "A comprehensive program focused on project development and mentoring, specifically for hackathons. It provides expert guidance, hands-on experience, and strategic support to enhance innovation and problem-solving skills.",
      icon: "💻"
    },
    {
      title: "Phase 3",
      description: "A dynamic program offering startup incubation and industry exposure. It provides mentorship, networking opportunities, and practical insights to help innovators transform ideas into successful ventures.",
      icon: "🚀"
    },
    {
      title: "Phase 4",
      description: "A structured program offering continuous online guidance and expert mentoring. It ensures personalized support, skill enhancement, and career growth through interactive sessions with industry professionals.",
      icon: "🔄"
    }
  ];

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

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.4
      } 
    }
  };

  const timelineItemVariants = {
    hidden: (i) => ({ 
      opacity: 0, 
      x: i % 2 === 0 ? -50 : 50 
    }),
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 8
      } 
    },
    hover: {
      scale: 1.03,
      // boxShadow: "0px 8px 30px rgba(72, 161, 221, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  // Function to interpolate color based on scroll
  const getInterpolatedColor = (startColor, endColor, percent) => {
    // Parse hex colors
    const parseColor = (hexColor) => {
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);
      return { r, g, b };
    };

    const start = parseColor(startColor);
    const end = parseColor(endColor);

    // Interpolate RGB values
    const r = Math.round(start.r + (end.r - start.r) * percent);
    const g = Math.round(start.g + (end.g - start.g) * percent);
    const b = Math.round(start.b + (end.b - start.b) * percent);

    // Convert back to hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  // Starting color  and ending color 
  const startColor = "#E08A7A"; 
  const midColor = "#D6CBBF";  
  const endColor = "#8BAF9F";   

  // Get color for timeline line segments
  const getSegmentColor = (index, total) => {
    // This creates a more dramatic gradient effect
    const basePercent = index / (total - 1);
    const adjustedPercent = Math.pow(basePercent, 0.8); // Makes transition more dramatic
    
    if (basePercent < 0.5) {
      // First half: blue to purple
      return getInterpolatedColor(startColor, midColor, adjustedPercent * 4);
    } else {
      // Second half: purple to red
      return getInterpolatedColor(midColor, endColor, (adjustedPercent - 0.5) * 2);
    }
  };

  // Get phase-specific color
  const getPhaseColor = (index) => {
    const phasePercent = Math.min(1, Math.max(0, (scrollPercentage * 4) - index));
    return getInterpolatedColor(startColor, endColor, phasePercent);
  };

  // Number of segments for the timeline line (more segments = smoother gradient)
  const lineSegments = 20;

  return (
    <motion.div
      ref={sectionRef}
      className="py-16 px-4 md:px-10 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Abstract geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Large circle */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full border-2 right-[50%] -top-[150px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            borderColor: getInterpolatedColor(startColor, endColor, scrollPercentage) + "4D" // 30% opacity
          }}
        />
        
        {/* Small circle */}
        <motion.div
          className="absolute w-[250px] h-[250px] rounded-full border -left-[100px] bottom-[15%]"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            borderColor: getInterpolatedColor(endColor, startColor, scrollPercentage) + "33" // 20% opacity
          }}
        />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iJHtnZXRJbnRlcnBvbGF0ZWRDb2xvcihzdGFydENvbG9yLCBlbmRDb2xvciwgc2Nyb2xsUGVyY2VudGFnZSl9IiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')`
        }} />
      </div>
      
      {/* Floating particles in background */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(to bottom, ${startColor}, ${endColor})`,
            filter: "blur(1px)"
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, Math.random() * 0.5 + 1, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto">
        {/* Title and Description */}
        <motion.div 
          className="relative mb-16 text-center"
          variants={titleVariants}
        >
          <motion.div className="flex flex-col items-center justify-center space-y-6">
            <motion.h2 
              className="relative text-[#F28474] bg-clip-text font-sans text-4xl md:text-5xl font-bold tracking-tight z-10 leading-tight"
              animate={{
                textShadow: [
                  "0 0 8px rgba(242, 132, 116, 0.4)",
                  "0 0 16px rgba(242, 132, 116, 0.6)",
                  "0 0 8px rgba(242, 132, 116, 0.4)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              style={{
                backgroundImage: `linear-gradient(to right, ${startColor}, ${getInterpolatedColor(startColor, endColor, 0.5)})`
              }}
            >
              Our Training Approach
            </motion.h2>

            {/* Animated underline */}
            <motion.div 
              className="h-1 rounded-full w-24 md:w-32"
              animate={{
                width: ["4rem", "10rem", "4rem"],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              style={{
                backgroundImage: `bg-gradient-to-r from-[#D14540] to-[#C03A36]`
              }}
            />
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              How We Implement The Training Program
            </motion.p>
          </motion.div>

          {/* Light glow behind the title */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-40 rounded-full blur-[100px] opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            style={{
              background: `linear-gradient(to right, ${startColor}33, ${endColor}33)`
            }}
          />
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative px-4 pt-10 pb-20"
          variants={timelineVariants}
        >
          {/* Enhanced timeline line with segmented gradient and glow effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2" 
               style={{ 
                 top: "0",
                 bottom: "0", 
                 height: "100%",
                 width: "4px", // Slightly thicker line
               }}>
            
            {/* Main timeline line with multiple segments for smoother gradient */}
            {Array.from({ length: lineSegments }).map((_, i) => {
              const segmentHeight = `${100 / lineSegments}%`;
              const segmentColor = getSegmentColor(i, lineSegments);
              const nextSegmentColor = getSegmentColor(Math.min(i + 1, lineSegments - 1), lineSegments);
              
              return (
                <div 
                  key={i}
                  className="absolute left-0 w-full rounded-full"
                  style={{
                    top: `${(i / lineSegments) * 100}%`,
                    height: segmentHeight,
                    background: `linear-gradient(to bottom, ${segmentColor}, ${nextSegmentColor})`,
                    boxShadow: `0 0 10px ${segmentColor}80, 0 0 5px ${segmentColor}40`, // Glow effect
                    opacity: 0.85
                  }}
                />
              );
            })}
            
            {/* Animated pulse effect along the line */}
            <motion.div
              className="absolute left-0 w-full rounded-full"
              style={{
                height: "30%",
                background: `linear-gradient(to bottom, 
                  transparent, 
                  ${getInterpolatedColor(startColor, endColor, scrollPercentage)}80,
                  transparent
                )`,
                filter: "blur(3px)",
                opacity: 0.6
              }}
              animate={{
                top: ["0%", "70%", "0%"]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </div>
          
          {phases.map((phase, index) => {
            const phaseColor = getPhaseColor(index);
            
            return (
              <motion.div 
                key={index}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                custom={index}
                variants={timelineItemVariants}
                whileHover="hover"
              >
                {/* Timeline dot with pulsing effect */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full z-10 flex items-center justify-center border-4 border-[#1a1a1a] shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: `linear-gradient(to right, ${startColor}, ${phaseColor})`,
                    boxShadow: `0 0 10px ${phaseColor}80`
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        `0 0 0px ${phaseColor}00`,
                        `0 0 10px ${phaseColor}60`,
                        `0 0 0px ${phaseColor}00`
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </motion.div>
                
                {/* Content spacer for alignment */}
                <div className={`hidden md:block w-[45%]`}></div>
                
                {/* Content card */}
                <motion.div 
                  className={`w-full md:w-[45%] bg-[#2c2c2c] p-6 rounded-2xl border border-gray-800 shadow-lg shadow-black/50 relative group overflow-hidden`}
                >
                  {/* Hover effect glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom right, ${phaseColor}1A, ${startColor}1A)`
                    }}
                  />
                  
                  {/* Arrow indicator */}
                  <div 
                    className={`absolute top-1/2 -mt-2 w-4 h-4 bg-[#2c2c2c] border-t border-r ${
                      index % 2 === 0 ? 'right-[-8px] border-gray-800 rotate-45' : 'left-[-8px] border-gray-800 rotate-[225deg]'
                    } hidden md:block`}
                  ></div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    {/* Changed the gradient color behind the emojis here */}
                    <div 
                      className="flex-shrink-0 text-2xl md:text-3xl p-2 md:p-3 rounded-xl shadow-lg shadow-black/50"
                      style={{
                        background: `linear-gradient(to bottom right, #F8A5A5, #A5D6B7)` // Coral to mint gradient
                      }}
                    >
                      {phase.icon}
                    </div>
                    
                    <h3 
                      className="text-xl font-bold text-transparent bg-clip-text"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${startColor}, ${phaseColor})`
                      }}
                    >
                      {phase.title}
                    </h3>
                  </div>
                  
                  <p 
                    className="text-gray-300 text-base leading-relaxed pl-2 border-l-2"
                    style={{
                      borderColor: `${phaseColor}4D`
                    }}
                  >
                    {phase.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${phaseColor}B3, ${startColor}B3)`
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              delay: 0.5
            }
          }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative py-3 px-8 text-white rounded-full font-semibold text-lg overflow-hidden group shadow-lg shadow-black/30 bg-gradient-to-r from-[#D14540] to-[#C03A36]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: `bg-gradient-to-r from-[#D14540] to-[#C03A36]` // 30% opacity
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              backgroundImage: `bg-gradient-to-r from-[#D14540] to-[#C03A36]`
            }}
          >
            {/* Button background animation */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#D14540] to-[#C03A36]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
              style={{
                // backgroundImage: `linear-gradient(to right, ${startColor}, ${midColor}, ${endColor}, ${midColor}, ${startColor})`,
                backgroundSize: "200% 100%"
              }}
            />
            
            {/* Text and icon */}
            <span className="relative z-10 flex items-center gap-2">
              Explore Training
              <svg className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TrainingApproach;




