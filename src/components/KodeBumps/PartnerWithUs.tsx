import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PartnerWithUs = () => {
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [autoplayTestimonials, setAutoplayTestimonials] = useState(true);
  const sectionRef = useRef(null);
  
  // Partner benefits content with icons and descriptions
  const partnerBenefits = [
    { 
      title: "Access to Industry-Leading Resources",
      icon: "🔍",
      description: "Gain exclusive access to curriculum materials, training modules, and industry insights"
    },
    { 
      title: "Increased Student Employability",
      icon: "📈",
      description: "Improve job placement rates with industry-aligned skill development"
    },
    { 
      title: "Collaborative Research Opportunities",
      icon: "🔬",
      description: "Partner on innovative projects with leading technology companies"
    },
    { 
      title: "Recognition as Industry-Connected Institution",
      icon: "🌟",
      description: "Receive certification and promotion across our partner network"
    },
  ];

  // Testimonials array with added testimonials
  const testimonials = [
    {
      quote: "Partnering has transformed our engineering department. Our students now graduate with industry-relevant skills that employers value.",
      author: "Dr. Rajesh Kumar",
      title: "Dean, College of Engineering",
      institution: "Modern Technical University"
    },
    {
      quote: "The curriculum integration was seamless. Our placement rates have increased by 35% since becoming a partner institution.",
      author: "Prof. Anita Sharma",
      title: "Head of Computer Science",
      institution: "National Institute of Technology"
    },
    {
      quote: "This partnership has given our students access to cutting-edge industry tools and real-world projects. The impact on their professional readiness has been remarkable.",
      author: "Dr. Sarah Williams",
      title: "Program Director",
      institution: "Global Technical Academy"
    },
    {
      quote: "Our faculty development programs have greatly improved after partnering. The industry workshops have kept our professors at the forefront of technological advancements.",
      author: "Prof. Michael Chen",
      title: "Vice President of Academic Affairs",
      institution: "Future Institute of Technology"
    },
    {
      quote: "The collaborative research opportunities have opened doors to funding that was previously inaccessible. Our students are now publishing industry-relevant papers.",
      author: "Dr. Elena Rodriguez",
      title: "Research Chair",
      institution: "Innovation University"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Testimonial autoplay
  useEffect(() => {
    let interval;
    if (autoplayTestimonials) {
      interval = setInterval(() => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplayTestimonials, testimonials.length]);

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const boxVariants = {
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

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.25,
        duration: 0.6,
        ease: "easeOut"
      } 
    }),
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

  // Testimonial navigation functions
  const nextTestimonial = () => {
    setAutoplayTestimonials(false);
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplayTestimonials(false);
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.div
      ref={sectionRef}
      className="text-white min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 pt-16 pb-20 bg-[#1a1a1a] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Abstract geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {/* Large circle */}
        <motion.div
          className="absolute w-64 md:w-96 lg:w-[600px] h-64 md:h-96 lg:h-[600px] rounded-full border-2 border-[#20B2AA]/30 -right-32 md:-right-40 lg:-right-[200px] -top-32 md:-top-40 lg:-top-[200px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Small circle */}
        <motion.div
          className="absolute w-32 md:w-48 lg:w-[300px] h-32 md:h-48 lg:h-[300px] rounded-full border border-[#F28474]/20 -left-16 md:-left-24 lg:-left-[150px] bottom-[10%]"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgzMiwgMTc4LCAxNzAsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')"
        }} />
      </div>
      
      {/* Floating particles in background - Optimized for iPad */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#F28474] opacity-10"
          style={{
            width: Math.random() * 25 + 5,
            height: Math.random() * 25 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)"
          }}
          animate={{
            y: [0, Math.random() * 120 - 60],
            x: [0, Math.random() * 120 - 60],
            opacity: [0.05, 0.2, 0.05],
            scale: [1, Math.random() * 0.5 + 1, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Title with enhanced highlight effect - Improved for iPad */}
      <motion.div 
        className="relative"
        variants={titleVariants}
      >
        <motion.div className="flex flex-col items-center justify-center space-y-4">
          <motion.h1 
            className="relative text-[#F28474] font-sans text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-center z-10 leading-tight"
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
          >
            Become a Partner
          </motion.h1>

          {/* Animated underline - Responsive for iPad */}
          <motion.div 
            className="h-1 bg-[#F28474] rounded-full w-20 md:w-24 lg:w-32"
            animate={{
              width: ["5rem", "8rem", "5rem"],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>

        {/* Light glow behind the title */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-40 rounded-full bg-[#F28474] blur-[80px] md:blur-[100px] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </motion.div>

      {/* Grid of content boxes - Optimized for iPad */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 mt-12 md:mt-16 lg:mt-20 relative z-10"
      >
        {partnerBenefits.map((benefit, index) => (
          <motion.div 
            key={index} 
            custom={index}
            variants={boxVariants}
            whileHover="hover"
            className="transform transition-all duration-300"
          >
            <motion.div 
              className="bg-[#2c2c2c] p-6 md:p-7 lg:p-8 rounded-2xl border border-gray-800 shadow-lg shadow-black/50 relative group overflow-hidden"
              whileHover={{
                backgroundPosition: ["0% 0%", "100% 100%"],
                transition: { duration: 1.5 }
              }}
            >
              {/* Hover effect glow */}
              <motion.div
                className="absolute inset-0 bg-[#F28474]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute rotate-45 bg-[#F28474]/20 w-8 h-8 -right-4 -top-4 transform origin-bottom-left" />
              </div>
              
              <div className="flex items-start gap-4">
                {/* Gradient background for icon - Enhanced for iPad */}
                <div className="flex-shrink-0 text-2xl md:text-3xl rounded-2xl p-3 md:p-4 shadow-lg shadow-black/20 relative overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f28474] via-[#f28474cc] to-[#20B2AA]" />
                  <span className="relative z-10">{benefit.icon}</span>
                </div>
                
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300/70 text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#F28474]/50 w-0 group-hover:w-full transition-all duration-500 ease-out"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Partnership process section - iPad optimized */}
      <motion.div 
        className="px-4 md:px-8 lg:px-16 mt-16 md:mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8,
            delay: 0.3
          }
        }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-[#F28474]"
          custom={0}
          variants={paragraphVariants}
        >
          Our Partnership Process
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-gray-300/80 mb-6 md:mb-8"
          custom={1}
          variants={paragraphVariants}
        >
          Begin your journey to becoming an industry-aligned educational institution with our streamlined partnership process.
        </motion.p>
        
        {/* Process steps - Responsive grid for iPad */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12 max-w-5xl mx-auto">
          {[
            {
              title: "Initial Consultation",
              description: "Discuss your specific needs and goals",
              icon: "💬",
              step: "1"
            },
            {
              title: "Partnership Assessment",
              description: "Evaluate implementation requirements",
              icon: "📋",
              step: "2"
            },
            {
              title: "Agreement Finalization",
              description: "Complete official partnership documents",
              icon: "📝",
              step: "3"
            },
            {
              title: "Integration & Launch",
              description: "Deploy resources and begin collaboration",
              icon: "🚀",
              step: "4"
            },
          ].map((step, index) => (
            <motion.div 
              key={index}
              className="bg-[#2c2c2c] p-4 md:p-5 lg:p-6 rounded-xl border border-gray-800 text-center shadow-lg shadow-black/30 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5,
                  delay: 0.2 + (index * 0.15)
                }
              }}
              whileHover={{
                scale: 1.05, 
                boxShadow: "0px 10px 25px rgba(242, 132, 116, 0.15)",
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              {/* Step number badge - Sized for iPad */}
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#F28474] flex items-center justify-center text-white font-bold shadow-lg text-sm">
                {step.step}
              </div>
              {/* Gradient background for icon - Enhanced for iPad */}
              <div className="relative h-12 md:h-14 lg:h-16 flex items-center justify-center mb-3 md:mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f28474] via-[#f28474cc] to-[#20B2AA] opacity-70" />
                <span className="text-2xl md:text-3xl lg:text-4xl relative z-10">{step.icon}</span>
              </div>
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300/70 text-xs md:text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials section - Optimized for iPad */}
      <motion.div
        className="mt-16 md:mt-20 px-4 md:px-10 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 text-center text-[#F28474]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Our Partners Say
        </motion.h2>
        
        {/* Enhanced Testimonial Carousel - iPad optimized */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setAutoplayTestimonials(false)}
          onMouseLeave={() => setAutoplayTestimonials(true)}
        >
          {/* Testimonial Card with iPad Responsive Design */}
          <div className="bg-[#2c2c2c] p-6 md:p-8 rounded-2xl border border-gray-800 shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Enhanced Avatar with Gradient - Sized for iPad */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl md:text-2xl relative overflow-hidden bg-gradient-to-br from-[#f28474] via-[#f28474cc] to-[#20B2AA] shadow-md">
                <span className="relative z-10">{testimonials[currentTestimonialIndex].author.charAt(0)}</span>
                
                {/* Subtle glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-white opacity-0"
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              
              <div className="flex-grow relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col"
                  >
                    {/* Quote with enhanced styling for iPad */}
                    <p className="text-gray-300/90 italic mb-3 text-base md:text-lg relative pl-4 border-l-2 border-[#F28474]/40">
                      "{testimonials[currentTestimonialIndex].quote}"
                    </p>
                    
                    {/* Author info with responsive layout for iPad */}
                    <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-400 mt-2">
                      <span className="font-semibold text-white mb-1 md:mb-0">{testimonials[currentTestimonialIndex].author}</span>
                      <span className="hidden md:inline mx-2">•</span>
                      <span className="mb-1 md:mb-0">{testimonials[currentTestimonialIndex].title}</span>
                      <span className="hidden md:inline mx-2">•</span>
                      <span>{testimonials[currentTestimonialIndex].institution}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Navigation buttons - Enhanced for iPad touch */}
              <div className="flex gap-2 flex-shrink-0 mt-4 md:mt-0 self-center md:self-auto">
                <button 
                  onClick={prevTestimonial} 
                  className="p-2 rounded-full bg-[#F28474]/20 hover:bg-[#F28474]/40 transition-colors active:scale-95 touch-manipulation"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial} 
                  className="p-2 rounded-full bg-[#F28474]/20 hover:bg-[#F28474]/40 transition-colors active:scale-95 touch-manipulation"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Enhanced Pagination dots - More touch friendly for iPad */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonialIndex(index);
                  setAutoplayTestimonials(false);
                }}
                className={`h-2 md:h-3 rounded-full transition-all ${
                  currentTestimonialIndex === index 
                    ? "bg-[#F28474] w-6 md:w-8" 
                    : "bg-gray-600 hover:bg-gray-500 w-2 md:w-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to action - Enhanced for iPad */}
      <motion.div
        className="mt-16 md:mt-20 flex justify-center" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="py-3 px-8 md:py-4 md:px-10 rounded-full font-semibold text-base md:text-lg shadow-lg overflow-hidden relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.97 }}
          viewport={{ once: true }}
        >
          {/* Gradient background for button */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D14540] to-[#C03A36] opacity-90" />
          
          <span className="relative z-10 flex items-center gap-2 text-white">
            Schedule Consultation
            <svg className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </motion.button>
      </motion.div>
      
    </motion.div>
  );
};

export default PartnerWithUs;