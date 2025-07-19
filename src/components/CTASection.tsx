import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Rocket, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
<div className="flex justify-center gap-8 mt-12 mx-52 ">
            {/* For Students */}
            <div className="glass-card p-8 text-center glow-hover rounded-xl">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">For Students</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Access premium courses, get mentorship, and build your dream career in tech.
              </p>
              <Button className="btn-secondary w-full">
                Start Learning Free
              </Button>
            </div>
            
            {/* For Corporates */}
            <div className="glass-card p-8 text-center glow-hover rounded-xl">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">For Corporates</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Upskill your team with custom training programs and corporate solutions.
              </p>
              <Button  className="btn-secondary w-full">
                Enterprise Solutions
              </Button>
            </div>
            
            {/* For Colleges */}
            <div className="glass-card p-8 text-center glow-hover rounded-xl">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">For Colleges</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Upskill your team with custom training programs and corporate solutions.
              </p>
              <Button  className="btn-outline w-full">
                Enterprise Solutions
              </Button>
            </div>
          </div>  )
}

export default CTASection