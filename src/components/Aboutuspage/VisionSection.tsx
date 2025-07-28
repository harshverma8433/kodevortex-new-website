import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// import AutoFeatureRotation from './AutoFeatureRotation';


const VisionSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const imageControls = useAnimation();
  
  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    setMousePosition({ x, y });
  };







  const AutoFeatureRotation = ({ setActiveFeature, totalFeatures, intervalTime }) => {
    useEffect(() => {
      // Set up auto-rotation interval
      const rotationInterval = setInterval(() => {
        setActiveFeature(current => (current + 1) % totalFeatures);
      }, intervalTime);
      
      // Clean up interval on component unmount
      return () => clearInterval(rotationInterval);
    }, [setActiveFeature, totalFeatures, intervalTime]);
    
    // This is a utility component with no UI rendering
    return null;
  };
  

  
  useEffect(() => {
    // Convert to parallax movement with smoother animation
    const moveX = mousePosition.x * 25; 
    const moveY = mousePosition.y * 25;
    
    imageControls.start({
      x: moveX,
      y: moveY,
      transition: { type: "spring", stiffness: 250, damping: 25 }
    });
  }, [mousePosition, imageControls]);

  // Cycle through features automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };
  
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      clipPath: "inset(0 100% 0 0)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      clipPath: "inset(0 0 0 0)",
      transition: { 
        duration: 0.7, 
        delay: 0.3,
        ease: "easeOut" 
      }
    }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7, 
        delay: 0.4,
        ease: "easeOut" 
      }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };
  
  // Enhanced floating animation
  const floatingIconsVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-8, 8, -8],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Improved particle effect for background decoration
  const particleCount = 30;
  const particles = [...Array(particleCount)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    speed: Math.random() * 1 + 0.2,
    color: [
      'rgba(99, 102, 241, 0.6)', // indigo
      'rgba(139, 92, 246, 0.6)', // violet
      'rgba(217, 70, 239, 0.6)', // fuchsia
      'rgba(236, 72, 153, 0.6)'  // pink
    ][Math.floor(Math.random() * 4)]
  }));

  // Feature data with enhanced descriptions
  const features = [
    { 
      icon: "🎓", 
      title: "Immersive Education", 
      desc: "Interactive learning resources built for real-world application and mastery" 
    },
    { 
      icon: "🔗", 
      title: "Vibrant Community", 
      desc: "Connect with innovators, mentors and peers who inspire growth" 
    },
    { 
      icon: "💼", 
      title: "Career Acceleration", 
      desc: "Industry-aligned skills and personalized pathways to professional success" 
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-zinc-800">
      {/* Enhanced background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.18),transparent_70%)]"></div>
        
        {/* Animated particles with improved effects */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
            }}
            animate={{
              y: [0, particle.speed * 30, 0],
              x: [0, particle.speed * 10 * (Math.random() > 0.5 ? 1 : -1), 0],
              opacity: [particle.opacity, particle.opacity * 1.8, particle.opacity]
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + particle.speed * 6,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Enhanced glass morphism accent elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute top-2/3 left-1/4 w-64 h-64 rounded-full bg-pink-600/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-24">
          <motion.div
            className="relative inline-block mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-400 text-4xl uppercase tracking-widest font-medium">
              Our Purpose
            </span>
            <motion.div
              className="absolute -bottom-2 left-1/2 h-0.5 bg-indigo-500/40"
              initial={{ width: 0, x: "-50%" }}
              whileInView={{ width: "110%", x: "-55%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-center text-5xl md:text-6xl font-bold tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
          >
            DEFINING THE FUTURE
          </motion.h2>
          
          <motion.div 
            className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"
            initial={{ width: "0px" }}
            whileInView={{ width: "140px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content side - now on the left with enhanced styling */}
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <div className="p-[2px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-lg shadow-purple-900/20">
              <div className="bg-zinc-900 rounded-2xl p-10 backdrop-blur-xl">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mr-5 shadow-lg shadow-purple-700/20">
                    <motion.span 
                      className="text-3xl"
                      variants={floatingIconsVariants}
                      initial="initial"
                      animate="animate"
                    >
                      ✨
                    </motion.span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                </div>
                
                <motion.p 
                  variants={textVariants}
                  className="text-xl text-zinc-200 mb-6 leading-relaxed"
                >
                  At <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 font-semibold">KodeVortex</span>, our vision is to redefine tech education by making high-quality, industry-aligned learning accessible to everyone. 
                  We aspire to create a future where learners seamlessly transition from academia to the professional world.
                </motion.p>
                
                <motion.p 
                  variants={textVariants} 
                  className="text-lg text-zinc-300 mb-10 leading-relaxed"
                >
                  By fostering innovation, hands-on learning, and career-driven mentorship, we aim to build a community of skilled professionals and future leaders who drive technological advancements.
                </motion.p>
                
                <div className="flex flex-wrap gap-5">
                  <motion.button 
                    className="group relative px-8 py-4 overflow-hidden rounded-full text-white font-medium"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <motion.span 
                      className="relative flex items-center"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Join Our Community
                      <svg className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.span>
                  </motion.button>
                  
                  <motion.button 
                    className="group relative px-8 py-4 overflow-hidden rounded-full text-white font-medium"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 bg-zinc-800"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <span className="relative">Learn More</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Visual side with enhanced orbital theme */}
          <motion.div 
  className="order-1 lg:order-2 relative"
  initial="hidden"
  whileInView="visible"
  whileHover="hover"
  viewport={{ once: true }}
  variants={imageVariants}
  onMouseMove={handleMouseMove}
>
  <div className="relative w-full aspect-square max-w-md mx-auto">
    {/* Enhanced main circular container */}
    <motion.div 
      className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-600 p-1"
      animate={{
        boxShadow: ['0 0 20px rgba(139, 92, 246, 0.3)', '0 0 40px rgba(139, 92, 246, 0.5)', '0 0 20px rgba(139, 92, 246, 0.3)']
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
        {/* Enhanced background elements */}
        <motion.div
          className="absolute w-full h-full"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            // background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
            backgroundSize: '150% 150%'
          }}
        />
        
        {/* Enhanced center icon */}
        <motion.div
          className="relative z-10 w-3/4 h-3/4 flex items-center justify-center"
          animate={imageControls}
        >
          {/* Central icon with glow effect */}
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 20px rgba(139, 92, 246, 0.5)',
                '0 0 40px rgba(139, 92, 246, 0.7)',
                '0 0 20px rgba(139, 92, 246, 0.5)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <span className="text-5xl">🚀</span>
          </motion.div>
        </motion.div>
        
        {/* Orbital rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-indigo-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute inset-[10%] rounded-full border-2 border-purple-500/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute inset-[20%] rounded-full border-2 border-pink-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Orbital feature icons - with sequential animation */}
        {features.map((feature, index) => {
          const isActive = index === activeFeature;
          // Adjusted angles to make features more evenly distributed
          const angle = (index * 120 + 0) * (Math.PI / 180);
          // Reduced radius slightly to keep features more visible on smaller screens
          const radius = 40; // percentage of container
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={index}
              className={`absolute w-16 h-16 rounded-full flex items-center justify-center z-20 cursor-pointer ${
                isActive ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500' : 'bg-zinc-800'
              }`}
              style={{
                left: `calc(50% + ${x}%)`,
                top: `calc(50% + ${y}%)`,
                transform: 'translate(-50%, -50%)'
              }}
              // Sequential feature appearance animation
              initial={{ 
                opacity: 0, 
                scale: 0.5 
              }}
              animate={{ 
                opacity: 1, 
                scale: isActive ? 1.2 : 1,
                transition: {
                  opacity: { delay: index * 0.5, duration: 0.8 },
                  scale: { delay: index * 0.5, duration: 0.8, type: "spring", stiffness: 200 }
                },
                boxShadow: isActive 
                  ? ['0 0 15px rgba(139, 92, 246, 0.5)', '0 0 25px rgba(139, 92, 246, 0.7)', '0 0 15px rgba(139, 92, 246, 0.5)']
                  : '0 0 10px rgba(139, 92, 246, 0.2)'
              }}
              whileHover={{ 
                scale: isActive ? 1.25 : 1.15,
                transition: { duration: 0.3 }
              }}
              onClick={() => {
                setActiveFeature(index);
                // Add haptic feedback if supported
                if ('vibrate' in navigator) {
                  navigator.vibrate(50);
                }
              }}
            >
              {/* Emoji with entrance animation */}
              <motion.span 
                className="text-2xl"
                initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  rotate: 0, 
                  scale: 1,
                  transition: {
                    delay: index * 0.5 + 0.3,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200
                  }
                }}
              >
                {feature.icon}
              </motion.span>
              
              {/* Feature label that displays even when not active */}
              <motion.div
                className={`absolute bg-zinc-900/90 px-3 py-2 rounded-xl text-white text-center shadow-lg border border-purple-500/30 backdrop-blur-sm ${
                  isActive ? 'z-40' : 'z-10'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: isActive ? 1 : 0,
                  y: 0,
                  scale: isActive ? 1 : 0.95,
                  transition: {
                    opacity: { duration: 0.3 },
                    y: { duration: 0.5, type: "spring" }
                  }
                }}
                // Dynamic positioning based on feature location
                style={{
                  // Calculate position based on angle
                  ...(y < 0 
                    ? { bottom: '-85px', left: '50%', transform: 'translateX(-50%)' } // Top feature
                    : x < 0 
                      ? { right: '-150px', top: '50%', transform: 'translateY(-50%)' } // Left feature
                      : { left: '-150px', top: '50%', transform: 'translateY(-50%)' }), // Right feature
                  width: isActive ? '220px' : '180px',
                  pointerEvents: isActive ? 'auto' : 'none'
                }}
              >
                <motion.div 
                  className="font-semibold mb-1 text-base"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: { delay: 0.1, duration: 0.3 }
                  }}
                >
                  {feature.title}
                </motion.div>
                <motion.div 
                  className="text-xs text-zinc-300"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: { delay: 0.2, duration: 0.3 }
                  }}
                >
                  {feature.desc}
                </motion.div>
              </motion.div>
              
              {/* Improved pulse animation for inactive features */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-indigo-500/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5 + 1,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              )}
              
              {/* Connecting line from feature to label with animation */}
              {isActive && (
                <motion.div
                  className="absolute bg-gradient-to-r from-purple-500/50 to-pink-500/50 h-0.5"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scaleX: 1,
                    transition: { duration: 0.4, delay: 0.1 }
                  }}
                  style={{
                    // Calculate position and width of connector line based on feature position
                    ...(y < 0 
                      ? { width: '2px', height: '25px', left: '50%', bottom: '-25px', transform: 'translateX(-50%)' } // Top feature
                      : x < 0 
                        ? { width: '25px', height: '2px', right: '-25px', top: '50%', transform: 'translateY(-50%)' } // Left feature
                        : { width: '25px', height: '2px', left: '-25px', top: '50%', transform: 'translateY(-50%)' }), // Right feature
                    transformOrigin: y < 0 ? 'top' : (x < 0 ? 'left' : 'right')
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
    
    {/* Auto-rotation logic for cycling through features */}
    <AutoFeatureRotation 
      setActiveFeature={setActiveFeature} 
      totalFeatures={features.length} 
      intervalTime={5000} 
    />
  </div>
</motion.div>





        </div>
        
        {/* Enhanced feature cards */}
        <div className="mt-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-4">Core Values</h3>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Our approach is built on principles that ensure holistic growth and real-world success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌟",
                title: "Excellence",
                desc: "We strive for excellence in everything we do, from curriculum design to community engagement."
              },
              {
                icon: "🤝",
                title: "Collaboration",
                desc: "We believe in the power of teamwork and shared knowledge to create better outcomes."
              },
              {
                icon: "🔍",
                title: "Innovation",
                desc: "We continuously explore new approaches and technologies to enhance the learning experience."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-[1px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-zinc-900 h-full rounded-xl p-8 flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6"
                    variants={floatingIconsVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <span className="text-3xl">{value.icon}</span>
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-zinc-300">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;