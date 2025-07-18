import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'AI Engineer at Google',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b15a130b?w=400&h=400&fit=crop&crop=face',
      content: 'KodeVortex transformed my career completely. The AI course was incredibly comprehensive and the mentors were always available. Within 6 months, I landed my dream job at Google!',
      rating: 5,
      course: 'AI & Machine Learning Bootcamp',
      outcome: 'Got hired at Google as AI Engineer'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Full Stack Developer at Meta',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      content: 'The Python Full Stack course exceeded my expectations. Real-world projects, excellent curriculum, and amazing community support. The career guidance helped me negotiate a 40% salary increase!',
      rating: 5,
      course: 'Python Full Stack Development',
      outcome: '40% salary increase at Meta'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Senior React Developer at Netflix',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      content: 'From complete beginner to senior developer in just 8 months! The React course structure is brilliant, and the hands-on projects gave me the confidence to tackle complex applications.',
      rating: 5,
      course: 'React.js & Next.js Mastery',
      outcome: 'Promoted to Senior Developer'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Workday Consultant at Deloitte',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      content: 'The Workday HCM course is incredibly detailed and practical. The instructor\'s real-world experience made all the difference. I\'m now a certified consultant earning 60% more than before.',
      rating: 5,
      course: 'Workday HCM Administration',
      outcome: '60% income increase as consultant'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Data Scientist at Microsoft',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      content: 'The data science track is phenomenal! From statistics to advanced ML algorithms, everything was covered perfectly. The capstone project helped me stand out in interviews.',
      rating: 5,
      course: 'Data Science with Python & AI',
      outcome: 'Landed Data Scientist role at Microsoft'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations from our community of learners
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Current Testimonial */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Profile */}
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-32 h-32">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-glow"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-primary rounded-full p-2">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">{testimonials[currentSlide].name}</h4>
                  <p className="text-primary font-medium">{testimonials[currentSlide].role}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center items-center space-x-1">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 space-y-6">
                <blockquote className="text-lg md:text-xl leading-relaxed text-foreground">
                  "{testimonials[currentSlide].content}"
                </blockquote>
                
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium text-primary">
                      Course: {testimonials[currentSlide].course}
                    </div>
                    <div className="bg-green-500/10 px-3 py-1 rounded-full text-sm font-medium text-green-600">
                      ✨ {testimonials[currentSlide].outcome}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="glass"
                size="icon"
                onClick={prevSlide}
                className="rounded-full w-12 h-12"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary shadow-glow scale-125'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="glass"
                size="icon"
                onClick={nextSlide}
                className="rounded-full w-12 h-12"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">95%</div>
            <div className="text-sm text-muted-foreground">Job Placement Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">40%</div>
            <div className="text-sm text-muted-foreground">Average Salary Increase</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">6 months</div>
            <div className="text-sm text-muted-foreground">Average Time to Job</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">4.9/5</div>
            <div className="text-sm text-muted-foreground">Student Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;