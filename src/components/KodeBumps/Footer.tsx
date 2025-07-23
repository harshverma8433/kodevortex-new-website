import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import logo from "./21.png";
import fo1 from "../../../public/cropped-image_1.svg";
import fo2 from "../../../public/cropped-image_2.svg";
import fo3 from "../../../public/cropped-image_3.svg";
import fo4 from "../../../public/cropped-image_4.svg";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        staggerChildren: 0.2,
        delayChildren: 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
      } 
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-[#141414] via-[#1c1c1c] to-[#252525] text-white pt-10 px-4 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {/* Large circle */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full border-2 border-[#20B2AA]/30 -right-[150px] -top-[150px]"
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
          className="absolute w-[350px] h-[350px] rounded-full border border-[#F28474]/20 right-[20%] bottom-[10%]"
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
          className="absolute w-[250px] h-[250px] rounded-full border border-[#F28474]/20 -left-[100px] bottom-[15%]"
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
      </div>
      
      {/* Floating particles in background */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-b from-[#F28474] to-[#20B2AA] opacity-25"
          style={{
            width: Math.random() * 15 + 5,
            height: Math.random() * 15 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)"
          }}
          animate={{
            y: [0, Math.random() * 80 - 40],
            x: [0, Math.random() * 80 - 40],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, Math.random() * 0.5 + 1, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto relative z-10">
        {/* "VISIT US" Section */}
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <h2 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A71] via-[#E05E50] to-[#028985]">VISIT US</h2>
          {/* Animated underline */}
          <motion.div 
            className="h-1 bg-gradient-to-r from-[#FF8A71] via-[#E05E50] to-[#20B2AA] rounded-full w-16 mx-auto mt-2"
            animate={{
              width: ["2rem", "5rem", "2rem"],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>

        {/* Social Media Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-12 justify-center">
          {[
            {
              url: "https://twitter.com/kodeVortex",
              name: "Twitter",
              icon: fo3
            },
            {
              url: "https://www.instagram.com/kodevortex",
              name: "Instagram",
              icon: fo2,
            },
            {
              url: "https://youtube.com/@kodevortex?si=PKz-yTp_5tH5QLFW",
              name: "YouTube",
              icon: fo1,
            },
            {
              url: "https://www.linkedin.com/company/kodevortex",
              name: "LinkedIn",
              icon: fo4,
            },
          ].map((social, index) => (
            <motion.div 
              className="text-center" 
              key={index}
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto relative z-10"
                />
                {/* Glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#F28474]/20 to-[#20B2AA]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">@kodeVortex</p>
            </motion.div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-wrap px-4 md:px-24 justify-center sm:justify-between gap-8 text-center sm:text-left">
          {/* Logo Section */}
          <motion.div 
            className="w-full sm:w-auto flex justify-center mb-9"
            variants={itemVariants}
          >
            <motion.img
              src={logo}
              alt="KodeVortex"
              className="sm:w-22 w-[80%] h-[90%]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* KVTech Section */}
          <motion.div 
            className="flex flex-col space-y-3 text-center sm:text-left"
            variants={itemVariants}
          >
            <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF8A71] to-[#028985]">KodeVortex</h3>
            {["Home", "Trainings", "Internship", "About Us", "Contact Us"].map((item, index) => (
              <motion.div key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link 
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <motion.span 
                    className="w-0 h-0.5 bg-gradient-to-r from-[#FF8A71] to-[#20B2AA] mr-0 opacity-0 group-hover:w-2 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300"
                  />
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            className="flex flex-col space-y-3 text-center sm:text-left"
            variants={itemVariants}
          >
            <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF8A71] to-[#028985]">Contact</h3>
            {[
              { name: "Email", url: "mailto:info@kodevortex.com" },
              { name: "LinkedIn", url: "https://www.linkedin.com/company/kodevortex" },
              { name: "Instagram", url: "https://www.instagram.com/kodevortex" },
              { name: "Twitter (X)", url: "https://twitter.com/kodeVortex" }
            ].map((contact, index) => (
              <motion.div key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a 
                  href={contact.url}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <motion.span 
                    className="w-0 h-0.5 bg-gradient-to-r from-[#FF8A71] to-[#20B2AA] mr-0 opacity-0 group-hover:w-2 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300"
                  />
                  {contact.name}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Join Us Section */}
          <motion.div 
            className="flex flex-col space-y-4 text-center sm:text-left"
            variants={itemVariants}
          >
            <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF8A71] to-[#028985]">Join Us Here</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="py-2 px-4 pr-32 text-white bg-gray-800/50 border border-gray-700/70 rounded-full w-full focus:outline-none focus:border-[#E05E50] focus:ring-1 focus:ring-[#E05E50] transition-all duration-300"
              />
              <motion.button 
                className="absolute right-0 top-0 bg-gradient-to-r from-[#E05E50] to-[#028985] py-2 px-4 rounded-r-full text-white font-bold overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0px 5px 15px rgba(242, 132, 116, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">SUBMIT</span>
                {/* Button hover animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#028985] to-[#E05E50] opacity-0 hover:opacity-100 transition-opacity duration-500"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Section */}
        <motion.div 
          className="flex pb-5 mt-10 flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 border-t border-gray-800/50 pt-5"
          variants={itemVariants}
        >
          <span className="text-gray-400">© 2024 KodeVortex</span>
          <div className="flex items-center space-x-2">
            <img
              src="../../../public/SSL.jpg"
              alt="Secured with SSL"
              className="w-6 h-6"
            />
            <span className="text-gray-400">Secured with SSL</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;