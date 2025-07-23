import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Expanded testimonials array with 8 items
const testimonials = [
  {
    name: "Niyati Ravindra Patil",
    image: "",
    feedback:
      "This was a very well-organized training! The trainer explained concepts clearly, and the hands-on activities, especially the Bluetooth-controlled car, were very engaging. I feel much more confident using this technology now!",
  },
  {
    name: "Gayatri Santosh Sable",
    image: "",
    feedback:
      "The training was good, and the trainer's teaching skills were excellent. I found the traffic light section the most interesting. The hands-on sessions were very helpful in understanding the concepts!",
  },
  {
    name: "Sumit Sushant Padhy",
    image: "",
    feedback:
      "I had a great learning experience! The training was well-structured, and the hands-on activities helped a lot. It would be great if the training also included more real-world applications!",
  },
  {
    name: "Aastha Jadhav",
    image: "",
    feedback:
      "Fantastic training! The Raspberry Pi camera and Al section were the most useful. I enjoyed the hands-on activities the most. It was a pleasant experience with Rushikesh sir!",
  },
  {
    name: "Anushka Kshirsagar",
    image: "",
    feedback:
      "Great learning experience! The trainer's teaching was excellent, and the hands-on activities helped a lot. I found the notification section very useful. Very well organized!",
  },
  {
    name: "Subodh Deshmukh",
    image: "",
    feedback:
      "The training was well conducted, and I learned a lot.The GPIO pins and cloud connections part was very useful. Everything was perfect!",
  },
  {
    name: "Pratik Mokal",
    image: "",
    feedback:
      "The session was excellent! The trainer taught really well, and the hands-on exercises were very helpful. I feel much more confident working with Arduino now.Everything was perfect!",
  },
  {
    name: "Harshita Singh",
    image: "",
    feedback:
      "The training was excellent! The content was easy to understand, and the hands-on activities really helped in grasping the concepts. The hardware section was the most useful for me. Overall, a great session!",
  },
];

const Testimonials = () => {
  // Dynamic grouping based on screen size
  const [itemsPerSet, setItemsPerSet] = useState(4);
  const [testimonialSets, setTestimonialSets] = useState([]);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Set items per view based on screen width
      if (width < 640) { // Mobile (iPhone)
        setItemsPerSet(1);
      } else if (width < 768) { // Small tablets
        setItemsPerSet(2);
      } else if (width < 1024) { // Medium tablets (iPad Mini, iPad Air)
        setItemsPerSet(2);
      } else { // Large tablets (iPad Pro) and desktop
        setItemsPerSet(4);
      }
    };
    
    // Initial call and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Regenerate sets when itemsPerSet changes
  useEffect(() => {
    const newSets = [];
    for (let i = 0; i < testimonials.length; i += itemsPerSet) {
      newSets.push(testimonials.slice(i, Math.min(i + itemsPerSet, testimonials.length)));
    }
    setTestimonialSets(newSets);
  }, [itemsPerSet]);

  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  
  // Handle automatic slideshow
  useEffect(() => {
    if (!isAutoPlaying || testimonialSets.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveSetIndex((prev) => (prev === testimonialSets.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialSets.length]);
  
  const goToSet = (index) => {
    setActiveSetIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const nextSet = () => {
    if (testimonialSets.length <= 1) return;
    setActiveSetIndex((prev) => (prev === testimonialSets.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const prevSet = () => {
    if (testimonialSets.length <= 1) return;
    setActiveSetIndex((prev) => (prev === 0 ? testimonialSets.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  // Swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSet();
    }
    if (isRightSwipe) {
      prevSet();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  return (
    <motion.section
      className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0F0F10] via-[#161618] to-[#1D1D20] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Dynamic animated particles */}
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * -80 - 40],
              opacity: [0.1, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Blurred gradient spots - optimized for better mobile appearance */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-gradient-to-r from-[#3C33FF] to-[#9747FF] opacity-20 blur-[40px] sm:blur-[60px] md:blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/5 w-36 sm:w-52 md:w-72 h-36 sm:h-52 md:h-72 rounded-full bg-gradient-to-r from-[#FF3365] to-[#FF9533] opacity-20 blur-[50px] sm:blur-[70px] md:blur-[100px]"
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle grid overlay - scaled appropriately for different devices */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), 
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            '@media (min-width: 640px)': {
              backgroundSize: '30px 30px',
            },
            '@media (min-width: 768px)': {
              backgroundSize: '40px 40px',
            }
          }}
        />
      </div>
      
      {/* Section title */}
      <div className="relative z-10 text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
            Our Student Feedback
          </h2>
          <motion.div 
            className="mt-3 sm:mt-4 mx-auto h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
      </div>
      
      {/* Carousel container */}
      <div 
        ref={carouselRef}
        className="relative max-w-7xl mx-auto"
      >
        {/* Grid of testimonials */}
        <div className="relative overflow-hidden min-h-[300px] sm:min-h-[320px] md:min-h-[340px]">
          {testimonialSets.map((set, setIndex) => (
            <motion.div
              key={setIndex}
              className={`grid grid-cols-1 sm:grid-cols-${Math.min(2, set.length)} lg:grid-cols-${Math.min(4, set.length)} gap-4 sm:gap-5 md:gap-6 transition-all duration-500`}
              initial={{ opacity: 0, x: 300 }}
              animate={{ 
                opacity: activeSetIndex === setIndex ? 1 : 0,
                x: activeSetIndex === setIndex ? 0 : (activeSetIndex > setIndex ? -300 : 300),
                pointerEvents: activeSetIndex === setIndex ? "auto" : "none"
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                width: '100%',
                display: activeSetIndex === setIndex ? 'grid' : 'none'
              }}
            >
              {set.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#202024] to-[#18181c] rounded-xl sm:rounded-2xl shadow-xl border border-gray-800/50 p-4 sm:p-5 md:p-6 flex flex-col overflow-hidden relative">
                    {/* Animated gradient border effect */}
                    <div className="absolute inset-0 p-[1px] rounded-xl sm:rounded-2xl overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-transparent via-[#FF6B6B]/20 to-[#4ECDC4]/20"
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        style={{
                          backgroundSize: '300% 300%',
                        }}
                      />
                    </div>
                    
                    {/* Quote mark */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-4xl sm:text-5xl leading-none opacity-5 font-serif">"</div>
                    
                    {/* Content */}
                    <div className="flex flex-col h-full">
                      {/* Quote section - improved scrolling for mobile */}
                      <div className="flex-grow mb-3 sm:mb-4 max-h-24 sm:max-h-28 md:max-h-36 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base italic leading-relaxed relative z-10">
                          "{testimonial.feedback}"
                        </p>
                      </div>
                      
                      {/* Author section - responsive sizing */}
                      <div className="flex items-center mt-auto">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-2 sm:ml-3">
                          <h4 className="font-semibold text-white text-xs sm:text-sm md:text-base">{testimonial.name}</h4>
                          {testimonial.position && (
                            <p className="text-[#4ECDC4] text-xs">{testimonial.position}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Glowing corner accent - scaled for different screens */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-tl-[50px] sm:rounded-tl-[80px] md:rounded-tl-[100px] bg-gradient-to-tl from-[#4ECDC4]/20 to-transparent opacity-30" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
          
          {/* Empty grid for spacing when sets are absolutely positioned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 opacity-0 pointer-events-none">
            {testimonialSets.length > 0 && testimonialSets[0].map((_, index) => (
              <div key={index} className="h-48 sm:h-56 md:h-64"></div>
            ))}
          </div>
        </div>
        
        {/* Navigation controls - responsive positioning and touch-friendly */}
        {testimonialSets.length > 1 && (
          <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-30 px-2 sm:px-4">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm text-white border border-gray-700/50"
              onClick={prevSet}
              aria-label="Previous set of testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm text-white border border-gray-700/50"
              onClick={nextSet}
              aria-label="Next set of testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        )}
        
        {/* Pagination indicators - enhanced for mobile touch */}
        {testimonialSets.length > 1 && (
          <div className="flex justify-center items-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
            {testimonialSets.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  activeSetIndex === index 
                  ? "bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] w-6 sm:w-8" 
                  : "bg-gray-600 hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSet(index)}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Auto-play indicator - scaled appropriately */}
        {isAutoPlaying && testimonialSets.length > 1 && (
          <div className="mt-3 sm:mt-4 flex justify-center">
            <div className="h-0.5 w-16 sm:w-20 md:w-24 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Testimonials;