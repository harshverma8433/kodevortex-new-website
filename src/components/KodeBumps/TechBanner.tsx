import React from 'react';
import { motion } from "framer-motion";

const TransformCard = () => {
  return (
    <div className="relative flex justify-center items-center mt-20 px-4 sm:px-6 md:px-10">
      {/* Background Card */}
      <motion.div
        className="absolute w-[95%] sm:w-[90%] md:w-[81%] h-72 sm:h-80 md:h-96 bg-gradient-to-r from-[#F28474]/40 to-[#20B2AA]/40 rounded-lg rotate-3 -translate-x-1/2 -translate-y-1/2 border border-gray-800"
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      ></motion.div>

      {/* Foreground Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="relative bg-[#111111] space-y-6 text-white flex flex-col xl:flex-row justify-center items-center border border-gray-800 p-6 sm:p-8 md:p-10 md:space-y-0 md:space-x-10 rounded-xl shadow-lg shadow-black/50 w-[85%] h-auto md:h-96 overflow-hidden"
      >
        {/* Abstract geometric shape in background */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full border border-[#20B2AA]/10 -right-[300px] -bottom-[300px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating particles in background */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-b from-[#F28474] to-[#20B2AA] opacity-10"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)"
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, Math.random() * 0.5 + 1, 1]
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Left Content */}
        <motion.div
          className="flex flex-col xl:ml-24 ml-0 space-y-4 sm:space-y-6 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            Ready to Transform Your College into a
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F28474] to-[#20B2AA]"> Centre of Excellence</span> in Technology?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Empower your students with industry-relevant skills and knowledge.
          </p>
        </motion.div>

        {/* Right Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ amount: 0.2 }}
          className="w-full py-6 xl:py-0 flex justify-center xl:justify-center z-10"
        >
          <motion.a
  href="/KB_Brochure.pdf"
  download
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(242, 132, 116, 0.3)"
  }}
  whileTap={{ scale: 0.95 }}
  className="relative overflow-hidden bg-[#e05e4e] text-white text-sm sm:text-base px-5 py-3 w-full sm:w-[20rem] md:w-[30rem] rounded-full shadow-md transition duration-300 group cursor-pointer"
>
  {/* Button background animation */}
  <motion.div 
    className="absolute inset-0 bg-gradient-to-r from-[#F28474] to-[#20B2AA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    animate={{
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity,
      repeatType: "loop" 
    }}
  />

  {/* Text and icon */}
  <span className="relative z-10 flex items-center text-center justify-center gap-2">
    Get in touch with us now to discuss how we can collaborate!
    <svg className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </span>
</motion.a>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default TransformCard;