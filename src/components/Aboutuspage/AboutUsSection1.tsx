import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTypewriter } from 'react-simple-typewriter';

const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Enhanced typewriter effect
  const [text] = useTypewriter({
    words: ["SHIVAM PAISAL"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 100,
    delaySpeed: 1800
  });

  // Responsive background elements
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const textRevealVariants = {
    hidden: { 
      opacity: 0,
      clipPath: "inset(0 100% 0 0)"
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Background particles
  const particleCount = 20;
  const particles = [...Array(particleCount)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    speed: Math.random() * 1 + 0.2
  }));

  // Content for different tabs
  const tabContent = {
    professional: (
      <motion.div 
        variants={itemVariants} 
        className="space-y-4"
      >
        <h3 className="text-2xl font-semibold text-white mb-3">Professional Summary</h3>
        <p className="text-zinc-200 leading-relaxed">
        With over four years of corporate training experience in IT and a strong technical background in Java and Machine Learning, our CEO is a visionary leader committed to solving real-world business challenges through cutting-edge Web technologies, AI, ML, and Deep Learning.
        </p>
        <p className="text-zinc-300 leading-relaxed">
        A seasoned Software Trainer and Engineer, they have empowered professionals and businesses through expert training in Java, Python, Data Science, Machine Learning, Deep Learning, and Artificial Intelligence across various platforms, including online, virtual, and offsite sessions. Their dedication to knowledge sharing and technical excellence has earned them recognition and appreciation from employers and clients alike.
        </p>
        <p className="text-zinc-300 leading-relaxed">
        With expertise in AI, Machine Learning, and IT training, our CEO has led groundbreaking projects, including developing a Random Forest-based model to predict HCP prescriptions, designing a pharma consent management system using MERN stack & ICRT ETL, and engineering an MLP Neural Network for drug sales forecasting with advanced optimization techniques. As an IBM-Certified T3 Trainer, they specialize in Python, R, ML, Blockchain, Robotics, NLP, and GPU programming, and have successfully conducted 20+ Faculty Development Programs (FDPs) in collaboration with IBM India Pvt. Ltd., training faculty across top engineering institutions. With a strong academic background (M.Tech & B.Tech) and a passion for innovation, they continue to drive transformational AI and IT solutions while shaping the future of technology education.
        </p>
      </motion.div>
    ),
    experience: (
      <motion.div 
        variants={itemVariants} 
        className="space-y-4"
      >
        <h3 className="text-2xl font-semibold text-white mb-3">Work Experience</h3>
        
        {/* Work Experience Section */}
        <div className="mb-6">
          {/* <h4 className="text-xl font-medium text-indigo-400 mb-3">Work Experience</h4> */}
          <div className="space-y-4">
            <div className="p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/50">
              <h5 className="text-lg font-medium text-purple-400 mb-1">Machine Learning Expert</h5>
              <p className="text-zinc-400 text-xs mb-2">Bailiwick Solution, Noida — Current</p>
              <p className="text-zinc-300 text-sm">Developing algorithms based on data analytics and machine learning with hands-on experience building multiple ML models and neural networks to identify patterns and extract valuable insights.</p>
            </div>
            
            <div className="p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/50">
              <h5 className="text-lg font-medium text-purple-400 mb-1">Full Stack Java Developer</h5>
              <p className="text-zinc-400 text-xs mb-2">Sonsvales Solution, Noida</p>
              <p className="text-zinc-300 text-sm">Worked directly with clients to gather requirements, developed all entities, services and repositories, and created genetic algorithms and flowcharts for applications.</p>
            </div>
            
            <div className="p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/50">
              <h5 className="text-lg font-medium text-purple-400 mb-1">Freelance Trainer</h5>
              <p className="text-zinc-400 text-xs mb-2">Self-employed — Since June 2018</p>
              <p className="text-zinc-300 text-sm">Providing expert training in Python, Data Science, Machine Learning, Deep Learning, and Artificial Intelligence to diverse clients and students.</p>
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        {/* <div>
          <h4 className="text-xl font-medium text-indigo-400 mb-3">Key Projects</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/50">
              <h4 className="text-lg font-medium text-indigo-400 mb-2">E-Commerce Platform</h4>
              <p className="text-zinc-300 text-sm">Complete redesign and development of a responsive e-commerce platform with 200% increase in conversion rates.</p>
            </div>
            <div className="p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/50">
              <h4 className="text-lg font-medium text-purple-400 mb-2">FinTech Dashboard</h4>
              <p className="text-zinc-300 text-sm">Interactive financial analytics dashboard with real-time data visualization using D3.js and React.</p>
            </div>
            <div className="p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/50">
              <h4 className="text-lg font-medium text-pink-400 mb-2">SaaS Application</h4>
              <p className="text-zinc-300 text-sm">Built a scalable SaaS platform with subscription management, user authentication, and admin controls.</p>
            </div>
            <div className="p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/50">
              <h4 className="text-lg font-medium text-indigo-400 mb-2">ML-Powered Analytics</h4>
              <p className="text-zinc-300 text-sm">Developed custom neural network models for pattern recognition and predictive analytics with enterprise-level data integration.</p>
            </div>
          </div>
        </div> */}
        
        <div className="pt-2">
          <p className="text-zinc-400 text-sm">Over 5 years of professional experience in IT development and machine learning</p>
        </div> 
      </motion.div>
    ),
    // projects: (
    //   <motion.div 
    //     variants={itemVariants} 
    //     className="space-y-4"
    //   >
    //     <h3 className="text-2xl font-semibold text-white mb-3">Featured Projects</h3>
    //     <div className="space-y-4">
    //       <div className="p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30">
    //         <div className="flex justify-between items-start mb-2">
    //           <h4 className="text-xl font-medium text-white">Quantum Analytics Dashboard</h4>
    //           <span className="text-xs px-2 py-1 bg-indigo-900/40 text-indigo-300 rounded-full">2024</span>
    //         </div>
    //         <p className="text-zinc-300 mb-3">
    //           A comprehensive analytics platform for enterprise clients with customizable widgets, 
    //           real-time data processing, and advanced visualization tools.
    //         </p>
    //         <div className="flex flex-wrap gap-2">
    //           <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-full">React</span>
    //           <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-full">Redux</span>
    //           <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-full">Node.js</span>
    //           <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-full">D3.js</span>
    //         </div>
    //       </div>
          
    //       <div className="p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30">
    //         <div className="flex justify-between items-start mb-2">
    //           <h4 className="text-xl font-medium text-white">Nexus E-Commerce Platform</h4>
    //           <span className="text-xs px-2 py-1 bg-purple-900/40 text-purple-300 rounded-full">2023</span>
    //         </div>
    //         <p className="text-zinc-300 mb-3">
    //           Full-stack e-commerce solution with inventory management, payment processing,
    //           and customer relationship management tools.
    //         </p>
    //         <div className="flex flex-wrap gap-2">
    //           <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-full">Next.js</span>
    //           <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-full">MongoDB</span>
    //           <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-full">Stripe API</span>
    //           <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-full">Tailwind</span>
    //         </div>
    //       </div>
    //     </div>
    //   </motion.div>
    // ),
    // skills: (
    //   <motion.div 
    //     variants={itemVariants} 
    //     className="space-y-4"
    //   >
    //     <h3 className="text-2xl font-semibold text-white mb-3">Skill Set</h3>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       <div className="p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30">
    //         <h4 className="text-lg font-medium text-indigo-400 mb-3">Frontend Development</h4>
    //         <div className="space-y-2">
    //           {[
    //             { name: "React.js", level: 90 },
    //             { name: "Next.js", level: 85 },
    //             { name: "TypeScript", level: 80 },
    //             { name: "Tailwind CSS", level: 95 },
    //           ].map(skill => (
    //             <div key={skill.name}>
    //               <div className="flex justify-between mb-1">
    //                 <span className="text-zinc-300">{skill.name}</span>
    //                 <span className="text-zinc-400 text-sm">{skill.level}%</span>
    //               </div>
    //               <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
    //                 <div 
    //                   className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
    //                   style={{ width: `${skill.level}%` }}
    //                 ></div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
          
    //       <div className="p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30">
    //         <h4 className="text-lg font-medium text-purple-400 mb-3">Backend Development</h4>
    //         <div className="space-y-2">
    //           {[
    //             { name: "Node.js", level: 85 },
    //             { name: "Express", level: 90 },
    //             { name: "MongoDB", level: 80 },
    //             { name: "GraphQL", level: 75 },
    //           ].map(skill => (
    //             <div key={skill.name}>
    //               <div className="flex justify-between mb-1">
    //                 <span className="text-zinc-300">{skill.name}</span>
    //                 <span className="text-zinc-400 text-sm">{skill.level}%</span>
    //               </div>
    //               <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
    //                 <div 
    //                   className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
    //                   style={{ width: `${skill.level}%` }}
    //                 ></div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
          
    //       <div className="p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30">
    //         <h4 className="text-lg font-medium text-pink-400 mb-3">UI/UX Design</h4>
    //         <div className="space-y-2">
    //           {[
    //             { name: "Figma", level: 95 },
    //             { name: "Adobe XD", level: 85 },
    //             { name: "User Research", level: 80 },
    //             { name: "Wireframing", level: 90 },
    //           ].map(skill => (
    //             <div key={skill.name}>
    //               <div className="flex justify-between mb-1">
    //                 <span className="text-zinc-300">{skill.name}</span>
    //                 <span className="text-zinc-400 text-sm">{skill.level}%</span>
    //               </div>
    //               <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
    //                 <div 
    //                   className="h-full bg-gradient-to-r from-pink-500 to-red-500"
    //                   style={{ width: `${skill.level}%` }}
    //                 ></div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
          
    //       <div className="p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30">
    //         <h4 className="text-lg font-medium text-indigo-400 mb-3">Other Skills</h4>
    //         <div className="flex flex-wrap gap-2">
    //           {[
    //             "Docker", "AWS", "CI/CD", "Jest", "Redux", "Webpack", 
    //             "Firebase", "REST API", "Git", "Agile", "Scrum", "SEO"
    //           ].map(skill => (
    //             <span key={skill} className="px-3 py-1 bg-zinc-700/40 text-zinc-300 rounded-full text-sm">
    //               {skill}
    //             </span>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </motion.div>
    // ),
    // clients: (
    //   <motion.div 
    //     variants={itemVariants} 
    //     className="space-y-4"
    //   >
    //     <h3 className="text-2xl font-semibold text-white mb-3">Corporate Clients</h3>
    //     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    //       {[
    //         { name: "TechCorp", industry: "Software" },
    //         { name: "FinancePro", industry: "Finance" },
    //         { name: "HealthPlus", industry: "Healthcare" },
    //         { name: "RetailMax", industry: "Retail" },
    //         { name: "EduSmart", industry: "Education" },
    //         { name: "MediaFlow", industry: "Entertainment" },
    //       ].map((client, index) => (
    //         <motion.div 
    //           key={client.name}
    //           className="p-4 bg-zinc-800/40 backdrop-blur-sm rounded-lg border border-zinc-700/30 flex flex-col items-center text-center"
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ delay: 0.2 + index * 0.1 }}
    //         >
    //           <div className="w-12 h-12 mb-2 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center">
    //             <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
    //               {client.name[0]}
    //             </span>
    //           </div>
    //           <h4 className="text-lg font-medium text-white">{client.name}</h4>
    //           <p className="text-zinc-400 text-sm">{client.industry}</p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </motion.div>
    // ),
    // academic: (
    //   <motion.div 
    //     variants={itemVariants} 
    //     className="space-y-4"
    //   >
    //     <h3 className="text-2xl font-semibold text-white mb-3">Academic Background</h3>
    //     <div className="space-y-4">
    //       <div className="relative pl-6 pb-6 border-l-2 border-indigo-500/30">
    //         <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-indigo-500"></div>
    //         <div className="p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30">
    //           <div className="flex justify-between items-start mb-2">
    //             <h4 className="text-xl font-medium text-white">Master of Computer Science</h4>
    //             <span className="text-xs px-2 py-1 bg-indigo-900/40 text-indigo-300 rounded-full">2018-2020</span>
    //           </div>
    //           <h5 className="text-indigo-400 mb-2">Stanford University</h5>
    //           <p className="text-zinc-300">
    //             Specialized in Human-Computer Interaction and Advanced Web Technologies. 
    //             Graduated with honors and completed thesis on "Progressive Web Applications 
    //             and Their Impact on User Engagement."
    //           </p>
    //         </div>
    //       </div>
          
    //       <div className="relative pl-6 pb-6 border-l-2 border-purple-500/30">
    //         <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-purple-500"></div>
    //         <div className="p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30">
    //           <div className="flex justify-between items-start mb-2">
    //             <h4 className="text-xl font-medium text-white">Bachelor of Engineering</h4>
    //             <span className="text-xs px-2 py-1 bg-purple-900/40 text-purple-300 rounded-full">2014-2018</span>
    //           </div>
    //           <h5 className="text-purple-400 mb-2">MIT</h5>
    //           <p className="text-zinc-300">
    //             Major in Computer Science with minor in UI/UX Design. Participated in 
    //             multiple hackathons and led the university's web development club.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </motion.div>
    // ),
    // certifications: (
    //   <motion.div 
    //     variants={itemVariants} 
    //     className="space-y-4"
    //   >
    //     <h3 className="text-2xl font-semibold text-white mb-3">Certifications</h3>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       {[
    //         { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    //         { name: "Professional UI/UX Designer", issuer: "Interaction Design Foundation", year: "2022" },
    //         { name: "Full Stack Web Developer", issuer: "Meta", year: "2021" },
    //         { name: "Google Cloud Professional", issuer: "Google", year: "2020" },
    //       ].map((cert, index) => (
    //         <motion.div 
    //           key={cert.name}
    //           className="p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30"
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ delay: 0.2 + index * 0.1 }}
    //         >
    //           <div className="flex items-start mb-2">
    //             <div className="w-10 h-10 mr-3 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
    //               <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
    //               </svg>
    //             </div>
    //             <div>
    //               <h4 className="text-lg font-medium text-white">{cert.name}</h4>
    //               <div className="flex items-center text-sm text-zinc-400">
    //                 <span>{cert.issuer}</span>
    //                 <span className="mx-2">•</span>
    //                 <span>{cert.year}</span>
    //               </div>
    //             </div>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </motion.div>
    // ),
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 overflow-hidden py-16 px-4">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.12),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.15),transparent_60%)]"></div>
        
        {/* Animated particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, particle.speed * 20, 0],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + particle.speed * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Glass morphism accent elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Section heading */}
          <motion.div 
            variants={itemVariants} 
            className="mb-10 text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-tight mb-4">
              MEET THE CEO
            </h2>
            <motion.div 
              className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ width: "0px" }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            ></motion.div>
          </motion.div>

          {/* Main content layout - profile pic left, content right */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full"
          >
            {/* Left side - Profile image and basic info (fixed position) */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/3 flex flex-col items-center sticky top-8 self-start"
            >
              {/* Profile image with enhanced effects */}
              <motion.div 
                className="relative w-72 h-72 md:w-80 md:h-80 flex-shrink-0 mb-6"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-md"
                  animate={{
                    opacity: isHovered ? 0.8 : 0.5,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                ></motion.div>
                
                <motion.div 
                  className="absolute inset-0 rounded-full bg-[rgba(15,15,20,0.5)] backdrop-blur-md border border-zinc-700/50"
                  style={{ padding: "5px" }}
                  whileHover={{ scale: 1.03, rotate: 2 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-full h-full rounded-full bg-zinc-900 overflow-hidden">
                    {/* Placeholder for image with improved SVG */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-600">
                      <svg className="w-32 h-32 opacity-30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {/* Uncomment and add src when you have an image */}
                    {/* <img className="w-full h-full object-cover" src="" alt="Shivam Paisal" /> */}
                  </div>
                </motion.div>
                
                {/* Orbital ring animation */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30"
                  style={{ margin: "-15px" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
              </motion.div>

              {/* Name and title */}
              <motion.div variants={itemVariants} className="text-center mb-6">
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-3">
                  {text}
                  <span className="inline-block w-1 h-8 md:h-10 ml-1 bg-indigo-400 animate-blink"></span>
                </h3>
                
                <motion.div 
                  variants={textRevealVariants}
                  className="text-xl md:text-2xl text-white/90 font-medium"
                >
                  Developer 
                </motion.div>
              </motion.div>

              {/* Contact buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex gap-4 mb-6"
              >
                <motion.a 
                  href="#" 
                  className="group relative px-6 py-2.5 overflow-hidden rounded-full text-white font-medium text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 18H4V8L12 13L20 8V18ZM20 6L12 11L4 6H20Z"></path>
                    </svg>
                    Contact Me
                    </span>
                </motion.a>
                
                <motion.a 
                  href="#" 
                  className="group relative px-6 py-2.5 overflow-hidden rounded-full text-white font-medium text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* <span className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-700 border border-zinc-700/50"></span> */}
                  {/* <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span> */}
                  <span className="relative flex items-center gap-2">
                    {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM5 5V19H19V5H5ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path>
                    </svg> */}
                    {/* Resume */}
                  </span>
                </motion.a>
              </motion.div>

              {/* Social links */}
              <motion.div 
                variants={itemVariants}
                className="flex gap-3 mb-8"
              >
                {[
                  { icon: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z", name: "Facebook" },
                  { icon: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z", name: "Twitter" },
                  { icon: "M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z", name: "Discord" },
                  { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", name: "LinkedIn" },
                  { icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12", name: "GitHub" },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 rounded-full bg-zinc-800/90 backdrop-blur-sm flex items-center justify-center border border-zinc-700/50 hover:bg-zinc-700/90 transition-colors duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon}></path>
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
              
              {/* Stats */}
              {/* <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-2 w-full"
              >
                {[
                  { value: "7+", label: "Years Exp." },
                  { value: "80+", label: "Projects" },
                  { value: "35+", label: "Clients" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="p-3 bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div> */}
            </motion.div>

            {/* Right side - Tabbed content sections */}
            <motion.div 
              variants={containerVariants}
              className="lg:w-2/3"
            >
              {/* Tab navigation */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start"
              >
                {[
                  { id: 'professional', label: 'Profile' },
                  { id: 'experience', label: 'Work Experience' },
                  // { id: 'projects', label: 'Projects' },
                  // { id: 'skills', label: 'Skills' },
                  // { id: 'clients', label: 'Clients' },
                  // { id: 'academic', label: 'Education' },
                  // { id: 'certifications', label: 'Certifications' },
                ].map(tab => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/20' 
                        : 'bg-zinc-800/50 backdrop-blur-sm text-zinc-300 border border-zinc-700/50 hover:bg-zinc-700/50'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </motion.div>

              {/* Tab content */}
              <motion.div 
                variants={containerVariants}
                className="bg-zinc-800/20 backdrop-blur-sm rounded-xl border border-zinc-700/30 p-6 md:p-8"
              >
                {tabContent[activeTab]}
              </motion.div>
              
              
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;