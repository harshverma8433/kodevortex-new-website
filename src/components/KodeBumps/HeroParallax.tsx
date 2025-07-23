import React from "react";
import { motion } from "framer-motion";
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import logoImg from './logo.jpg'

const HeroParallax = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img15];
  const images2 = [img8, img14, img9, img10, img11, img12, img13];

  const animationSpeed = 80;

  return (
    <div className="h-[100%] text-white overflow-hidden flex flex-col bg-gradient-to-b from-[#0c0c0c] via-[#111111] to-[#1a1a1a] px-4 relative">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Large circle with improved animation */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full border-2 border-[#20B2AA]/40 -right-[150px] -top-[150px]"
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
        
        {/* Medium circle with glow effect */}
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full border border-[#F28474]/30 right-[20%] bottom-[10%]"
          style={{ boxShadow: "0 0 40px rgba(242, 132, 116, 0.1)" }}
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
        
        {/* Small circle with glow effect */}
        <motion.div
          className="absolute w-[250px] h-[250px] rounded-full border border-[#F28474]/30 -left-[100px] bottom-[15%]"
          style={{ boxShadow: "0 0 30px rgba(32, 178, 170, 0.1)" }}
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
      </div>

      {/* Additional decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F28474]/5 to-transparent"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#20B2AA]/5 to-transparent"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
      />

      {/* Enhanced Content Section with better spacing and styling */}
      <motion.div
        className="text-center py-24 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center px-4 sm:px-10 md:px-20">
          {/* Logo and Title with elegant styling */}
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-20 h-20 mr-5 rounded-lg overflow-hidden shadow-lg shadow-[#F28474]/20">
              <img src={logoImg} alt="Kodebumps Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A71] via-[#E05E50] to-[#028985]">
              Kodebumps - A Joint venture of KodeVortex and DSES
            </h1>
          </motion.div>
          
          {/* Enhanced paragraph with improved styling and gradient effect for COE */}
          <motion.div 
            className="max-w-4xl text-center mt-6 bg-gradient-to-r from-[#0a0a0a]/80 via-[#111111]/80 to-[#0a0a0a]/80 p-6 rounded-xl border border-gray-700/30 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 10px rgba(242, 132, 116, 0.1)" }}
          >
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Empowering Students with Industry-Ready Skills. Bridging the gap between academic and industry with hands-on training in cutting-edge technologies. 
              We propose establishing a{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A71] via-[#E05E50] to-[#20B2AA] px-1 animate-pulse">
                Centre of Excellence in Technology and Entrepreneurship (COE)
              </span>{" "}
              to provide industry-focused training and project development. 
              COE will be implemented at no cost to the institution, ensuring maximum benefits with minimal investment.
            </p>
          </motion.div>
        </div>

        {/* Enhanced buttons with staggered animation */}
        <motion.div 
          className="py-8 space-y-0 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#E05E50] to-[#F28474] px-8 py-3 tracking-wide cursor-pointer rounded-full text-base shadow-lg shadow-[#E05E50]/25 border border-[#F28474]/20 flex items-center gap-2"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(242, 132, 116, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <svg className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
          <motion.button
            className="border border-[#E05E50] px-8 py-3 rounded-full tracking-wide cursor-pointer text-[#F28474] text-base bg-[#0a0a0a]/60 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(242, 132, 116, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Training Programs
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced floating particles with better distribution */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-b from-[#F28474] to-[#20B2AA] opacity-25 z-0"
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

      {/* Enhanced Scrolling Image Section with subtle shadows */}
      <div className="h-screen text-white overflow-hidden px-4 relative z-10">
        <div className="relative overflow-hidden w-full">
          {/* First Row - Left to Right with enhanced styling */}
          <motion.div
            className="flex flex-nowrap space-x-6 sm:space-x-10"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: animationSpeed, ease: "linear", repeat: Infinity }}
            style={{ display: "flex", width: "200%" }}
          >
            {[...images, ...images].map((img, index) => (
              <motion.div
                key={index}
                className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30rem] h-[12rem] sm:h-[15rem] md:h-[20rem] flex-shrink-0"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg border border-gray-800/40"
                  style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 5px rgba(242, 132, 116, 0.1)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Second Row - Right to Left with enhanced styling */}
        <div className="relative overflow-hidden w-full mt-6">
          <motion.div
            className="flex flex-nowrap space-x-6 sm:space-x-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: animationSpeed, ease: "linear", repeat: Infinity }}
            style={{ display: "flex", width: "200%" }}
          >
            {[...images2, ...images2].map((img, index) => (
              <motion.div
                key={index}
                className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30rem] h-[12rem] sm:h-[15rem] md:h-[20rem] flex-shrink-0"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg border border-gray-800/40"
                  style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 5px rgba(32, 178, 170, 0.1)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

          </div>
  );
};

export default HeroParallax;