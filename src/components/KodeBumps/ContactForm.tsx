import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import instaLogo from './insta_svg.svg';
import xLogo from './x_svg.svg';
import linkedinLogo from './linkedin_svg.svg';

const ContactForm = () => {
  const [formData, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    setState({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

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
      boxShadow: "0px 15px 30px rgba(242, 132, 116, 0.4)",
      transition: { duration: 0.3 }
    }
  };

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

  return (
    <motion.div
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#141414] via-[#1c1c1c] to-[#252525] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Enhanced abstract geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {/* Large circle */}
        <motion.div
          className="absolute w-[250px] sm:w-[350px] md:w-[550px] h-[250px] sm:h-[350px] md:h-[550px] rounded-full border-2 border-[#20B2AA]/20 -right-[75px] sm:-right-[100px] md:-right-[150px] -top-[75px] sm:-top-[100px] md:-top-[150px]"
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
        
        {/* Medium circle */}
        <motion.div
          className="absolute w-[200px] sm:w-[250px] md:w-[350px] h-[200px] sm:h-[250px] md:h-[350px] rounded-full border border-[#F28474]/15 right-[10%] sm:right-[15%] md:right-[20%] bottom-[5%] sm:bottom-[7%] md:bottom-[10%]"
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
        
        {/* Small circle */}
        <motion.div
          className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-[150px] sm:h-[200px] md:h-[250px] rounded-full border border-[#F28474]/20 -left-[50px] sm:-left-[75px] md:-left-[100px] bottom-[10%] sm:bottom-[12%] md:bottom-[15%]"
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
        
        {/* Grid lines with enhanced effect */}
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgzMiwgMTc4LCAxNzAsIDAuMTUpIiBzdHJva2Utd2lkdGg9IjEuMSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')",
            backgroundSize: "60px 60px"
          }} 
        />
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9InJnYmEoMjQyLCAxMzIsIDExNiwgMC4xNSkiIHN0cm9rZS13aWR0aD0iMS4xIiBkPSJNMCAwaDEyMHYxMjBIMHoiLz48L2c+PC9zdmc+')",
            backgroundSize: "120px 120px",
            transform: "rotate(30deg)",
          }} 
        />
      </div>
      
      {/* Enhanced floating particles in background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-b from-[#F28474] to-[#20B2AA] opacity-25"
          style={{
            width: Math.random() * 25 + 5,
            height: Math.random() * 25 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)"
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section with enhanced gradient effect */}
        <motion.div 
          className="relative mb-10 sm:mb-12 md:mb-16 text-center"
          variants={titleVariants}
        >
          <motion.div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6">
            <motion.h1 
              className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A71] via-[#E05E50] to-[#028985] font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight z-10 leading-tight"
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
              Contact Us
            </motion.h1>

            {/* Enhanced animated underline */}
            <motion.div 
              className="h-1 sm:h-1.5 bg-gradient-to-r from-[#FF8A71] via-[#E05E50] to-[#20B2AA] rounded-full w-16 sm:w-24 md:w-32"
              animate={{
                width: ["4rem", "8rem", "4rem"],
                opacity: [0.7, 1, 0.7],
                height: ["0.25rem", "0.35rem", "0.25rem"]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </motion.div>

          {/* Enhanced light glow behind the title */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-20 sm:h-28 md:h-40 rounded-full bg-gradient-to-r from-[#F28474]/25 via-[#E05E50]/20 to-[#20B2AA]/25 blur-[50px] sm:blur-[75px] md:blur-[100px] opacity-40"
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

        {/* Two column layout for contact form - stack on mobile, side by side on larger screens */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Contact Info with enhanced cards */}
          <motion.div 
            className="w-full lg:w-1/3 space-y-4 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {/* Phone Section */}
<motion.div 
  className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800/70 shadow-xl shadow-black/60 relative group overflow-hidden"
  variants={itemVariants}
  custom={0}
  whileHover="hover"
>
  {/* Enhanced hover effect glow */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-br from-[#F28474]/15 to-[#20B2AA]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  />
  
  <div className="flex items-center gap-3 sm:gap-4">
    <div className="flex-shrink-0 text-2xl sm:text-3xl bg-gradient-to-br from-[#E05E50] to-[#C54540] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg shadow-black/50">
      📱
    </div>
    
    <div className="min-w-0 flex-1">
      <p className="text-gray-300 text-sm sm:text-base whitespace-nowrap overflow-visible">
        +91-9898765432
      </p>
      <p className="text-gray-300 text-sm sm:text-base whitespace-nowrap overflow-visible">
        +91-9876543210
      </p>
    </div>
  </div>
  
  {/* Enhanced bottom accent line */}
  <motion.div 
    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF8A71]/80 to-[#20B2AA]/80 w-0 group-hover:w-full transition-all duration-500 ease-out"
  />
</motion.div>

{/* Email Section */}
<motion.div 
  className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800/70 shadow-xl shadow-black/60 relative group overflow-hidden"
  variants={itemVariants}
  custom={1}
  whileHover="hover"
>
  {/* Enhanced hover effect glow */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-br from-[#F28474]/15 to-[#20B2AA]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  />
  
  <div className="flex items-center gap-3 sm:gap-4">
    <div className="flex-shrink-0 text-2xl sm:text-3xl bg-gradient-to-br from-[#E05E50] to-[#C54540] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg shadow-black/50">
      ✉️
    </div>
    
    <div className="min-w-0 flex-1">
      <p className="text-gray-300 text-sm sm:text-base whitespace-nowrap overflow-visible">
        contact.kodebumps@gmail.com
      </p>
    </div>
  </div>
  
  {/* Enhanced bottom accent line */}
  <motion.div 
    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF8A71]/80 to-[#20B2AA]/80 w-0 group-hover:w-full transition-all duration-500 ease-out"
  />
</motion.div>

{/* Address Section */}
<motion.div 
  className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800/70 shadow-xl shadow-black/60 relative group overflow-hidden"
  variants={itemVariants}
  custom={2}
  whileHover="hover"
>
  {/* Enhanced hover effect glow */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-br from-[#F28474]/15 to-[#20B2AA]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  />
  
  <div className="flex items-start gap-3 sm:gap-4">
    <div className="flex-shrink-0 text-2xl sm:text-3xl bg-gradient-to-br from-[#E05E50] to-[#C54540] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg shadow-black/50 mt-1">
      🏢
    </div>
    
    <div className="min-w-0 flex-1">
      <p className="text-gray-300 text-sm sm:text-base">
        RNO74/5FLA/104, Legacy Fortune Exotica, Ravet, Pune, Maharashtra, 412101
      </p>
    </div>
  </div>
  
  {/* Enhanced bottom accent line */}
  <motion.div 
    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF8A71]/80 to-[#20B2AA]/80 w-0 group-hover:w-full transition-all duration-500 ease-out"
  />
</motion.div>





            {/* Social Media Logos with Links */}
            <motion.div 
  className="flex justify-center lg:justify-start gap-6 mt-6"
  variants={itemVariants}
  custom={2}
>
  <motion.a 
    href="https://instagram.com/kodebumps" 
    target="_blank" 
    rel="noopener noreferrer"
    className="relative group"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
  >
    <img 
      src={instaLogo} 
      alt="Instagram" 
      className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#303030] to-[#1a1a1a] p-2.5 border border-gray-700/80 shadow-lg"
    />
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-[#F28474]/30 to-[#20B2AA]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-lg"
    />
  </motion.a>
  
  <motion.a 
    href="https://x.com/kodebumps" 
    target="_blank" 
    rel="noopener noreferrer"
    className="relative group"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
  >
    <img 
      src={xLogo} 
      alt="X" 
      className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#303030] to-[#1a1a1a] p-2.5 border border-gray-700/80 shadow-lg"
    />
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-[#F28474]/30 to-[#20B2AA]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-lg"
    />
  </motion.a>
  
  <motion.a 
    href="https://linkedin.com/company/kodebumps" 
    target="_blank" 
    rel="noopener noreferrer"
    className="relative group"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
  >
    <img 
      src={linkedinLogo} 
      alt="LinkedIn" 
      className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#303030] to-[#1a1a1a] p-2.5 border border-gray-700/80 shadow-lg"
    />
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-[#F28474]/30 to-[#20B2AA]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-lg"
    />
  </motion.a>
</motion.div>
          </motion.div>




          
          
          {/* Right Side - Contact Form with enhanced styling */}
          <motion.div 
            className="w-full lg:w-2/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800/70 shadow-xl shadow-black/60 relative overflow-hidden"
              variants={itemVariants}
              custom={0}
            >
              {/* Enhanced glowing border effect */}
              <motion.div
                className="absolute -inset-[1px] bg-gradient-to-r from-[#F28474]/60 via-[#20B2AA]/60 to-[#F28474]/60 rounded-xl sm:rounded-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-0"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
              />
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* First Name with enhanced input styling */}
                  <motion.div 
                    className="w-full sm:w-1/2 group"
                    variants={itemVariants}
                    custom={1}
                  >
                    <label className="block text-gray-300 mb-1 sm:mb-2 text-base sm:text-lg">
                      First Name
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-[#1a1a1a] border border-gray-700/80 rounded-lg sm:rounded-xl p-3 sm:p-4 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F28474]/60 transition-all duration-300"
                      />
                      <motion.div 
                        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FF8A71] to-[#20B2AA] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full" 
                        whileHover={{
                          opacity: [0.7, 1, 0.7],
                          transition: { 
                            duration: 2, 
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Last Name with enhanced input styling */}
                  <motion.div 
                    className="w-full sm:w-1/2 group"
                    variants={itemVariants}
                    custom={2}
                  >
                    <label className="block text-gray-300 mb-1 sm:mb-2 text-base sm:text-lg">
                      Last Name
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-[#1a1a1a] border border-gray-700/80 rounded-lg sm:rounded-xl p-3 sm:p-4 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F28474]/60 transition-all duration-300"
                      />
                      <motion.div 
                        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FF8A71] to-[#20B2AA] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full" 
                        whileHover={{
                          opacity: [0.7, 1, 0.7],
                          transition: { 
                            duration: 2, 
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
                
                {/* Email with enhanced input styling */}
                <motion.div 
                  className="group"
                  variants={itemVariants}
                  custom={3}
                >
                  <label className="block text-gray-300 mb-1 sm:mb-2 text-base sm:text-lg">
                    Email 
                  </label>
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1a1a] border border-gray-700/80 rounded-lg sm:rounded-xl p-3 sm:p-4 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F28474]/60 transition-all duration-300"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FF8A71] to-[#20B2AA] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full" 
                      whileHover={{
                        opacity: [0.7, 1, 0.7],
                        transition: { 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Message with enhanced input styling */}
                <motion.div 
                  className="group"
                  variants={itemVariants}
                  custom={4}
                >
                  <label className="block text-gray-300 mb-1 sm:mb-2 text-base sm:text-lg">
                    Message
                  </label>
                  <div className="relative">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-[#1a1a1a] border border-gray-700/80 rounded-lg sm:rounded-xl p-3 sm:p-4 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#F28474]/60 transition-all duration-300"
                    ></textarea>
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FF8A71] to-[#20B2AA] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full" 
                      whileHover={{
                        opacity: [0.7, 1, 0.7],
                        transition: { 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Submit Button with enhanced styling */}
                <motion.div 
                  className="flex justify-end"
                  variants={itemVariants}
                  custom={5}
                >
                  <motion.button 
                    type="submit"
                    className="relative py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-[#E05E50] to-[#D14540] text-white rounded-full font-semibold text-base sm:text-lg overflow-hidden group shadow-lg shadow-black/40"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0px 15px 30px rgba(242, 132, 116, 0.35)"
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* Enhanced button hover effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#D14540] to-[#C03A36] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Text and icon with enhanced animation */}
                    <span className="relative z-10 flex items-center gap-2">
                      Send
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 inline-block transition-transform duration-300" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{
                          transform: "translateX(0px)"
                        }}
                      >
                        <motion.path 
                          d="M5 12h14M12 5l7 7-7 7"
                          animate={{ pathLength: [0.3, 1, 0.3] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }}
                        />
                      </svg>
                    </span>
                    
                    {/* Enhanced subtle glow effect on button */}
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-[#F28474]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;