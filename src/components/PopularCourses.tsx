import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import aiImage from '@/assets/ai-course.jpg';
import pythonImage from '@/assets/python-course.jpg';
import reactImage from '@/assets/react-course.jpg';
import workdayImage from '@/assets/workday-course.jpg';
import { useRef } from 'react';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
};

const PopularCourses = () => {
  const navigate = useNavigate();
  const carouselRef = useRef();

const popularCourses = [
    {
      id: 1,
      title: 'Complete AI & Machine Learning Bootcamp',
      instructor: 'Dr. Sarah Chen',
      image: aiImage,
      duration: '12 weeks',
      students: '2,847',
      rating: 4.9,
      reviews: 523,
      price: '$299',
      originalPrice: '$599',
      category: 'Artificial Intelligence',
      level: 'Beginner to Advanced',
      lessons: 156,
      featured: true,
    },
    {
      id: 2,
      title: 'Python Full Stack Development',
      instructor: 'Mark Rodriguez',
      image: pythonImage,
      duration: '16 weeks',
      students: '5,234',
      rating: 4.8,
      reviews: 892,
      price: '$399',
      originalPrice: '$799',
      category: 'Web Development',
      level: 'Intermediate',
      lessons: 203,
      featured: true,
    },
    {
      id: 3,
      title: 'React.js & Next.js Mastery',
      instructor: 'Emily Johnson',
      image: reactImage,
      duration: '10 weeks',
      students: '3,921',
      rating: 4.9,
      reviews: 672,
      price: '$349',
      originalPrice: '$699',
      category: 'Frontend Development',
      level: 'Intermediate',
      lessons: 134,
      featured: false,
    },
    {
      id: 4,
      title: 'Workday HCM Complete Guide',
      instructor: 'Michael Thompson',
      image: workdayImage,
      duration: '8 weeks',
      students: '1,456',
      rating: 4.7,
      reviews: 298,
      price: '$599',
      originalPrice: '$999',
      category: 'HR Management',
      level: 'Professional',
      lessons: 89,
      featured: false,
    },
    {
      id: 5,
      title: 'Advanced React Patterns & Performance',
      instructor: 'Alex Chen',
      image: reactImage,
      duration: '6 weeks',
      students: '1,892',
      rating: 4.8,
      reviews: 341,
      price: '$249',
      originalPrice: '$499',
      category: 'Advanced Frontend',
      level: 'Advanced',
      lessons: 76,
      featured: false,
    },
    {
      id: 6,
      title: 'Data Science with Python & AI',
      instructor: 'Dr. Lisa Wang',
      image: pythonImage,
      duration: '14 weeks',
      students: '2,567',
      rating: 4.9,
      reviews: 445,
      price: '$449',
      originalPrice: '$899',
      category: 'Data Science',
      level: 'Intermediate',
      lessons: 187,
      featured: true,
    },
  ];

  const goNext = () => carouselRef.current?.next();
  const goPrev = () => carouselRef.current?.previous();

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Most <span className="gradient-text">Popular Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of students in our top-rated courses and accelerate your career
          </p>
        </div>

        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="px-2"
        >
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-2xl overflow-hidden glow-effect relative group hover:scale-105 transition-all duration-500"
            >
              {course.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-primary text-primary-foreground font-medium">
                    ⭐ Bestseller
                  </Badge>
                </div>
              )}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {course.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{course.level}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                    {course.title}
                  </h4>
                  <p className="text-sm text-primary font-medium">by {course.instructor}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(course.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{course.rating}</span>
                  <span className="text-sm text-muted-foreground">({course.reviews})</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold gradient-text">{course.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                    </div>
                  </div>
                  <Button variant="gradient" size="sm" className="px-6">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* 🔽 Arrows outside the carousel */}
       {/* 🔽 Arrows + View All Button aligned horizontally */}
<div className="flex justify-center items-center gap-4 mt-12">
  <Button
    variant="outline"
    className="rounded-full p-3 text-lg"
    onClick={goPrev}
  >
    ←
  </Button>

  <Button
    variant="gradient-outline"
    size="lg"
    className="px-8 ml-20 mr-20"
    onClick={() => navigate('/courses')}
  >
    View All Courses
  </Button>

  <Button
    variant="outline"
    className="rounded-full p-3 text-lg"
    onClick={goNext}
  >
    →
  </Button>
</div>

      </div>
    </section>
  );
};

export default PopularCourses;
