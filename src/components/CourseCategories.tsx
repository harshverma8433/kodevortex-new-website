import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import workdayImage from '@/assets/workday-course.jpg';
import aiImage from '@/assets/ai-course.jpg';
import pythonImage from '@/assets/python-course.jpg';
import reactImage from '@/assets/react-course.jpg';

const CourseCategories = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const categories = {
    technical: {
      title: 'Technical Courses',
      subtitle: 'Master cutting-edge technologies',
      courses: [
        {
          id: 1,
          title: 'Generative AI & Machine Learning',
          instructor: 'Dr. Sarah Chen',
          image: aiImage,
          duration: '12 weeks',
          students: '2,847',
          rating: 4.9,
          price: '$299',
          level: 'Advanced',
          description: 'Deep dive into GPT, DALL-E, and custom AI model development'
        },
        {
          id: 2,
          title: 'Python Full Stack Development',
          instructor: 'Mark Rodriguez',
          image: pythonImage,
          duration: '16 weeks',
          students: '5,234',
          rating: 4.8,
          price: '$399',
          level: 'Intermediate',
          description: 'Build scalable web applications with Python, Django, and React'
        },
        {
          id: 3,
          title: 'React.js & Next.js Mastery',
          instructor: 'Emily Johnson',
          image: reactImage,
          duration: '10 weeks',
          students: '3,921',
          rating: 4.9,
          price: '$349',
          level: 'Intermediate',
          description: 'Modern frontend development with React ecosystem'
        }
      ]
    },
    management: {
      title: 'Management Courses',
      subtitle: 'Lead teams and drive business growth',
      courses: [
        {
          id: 4,
          title: 'Workday HCM Administration',
          instructor: 'Michael Thompson',
          image: workdayImage,
          duration: '8 weeks',
          students: '1,456',
          rating: 4.7,
          price: '$599',
          level: 'Professional',
          description: 'Complete Workday HCM configuration and administration'
        },
        {
          id: 5,
          title: 'Digital Project Management',
          instructor: 'Lisa Wang',
          image: workdayImage,
          duration: '6 weeks',
          students: '2,108',
          rating: 4.8,
          price: '$299',
          level: 'Beginner',
          description: 'Agile methodologies and modern project management tools'
        }
      ]
    }
  };

  const currentCategory = categories[activeTab as keyof typeof categories];

  return (
    <section id="categories" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Course <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your learning path and excel in your chosen field
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 rounded-2xl">
            <div className="flex space-x-2">
              {Object.entries(categories).map(([key, category]) => (
                <Button
                  key={key}
                  variant={activeTab === key ? "gradient" : "ghost"}
                  size="lg"
                  onClick={() => setActiveTab(key)}
                  className="px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Content */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">{currentCategory.title}</h3>
            <p className="text-muted-foreground">{currentCategory.subtitle}</p>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.courses.map((course, index) => (
              <div
                key={course.id}
                className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 glow-effect"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Course Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {course.price}
                    </Badge>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {course.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      by {course.instructor}
                    </p>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="gradient" 
                    className="w-full group/btn"
                  >
                    View Course
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;