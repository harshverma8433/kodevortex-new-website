import React, { useState, useEffect } from 'react';

const AnimatedFeatureGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const features = [
    { 
      icon: "✧", 
      title: "Advanced AI", 
      desc: "Revolutionary AI-powered coding assistance that understands context and learns your preferences",
      gradient: "from-indigo-500 to-purple-600",
      delay: 0
    },
    { 
      icon: "⟁", 
      title: "Real-time Collaboration", 
      desc: "Seamless team workflow integration with live sharing and interactive feedback",
      gradient: "from-teal-400 to-cyan-500", 
      delay: 0.2
    },
    { 
      icon: "⌘", 
      title: "Developer Ecosystem", 
      desc: "Comprehensive tools and resources to accelerate your development process",
      gradient: "from-fuchsia-500 to-pink-600",
      delay: 0.4
    }
  ];
  
  return (
    <div className="p-8 bg-gray-900 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-8 text-white">Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 p-6 transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: `${0.3 + feature.delay}s` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 hover:opacity-20 transition-opacity duration-300`}></div>
            
            {/* Icon with glow effect */}
            <div className="relative mb-4">
              <div className={`text-4xl mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent animate-pulse`}>
                {feature.icon}
              </div>
            </div>
            
            {/* Content */}
            <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
              {feature.title}
            </h3>
            <p className="text-gray-300 z-10 relative">{feature.desc}</p>
            
            {/* Hover effect circle */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-white opacity-0 group-hover:opacity-5 transition-all duration-300 ease-in-out transform group-hover:scale-150"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedFeatureGrid;