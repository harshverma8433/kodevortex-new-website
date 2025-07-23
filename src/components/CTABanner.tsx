import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const CTABanner = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card rounded-3xl p-12 md:p-16 space-y-8 glow-effect">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-gradient-primary p-4 rounded-2xl shadow-glow">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Upskill with{' '}
              <span className="gradient-text">KodeVortex</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join over 50,000 students who have transformed their careers. 
              Start your journey today with our expert-led courses and lifetime support.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
            <div className="space-y-2">
              <div className="text-2xl font-bold gradient-text">✨ Free Trial</div>
              <div className="text-sm text-muted-foreground">7-day full access</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold gradient-text">🏆 Certification</div>
              <div className="text-sm text-muted-foreground">Industry recognized</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold gradient-text">🚀 Job Support</div>
              <div className="text-sm text-muted-foreground">Career guidance included</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="xl" className="group px-12">
              Join Free Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={() => navigate("/courses")} variant="gradient-outline" size="xl" className="px-12">
              Browse Courses
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by students from top companies
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-lg font-bold">Google</div>
              <div className="text-lg font-bold">Microsoft</div>
              <div className="text-lg font-bold">Meta</div>
              <div className="text-lg font-bold">Netflix</div>
              <div className="text-lg font-bold">Amazon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;