import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useTypewriter } from 'react-simple-typewriter';
import AboutUsSection1 from './AboutUsSection1';
import OurTeam1 from './OurTeam1/OurTeam1';
import WhatisKodeVortex from './WhatisKodeVortex';
import VisionSection from './VisionSection';
import MissionSection from './MissionSection';


const AboutUsPage = () => {

  return (
    <div>
      <WhatisKodeVortex />
      <MissionSection />
      <VisionSection />
      <AboutUsSection1 />
    
    <OurTeam1 />
    </div>
  );
};

export default AboutUsPage;
