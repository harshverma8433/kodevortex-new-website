import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import abhiraj from "../../public/abhiraj.jpg";
import anshuman from "../../public/anshuman.jpeg";
import riddhi from "../../public/riddhi.jpg";
import yug from "../../public/yug.jpg";
import soham from "../../public/soham.jpeg";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const testimonials = [
  {
    id: 1,
    name: 'Riddhi',
    role: 'FrontEnd Developer',
    image: riddhi,
    content: 'The frontend bootcamp sharpened my skills with real-world UI/UX projects. I now build beautiful, responsive websites confidently.',
    rating: 5,
    course: 'Frontend Web Development Bootcamp',
    outcome: 'Built portfolio and got hired at Flipkart'
  },
  {
    id: 2,
    name: 'Soham Dhokale',
    role: 'Backend Developer',
    image: soham,
    content: 'KodeVortex backend course helped me master Node.js, databases, and scalable architecture. The hands-on projects were game-changing.',
    rating: 5,
    course: 'Backend Development with Node.js & Express',
    outcome: 'Promoted to Backend Lead at Amazon'
  },
  {
    id: 3,
    name: 'Anshuman Sugandhi',
    role: 'Backend Developer',
    image: anshuman,
    content: 'With a strong focus on APIs, databases, and deployment, I gained confidence as a backend engineer and built production-ready apps.',
    rating: 5,
    course: 'Advanced Backend Engineering Program',
    outcome: 'Promoted to Senior Developer at TCS'
  },
  {
    id: 4,
    name: 'Abhiraj',
    role: 'React Developer',
    image: abhiraj,
    content: 'The React and Next.js course was hands-on and practical. I can now build lightning-fast SPAs and SSR-ready apps with confidence.',
    rating: 5,
    course: 'React & Next.js Masterclass',
    outcome: 'Freelancing full-time and earning 2x'
  },
  {
    id: 5,
    name: 'Yug',
    role: 'Frontend Developer',
    image: yug,
    content: 'From CSS animations to React components, the frontend track gave me all the tools to stand out in interviews and ace design systems.',
    rating: 5,
    course: 'Modern Frontend Developer Program',
    outcome: 'Landed frontend dev role at Microsoft'
  }
];


  const getDefaultContentByRole = (role) => {
    switch (role.toLowerCase()) {
      case 'frontend developer':
        return 'This frontend course really sharpened my skills. I can now build beautiful and responsive apps with confidence.';
      case 'backend developer':
        return 'The backend curriculum was thorough and industry-relevant. It helped me become proficient in modern backend technologies.';
      case 'react developer':
        return 'The React course was extremely hands-on and practical. I can now build scalable web apps using best practices.';
      case 'data scientist':
        return 'The data science training was comprehensive, covering both theory and practice. It really prepared me for the field.';
      case 'ai engineer':
        return 'The AI modules were cutting-edge and very well explained. A great investment for anyone interested in AI.';
      default:
        return 'KodeVortex helped me level up in my career with expert mentorship and real-world projects.';
    }
  };

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
    <section className="py-20 bg-muted/30">
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
                  "{
                    testimonials[currentSlide].content
                      ? testimonials[currentSlide].content
                      : getDefaultContentByRole(testimonials[currentSlide].role)
                  }"
                </blockquote>
                
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium text-primary">
                      Course: {testimonials[currentSlide].course}
                    </div>
                    {/* <div className="bg-green-500/10 px-3 py-1 rounded-full text-sm font-medium text-green-600">
                      ✨ {testimonials[currentSlide].outcome}
                    </div> */}
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
