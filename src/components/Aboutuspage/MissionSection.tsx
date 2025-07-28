// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const MissionSection = () => {
//   const sectionRef = useRef(null);
//   const [isInView, setIsInView] = useState(false);
//   const controls = useAnimation();

//   // Intersection observer for scroll-based animations
//   useEffect(() => {
//     if (!sectionRef.current) return;
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           controls.start("visible");
//         }
//       },
//       { threshold: 0.2 }
//     );
    
//     observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, [controls]);
  
//   // Animation variants
//   const titleVariants = {
//     hidden: { x: -50, opacity: 0 },
//     visible: { 
//       x: 0, 
//       opacity: 1, 
//       transition: { 
//         duration: 0.8, 
//         ease: "easeOut"
//       } 
//     }
//   };
  
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.8, 
//         ease: "easeOut",
//         delay: 0.2
//       } 
//     },
//     hover: { 
//       scale: 1.03,
//       boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.4)",
//       transition: { 
//         duration: 0.3,
//         ease: "easeOut" 
//       } 
//     }
//   };
  
//   const textVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { 
//       opacity: 1, 
//       x: 0, 
//       transition: { 
//         duration: 0.8, 
//         ease: "easeOut",
//         delay: 0.3
//       } 
//     }
//   };

//   // Enhanced Floating Elements Background
//   const FloatingElements = () => {
//     const elements = Array.from({ length: 30 }, (_, i) => ({
//       size: Math.random() * 8 + 2,
//       delay: Math.random() * 5,
//       duration: Math.random() * 15 + 15,
//       type: i % 5 === 0 ? 'square' : i % 5 === 1 ? 'ring' : 'dot'
//     }));
    
//     return (
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {elements.map((element, i) => (
//           <motion.div
//             key={i}
//             className={`absolute ${
//               element.type === 'square' 
//                 ? 'rounded-md bg-indigo-500/10 border border-indigo-500/20' 
//                 : element.type === 'ring'
//                 ? 'rounded-full border-2 border-purple-500/20 bg-transparent'
//                 : 'rounded-full bg-indigo-500/15'
//             }`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${element.size * (element.type === 'ring' ? 3 : 1)}px`,
//               height: `${element.size * (element.type === 'ring' ? 3 : 1)}px`,
//               filter: element.type === 'dot' ? 'blur(1px)' : 'none',
//               transform: element.type === 'square' ? 'rotate(45deg)' : 'none'
//             }}
//             animate={{
//               y: [0, -30, 0, 30, 0],
//               x: [0, 20, 0, -20, 0],
//               opacity: [0.3, 0.7, 0.3],
//               rotate: element.type === 'square' ? [45, 90, 45, 0, 45] : 0
//             }}
//             transition={{
//               duration: element.duration,
//               repeat: Infinity,
//               delay: element.delay,
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </div>
//     );
//   };

//   // 3D Parallax Effect for Cards
//   const ParallaxCard = ({ children, depth = 5 }) => {
//     const [rotateX, setRotateX] = useState(0);
//     const [rotateY, setRotateY] = useState(0);
//     const cardRef = useRef(null);
    
//     const handleMouseMove = (e) => {
//       if (!cardRef.current) return;
      
//       const rect = cardRef.current.getBoundingClientRect();
//       const centerX = rect.left + rect.width / 2;
//       const centerY = rect.top + rect.height / 2;
      
//       const mouseX = e.clientX - centerX;
//       const mouseY = e.clientY - centerY;
      
//       const rotateXValue = (mouseY / (rect.height / 2)) * -depth;
//       const rotateYValue = (mouseX / (rect.width / 2)) * depth;
      
//       setRotateX(rotateXValue);
//       setRotateY(rotateYValue);
//     };
    
//     const handleMouseLeave = () => {
//       setRotateX(0);
//       setRotateY(0);
//     };
    
//     return (
//       <motion.div 
//         ref={cardRef}
//         className="relative transition-all duration-200 ease-out transform-gpu"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           transformStyle: "preserve-3d",
//           transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
//         }}
//       >
//         {children}
        
//         {/* Shine effect */}
//         <div 
//           className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           style={{
//             transform: `translateZ(10px)`,
//             backgroundPosition: `${50 + rotateY * 2}% ${50 - rotateX * 2}%`,
//           }}
//         />
//       </motion.div>
//     );
//   };

//   return (
//     <div 
//       ref={sectionRef}
//       className="relative py-28 px-6 lg:px-12 overflow-hidden bg-slate-900"
//     >
//       {/* Enhanced gradient background */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-60 pointer-events-none">
//         <motion.div 
//           className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-900/40 via-purple-900/20 to-transparent"
//           animate={{
//             opacity: [0.4, 0.6, 0.4],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-purple-900/40 via-blue-900/20 to-transparent"
//           animate={{
//             opacity: [0.4, 0.6, 0.4],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 4
//           }}
//         />
//       </div>
      
//       {/* Enhanced floating elements background */}
//       <FloatingElements />
      
//       {/* Diagonal line decoration with animation */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.svg 
//           className="absolute top-0 left-0 w-full h-full opacity-10" 
//           width="100%" 
//           height="100%"
//           animate={{
//             opacity: [0.08, 0.12, 0.08],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
//             <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
//           </pattern>
//           <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalLines)" />
//         </motion.svg>
//       </div>
      
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* Left side: Title and Content */}
//           <div className="w-full lg:w-1/2 order-2 lg:order-1">
//             <motion.div
//               initial="hidden"
//               animate={controls}
//               variants={titleVariants}
//               className="mb-12"
//             >
//               <span className="inline-block text-indigo-300 font-medium tracking-wide uppercase mb-2 px-4 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/20 text-sm">Discover Our Purpose</span>
//               <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-white mt-6">
//                 Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-size-200 animate-text-shine">Mission</span>
//               </h2>
//               <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 w-24 mt-6 mb-8 rounded-full" />
              
//               <motion.div
//                 initial="hidden"
//                 animate={controls}
//                 variants={textVariants}
//               >
//                 <p className="text-slate-300 text-lg leading-relaxed mb-6">
//                   <span className="text-indigo-300 font-semibold">At KodeVortex</span>, we're dedicated to cultivating the next generation of tech innovators through immersive, hands-on learning experiences that bridge academic knowledge with industry-ready skills.
//                 </p>
//                 <p className="text-slate-300 text-lg leading-relaxed mb-8">
//                   Our ecosystem combines competitive programming, real-world projects, and personalized mentorship to prepare you for success in the dynamic tech landscape.
//                 </p>
//               </motion.div>
              
//               {/* Enhanced Feature Grid */}
//               <div className="grid grid-cols-2 gap-5 mb-10">
//                 {[
//                   {name: 'Hands-on Projects', icon: '⚡', color: 'from-indigo-500 to-blue-500'},
//                   {name: 'Expert Mentors', icon: '👨‍💻', color: 'from-purple-500 to-indigo-500'},
//                   {name: 'Certifications', icon: '🏆', color: 'from-blue-500 to-indigo-500'},
//                   {name: 'Innovation Hub', icon: '🚀', color: 'from-indigo-500 to-purple-500'}
//                 ].map((feature, index) => (
//                   <motion.div
//                     key={feature.name}
//                     className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-center overflow-hidden relative group"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.5 + (index * 0.1) }}
//                     whileHover={{ 
//                       y: -3,
//                       transition: { duration: 0.2 }
//                     }}
//                   >
//                     {/* Animated gradient border on hover */}
//                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20`} />
//                       <div className="absolute inset-[1px] bg-slate-800 rounded-xl" />
//                     </div>
                    
//                     <div className={`relative z-10 w-11 h-11 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mr-3 text-xl`}>
//                       {feature.icon}
//                     </div>
//                     <span className="relative z-10 text-white font-medium">{feature.name}</span>
//                   </motion.div>
//                 ))}
//               </div>
              
//               {/* Enhanced Call-to-action */}
//               <div className="flex flex-wrap gap-4">
//                 <motion.button
//                   className="px-7 py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-200 rounded-lg text-white font-medium shadow-lg shadow-indigo-900/30 relative overflow-hidden group"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.9 }}
//                   whileHover={{ 
//                     scale: 1.03,
//                     boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.5)'
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span className="relative z-10">Get Started</span>
//                   {/* Shine effect */}
//                   <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
//                 </motion.button>
                
//                 <motion.button
//                   className="px-7 py-3.5 bg-transparent border border-indigo-500/30 hover:border-indigo-400 rounded-lg text-indigo-300 font-medium relative overflow-hidden group"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 1 }}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span className="relative z-10">Learn More</span>
//                   {/* Subtle glow on hover */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-indigo-500/10" />
//                 </motion.button>
//               </div>
//             </motion.div>
//           </div>
          
//           {/* Right side: Enhanced Visual Card with 3D effect */}
//           <div className="w-full lg:w-1/2 order-1 lg:order-2">
//             <motion.div 
//               initial="hidden"
//               animate={controls}
//               variants={cardVariants}
//               className="group"
//             >
//               <ParallaxCard>
//                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-gradient-to-b from-slate-800 to-slate-900">
//                   {/* Glowing border effect */}
//                   <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                     <div className="absolute inset-[-1px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
//                   </div>
                  
//                   <div className="p-8 lg:p-12 relative">
//                     {/* Enhanced Card header */}
//                     <div className="flex items-center mb-8">
//                       <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl mr-4 shadow-lg shadow-indigo-500/30 rotate-3">
//                         🚀
//                       </div>
//                       <h3 className="text-2xl font-bold text-white">
//                         Tech Education Reimagined
//                       </h3>
//                     </div>
                    
//                     {/* Enhanced Central visualization */}
//                     <div className="relative aspect-video bg-slate-950 rounded-lg overflow-hidden mb-8 flex items-center justify-center border border-slate-800">
//                       {/* Enhanced animated gradient background */}
//                       <div className="absolute inset-0">
//                         <motion.div 
//                           className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-slate-900/80"
//                           animate={{
//                             backgroundPosition: ['0% 0%', '100% 100%'],
//                           }}
//                           transition={{
//                             duration: 15,
//                             repeat: Infinity,
//                             repeatType: "reverse",
//                             ease: "linear"
//                           }}
//                           style={{
//                             backgroundSize: '200% 200%',
//                           }}
//                         />
                        
//                         {/* Grid overlay */}
//                         <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.075)_1px,transparent_1px)] bg-[size:20px_20px]" />
//                       </div>
                      
//                       {/* Enhanced Connection nodes */}
//                       {[0, 1, 2, 3, 4].map((idx) => (
//                         <React.Fragment key={`node-${idx}`}>
//                           <motion.div 
//                             className={`absolute w-5 h-5 rounded-full ${
//                               idx % 2 === 0 
//                                 ? 'bg-gradient-to-r from-indigo-500 to-indigo-400 shadow-lg shadow-indigo-500/40' 
//                                 : 'bg-gradient-to-r from-purple-500 to-purple-400 shadow-lg shadow-purple-500/40'
//                             }`}
//                             style={{
//                               top: `${20 + (idx % 3) * 30}%`,
//                               left: `${10 + idx * 20}%`,
//                             }}
//                             animate={{
//                               scale: [1, 1.2, 1],
//                               opacity: [0.7, 1, 0.7],
//                               boxShadow: [
//                                 `0 0 0 rgba(${idx % 2 === 0 ? '99, 102, 241' : '167, 139, 250'}, 0.4)`,
//                                 `0 0 20px rgba(${idx % 2 === 0 ? '99, 102, 241' : '167, 139, 250'}, 0.7)`,
//                                 `0 0 0 rgba(${idx % 2 === 0 ? '99, 102, 241' : '167, 139, 250'}, 0.4)`
//                               ]
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               delay: idx * 0.5,
//                             }}
//                           />
                          
//                           {idx < 4 && (
//                             <svg 
//                               className="absolute pointer-events-none" 
//                               width="100" 
//                               height="100"
//                               style={{
//                                 top: `${20 + (idx % 3) * 30 - 1}%`,
//                                 left: `${10 + idx * 20 + 1}%`,
//                               }}
//                             >
//                               <motion.line 
//                                 x1="8" 
//                                 y1="8" 
//                                 x2="80" 
//                                 y2={(idx % 2 === 0) ? "40" : "8"}
//                                 stroke={idx % 2 === 0 ? "#818cf8" : "#a78bfa"}
//                                 strokeWidth="2"
//                                 strokeDasharray="5,5"
//                                 initial={{ pathLength: 0, opacity: 0 }}
//                                 animate={{ 
//                                   pathLength: 1, 
//                                   opacity: [0.3, 0.7, 0.3]
//                                 }}
//                                 transition={{ 
//                                   duration: 3, 
//                                   delay: idx * 0.2,
//                                   repeat: Infinity,
//                                   ease: "easeInOut"
//                                 }}
//                               />
//                             </svg>
//                           )}
//                         </React.Fragment>
//                       ))}
                      
//                       {/* Enhanced Central element */}
//                       <motion.div
//                         className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border-4 border-indigo-500/50 flex items-center justify-center shadow-xl shadow-indigo-500/20"
//                         animate={{
//                           scale: [1, 1.05, 1],
//                           rotate: [0, 2, 0, -2, 0],
//                           boxShadow: [
//                             '0 0 20px 0 rgba(99, 102, 241, 0.3)',
//                             '0 0 30px 5px rgba(99, 102, 241, 0.5)',
//                             '0 0 20px 0 rgba(99, 102, 241, 0.3)'
//                           ]
//                         }}
//                         transition={{
//                           duration: 5,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                       >
//                         <div className="text-5xl">👩‍💻</div>
//                         <motion.div 
//                           className="absolute -inset-6 rounded-full border-2 border-dashed border-indigo-500/40"
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             duration: 20,
//                             repeat: Infinity,
//                             ease: "linear"
//                           }}
//                         />
//                         <motion.div 
//                           className="absolute -inset-10 rounded-full border border-purple-500/20"
//                           animate={{ 
//                             scale: [1, 1.1, 1],
//                             opacity: [0.5, 0.8, 0.5]
//                           }}
//                           transition={{
//                             duration: 4,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                             delay: 1
//                           }}
//                         />
//                       </motion.div>
//                     </div>
                    
//                     {/* Enhanced Stats */}
//                     <div className="grid grid-cols-2 gap-6">
//                       {[
//                         { label: 'Students Trained', value: '10,000+', icon: '👨‍🎓', color: 'from-indigo-500 to-blue-500' },
//                         { label: 'Success Rate', value: '94%', icon: '📈', color: 'from-green-500 to-emerald-500' },
//                         { label: 'Projects Completed', value: '7,500+', icon: '💻', color: 'from-purple-500 to-indigo-500' },
//                         { label: 'Top Companies', value: '250+', icon: '🏢', color: 'from-amber-500 to-orange-500' }
//                       ].map((stat, idx) => (
//                         <motion.div 
//                           key={stat.label}
//                           className="text-center p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden group"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={isInView ? { opacity: 1, y: 0 } : {}}
//                           transition={{ delay: 0.8 + (idx * 0.1) }}
//                           whileHover={{ 
//                             y: -3,
//                             transition: { duration: 0.2 }
//                           }}
//                         >
//                           {/* Gradient hover effect */}
//                           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20`} />
//                             <div className="absolute inset-[1px] bg-slate-800 rounded-lg" />
//                           </div>
                          
//                           <div className="relative z-10">
//                             <div className="text-xl inline-block mb-3 opacity-90">{stat.icon}</div>
//                             <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
//                             <div className="text-slate-400 text-sm">{stat.label}</div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </ParallaxCard>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MissionSection;




import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const MissionSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  // Intersection observer for scroll-based animations
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);
  
  // Animation variants
  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      } 
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2
      } 
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.4)",
      transition: { 
        duration: 0.3,
        ease: "easeOut" 
      } 
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.3
      } 
    }
  };

  // Enhanced Floating Elements Background
  const FloatingElements = () => {
    const elements = Array.from({ length: 30 }, (_, i) => ({
      size: Math.random() * 8 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 15,
      type: i % 5 === 0 ? 'square' : i % 5 === 1 ? 'ring' : 'dot'
    }));
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {elements.map((element, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              element.type === 'square' 
                ? 'rounded-md bg-purple-500/10 border border-purple-500/20' 
                : element.type === 'ring'
                ? 'rounded-full border-2 border-indigo-500/20 bg-transparent'
                : 'rounded-full bg-indigo-500/15'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${element.size * (element.type === 'ring' ? 3 : 1)}px`,
              height: `${element.size * (element.type === 'ring' ? 3 : 1)}px`,
              filter: element.type === 'dot' ? 'blur(1px)' : 'none',
              transform: element.type === 'square' ? 'rotate(45deg)' : 'none'
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, 0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: element.type === 'square' ? [45, 90, 45, 0, 45] : 0
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  // 3D Parallax Effect for Cards
  const ParallaxCard = ({ children, depth = 5 }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const cardRef = useRef(null);
    
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateXValue = (mouseY / (rect.height / 2)) * -depth;
      const rotateYValue = (mouseX / (rect.width / 2)) * depth;
      
      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    };
    
    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };
    
    return (
      <motion.div 
        ref={cardRef}
        className="relative transition-all duration-200 ease-out transform-gpu"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }}
      >
        {children}
        
        {/* Shine effect */}
        <div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: `translateZ(10px)`,
            backgroundPosition: `${50 + rotateY * 2}% ${50 - rotateX * 2}%`,
          }}
        />
      </motion.div>
    );
  };

  return (
    <div 
      ref={sectionRef}
      className="relative py-28 px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-zinc-800"
    >
      {/* Enhanced gradient background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-60 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.18),transparent_70%)]"></div>
        <motion.div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-900/40 via-purple-900/20 to-transparent"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-purple-900/40 via-indigo-900/20 to-transparent"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
      
      {/* Enhanced floating elements background */}
      <FloatingElements />
      
      {/* Diagonal line decoration with animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.svg 
          className="absolute top-0 left-0 w-full h-full opacity-10" 
          width="100%" 
          height="100%"
          animate={{
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalLines)" />
        </motion.svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side: Title and Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={titleVariants}
              className="mb-12"
            >
              <span className="inline-block text-indigo-300 font-medium tracking-wide uppercase mb-2 px-4 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/20 text-sm">Discover Our Purpose</span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-white mt-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-size-200 animate-text-shine">Mission</span>
              </h2>
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-24 mt-6 mb-8 rounded-full" />
              
              <motion.div
                initial="hidden"
                animate={controls}
                variants={textVariants}
              >
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  <span className="text-indigo-300 font-semibold">At KodeVortex</span>, we're dedicated to cultivating the next generation of tech innovators through immersive, hands-on learning experiences that bridge academic knowledge with industry-ready skills.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  Our ecosystem combines competitive programming, real-world projects, and personalized mentorship to prepare you for success in the dynamic tech landscape.
                </p>
              </motion.div>
              
              {/* Enhanced Feature Grid */}
              <div className="grid grid-cols-2 gap-5 mb-10">
                {[
                  {name: 'Hands-on Projects', icon: '⚡', color: 'from-indigo-500 to-purple-500'},
                  {name: 'Expert Mentors', icon: '👨‍💻', color: 'from-purple-500 to-pink-500'},
                  {name: 'Certifications', icon: '🏆', color: 'from-indigo-500 to-purple-500'},
                  {name: 'Innovation Hub', icon: '🚀', color: 'from-purple-500 to-pink-500'}
                ].map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    className="p-4 bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700/50 flex items-center overflow-hidden relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    whileHover={{ 
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20`} />
                      <div className="absolute inset-[1px] bg-zinc-800 rounded-xl" />
                    </div>
                    
                    <div className={`relative z-10 w-11 h-11 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mr-3 text-xl`}>
                      {feature.icon}
                    </div>
                    <span className="relative z-10 text-white font-medium">{feature.name}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced Call-to-action */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  className="px-7 py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg text-white font-medium shadow-lg shadow-purple-900/30 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.5)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get Started</span>
                  {/* Shine effect */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
                </motion.button>
                
                <motion.button
                  className="px-7 py-3.5 bg-transparent border border-purple-500/30 hover:border-purple-400 rounded-lg text-indigo-300 font-medium relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/0 via-indigo-900/0 to-indigo-900/0 group-hover:from-indigo-900/20 group-hover:via-purple-900/20 group-hover:to-pink-900/20 transition-all duration-500"></div>
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Right side: Feature Card */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <ParallaxCard depth={3}>
              <motion.div
                className="rounded-2xl overflow-hidden group"
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                whileHover="hover"
              >
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-2xl border border-zinc-700/30 relative overflow-hidden">
                  {/* Card inner glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 8V12L14.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">Transform Your Journey</h3>
                    <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 w-12 mb-6 rounded-full" />
                    
                    <p className="text-zinc-300 mb-8 leading-relaxed">
                      We believe in learning by doing. Our immersive curriculum combines theoretical foundations with hands-on application, fostering critical thinking and problem-solving skills essential for success in today's tech-driven world.
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {[
                        {value: '95%', label: 'Job Placement', icon: '📈'},
                        {value: '200+', label: 'Industry Partners', icon: '🤝'},
                        {value: '50+', label: 'Tech Challenges', icon: '💡'},
                        {value: '24/7', label: 'Learning Support', icon: '🔄'}
                      ].map((stat, index) => (
                        <motion.div 
                          key={stat.label}
                          className="bg-zinc-800/50 backdrop-blur rounded-xl p-4 border border-zinc-700/30"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.7 + (index * 0.1) }}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xl">{stat.icon}</span>
                            <span className="text-zinc-400 text-sm">{stat.label}</span>
                          </div>
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <motion.div 
                      className="relative bg-zinc-800/40 p-6 rounded-xl border border-zinc-700/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.1 }}
                    >
                      <svg className="absolute top-4 left-4 w-12 h-12 text-indigo-500/20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9994 9.00006C11.9994 12.3138 9.31328 15.0001 5.99996 15.0001C5.77269 15.0001 5.54988 14.9833 5.33301 14.9513C6.39504 17.9235 9.36648 20.0001 12.9375 20.0001V22.0001C8.46138 22.0001 4.52421 19.1459 3.02823 15.0001C1.63098 15.0001 0.5 13.87 0.5 12.474C0.5 11.078 1.63098 9.94795 3.02823 9.94795H4.07653C4.02602 9.63767 4 9.32229 4 9.00006C4 5.68629 6.68629 3.00006 9.99996 3.00006C11.4605 3.00006 12.7817 3.5198 13.826 4.37391L12.2782 6.24206C11.6342 5.76369 10.8437 5.48277 9.99996 5.48277C8.06697 5.48277 6.5 7.04882 6.5 9.00006H11.9994ZM23.4979 9.94702H22.4496C22.5001 9.63674 22.5261 9.32137 22.5261 8.99913C22.5261 5.68536 19.8399 2.99913 16.5261 2.99913C15.0656 2.99913 13.7444 3.51887 12.7 4.37299L14.2479 6.24113C14.8919 5.76276 15.6824 5.48184 16.5261 5.48184C18.4591 5.48184 20.0261 7.04789 20.0261 8.99913H14.5267C14.5267 12.3129 17.2129 14.9992 20.5262 14.9992C20.7535 14.9992 20.9763 14.9824 21.1931 14.9504C20.1311 17.9225 17.1597 19.9992 13.5886 19.9992V21.9992C18.0647 21.9992 22.0019 19.145 23.4979 14.9992C24.8951 14.9992 26.0261 13.8691 26.0261 12.473C26.0261 11.077 24.8951 9.94702 23.4979 9.94702Z" />
                      </svg>
                      
                      <p className="text-zinc-300 italic mb-4 relative z-10">
                        "KodeVortex transformed my coding journey - from a beginner to a confident developer with a dream job in just 6 months!"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold mr-3">
                          JS
                        </div>
                        <div>
                          <p className="text-white font-medium">Jamie Smith</p>
                          <p className="text-zinc-400 text-sm">Software Engineer @ TechGiant</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ParallaxCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;