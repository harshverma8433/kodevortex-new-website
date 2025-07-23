import { Users, Trophy, Award, HeartHandshake, Clock, Zap } from 'lucide-react';

const WhyLearnSection = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with 10+ years of experience',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Trophy,
      title: 'Career-Aligned Curriculum',
      description: 'Courses designed to match current industry demands and trends',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Get recognized certificates that boost your career prospects',
      gradient: 'from-green-500 to-blue-600'
    },
    {
      icon: HeartHandshake,
      title: '24/7 Doubt Support',
      description: 'Round-the-clock assistance from our dedicated support team',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Learn at your own pace with lifetime access to content',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Hands-on Projects',
      description: 'Build real-world projects to strengthen your portfolio',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section   className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why Learn with <span className="gradient-text">KodeVortex</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our comprehensive learning ecosystem designed for your success
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 glow-effect cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500 mt-6"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass-card rounded-3xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">10,000+</div>
              <div className="text-muted-foreground">Active Learners</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">10+</div>
              <div className="text-muted-foreground">Expert Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">95%</div>
              <div className="text-muted-foreground">Job Placement</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">4.9/5</div>
              <div className="text-muted-foreground">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnSection;