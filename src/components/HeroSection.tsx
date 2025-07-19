import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import heroVortex from '@/assets/hero-vortex.jpg';
import learningScene from '@/assets/learning-scene.jpg';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-8 bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute  inset-0 opacity-10">
        <img 
          src={heroVortex} 
          alt="Digital Vortex" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-glow/30 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 z-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary-glow">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Future of Learning</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Master Future Skills with{' '}
              <span className="gradient-text">KodeVortex</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Join thousands of learners transforming their careers with cutting-edge courses in AI, 
              development, and management. Learn from industry experts and get job-ready skills.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50K+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">200+</div>
              <div className="text-sm text-muted-foreground">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">95%</div>
              <div className="text-sm text-muted-foreground">Job Success</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => navigate("/courses")}  variant="gradient" size="xl" className="group">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="gradient-outline" size="xl" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:block hidden">
          <div className="relative z-10">
            <img 
              src={learningScene} 
              alt="Students Learning" 
              className="rounded-2xl shadow-float glass-card p-4"
            />
          </div>
          
          {/* Floating Cards */}
          <div className="absolute -top-4 -left-4 glass-card p-4 rounded-xl float-animation">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Live Classes</span>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl float-animation" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">4.9★</div>
              <div className="text-xs text-muted-foreground">Student Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;