import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import aiImage from '@/assets/ai-course.jpg';
import pythonImage from '@/assets/python-course.jpg';
import reactImage from '@/assets/react-course.jpg';

const CourseCategories = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [selectedSection, setSelectedSection] = useState('trendingcourse');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const managementCourses = [
    {
      id: 9,
      title: 'Workday HCM Administration',
      instructor: 'Michael Thompson',
      image: aiImage,
      duration: '8 weeks',
      students: '1,456',
      rating: 4.7,
      price: '$599',
      level: 'Professional',
      description: 'Complete Workday HCM configuration and administration',
      syllabus: [
        'Introduction to Workday HCM',
        'Core HCM Configuration',
        'Business Processes Setup',
        'Security Groups & Roles',
        'Workday Studio Basics',
        'Advanced Reporting & Dashboards',
        'Integrations Overview',
        'Final Capstone Project'
      ]
    },
    {
      id: 10,
      title: 'Digital Project Management',
      instructor: 'Lisa Wang',
      image: pythonImage,
      duration: '6 weeks',
      students: '2,108',
      rating: 4.8,
      price: '$299',
      level: 'Beginner',
      description: 'Agile methodologies and modern project management tools',
      syllabus: [
        'Agile & Scrum Introduction',
        'Sprint Planning & Execution',
        'Project Lifecycle & Documentation',
        'Team Collaboration Tools',
        'Risk Management',
        'Project Closure Techniques'
      ]
    }
  ];

  const sections = [
    { id: 'trendingcourse', label: 'Trending Courses' },
    { id: 'datascience', label: 'Data Science' },
    { id: 'softwaredevlopment', label: 'Software Devlopment' },
    { id: 'cloudcomputing', label: 'Cloud Computing' },
    { id: 'fashion&interior', label: 'Fashion & Interior' },
    { id: 'sap', label: 'SAP' },
    { id: 'hr', label: 'HR' },
    { id: 'language', label: 'Language' },
  ];

  const allCourses = [
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
      category: 'datascience',
      description: 'Deep dive into GPT, DALL-E, and custom AI model development',
      syllabus: [
        'Week 1: Introduction to AI & ML',
        'Week 2: Deep Learning with TensorFlow',
        'Week 3: Introduction to Generative Models',
        'Week 4: GPT and Transformer Architecture',
        'Week 5: Building Chatbots',
        'Week 6: Image Generation using GANs & DALL·E',
        'Week 7: Prompt Engineering',
        'Week 8: Model Deployment with Flask',
        'Week 9: Real-time Use Cases',
        'Week 10: Custom Fine-tuning',
        'Week 11: Ethics & Bias in AI',
        'Week 12: Capstone Project',
      ]
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
      category: 'softwaredevlopment',
      description: 'Build scalable web applications with Python, Django, and React',
      syllabus: [
        'HTML, CSS & JavaScript Basics',
        'Python Fundamentals',
        'Django Models & Views',
        'User Authentication',
        'REST APIs with Django',
        'React Basics & Hooks',
        'Connecting Django with React',
        'Deployment to Cloud',
        'Final Full Stack Project'
      ]
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
      category: 'softwaredevlopment',
      description: 'Modern frontend development with React ecosystem',
      syllabus: [
        'React Core Concepts',
        'Hooks Deep Dive',
        'Routing with React Router',
        'State Management with Redux',
        'Next.js Pages & SSR',
        'API Routes & Middleware',
        'Authentication with JWT',
        'SEO in Next.js',
        'Testing & Deployment'
      ]
    },
    {
      id: 4,
      title: 'AWS & Cloud Fundamentals',
      instructor: 'James Lee',
      image: aiImage,
      duration: '8 weeks',
      students: '1,820',
      rating: 4.7,
      price: '$299',
      level: 'Beginner',
      category: 'cloudcomputing',
      description: 'Learn cloud basics with real-time AWS deployment and services',
      syllabus: [
        'Cloud Basics & Deployment Models',
        'AWS Free Tier Setup',
        'EC2, S3, IAM',
        'RDS & DynamoDB',
        'VPC & Networking',
        'Serverless with Lambda',
        'Monitoring & Billing',
        'Hands-on Project'
      ]
    },
    {
      id: 5,
      title: 'Interior Design Basics',
      instructor: 'Clara Miles',
      image: pythonImage,
      duration: '6 weeks',
      students: '980',
      rating: 4.6,
      price: '$199',
      level: 'Beginner',
      category: 'fashion&interior',
      description: 'Foundational course in interior planning, colors, and furnishings',
      syllabus: [
        'Color Theory & Psychology',
        'Furniture Selection & Layout',
        'Lighting Techniques',
        'Textiles & Accessories',
        'Room-by-Room Planning',
        'Practical Design Project'
      ]
    },
    {
      id: 6,
      title: 'SAP FICO Essentials',
      instructor: 'Rajiv Gupta',
      image: reactImage,
      duration: '10 weeks',
      students: '2,345',
      rating: 4.8,
      price: '$399',
      level: 'Advanced',
      category: 'sap',
      description: 'Understand SAP financials, integration and configuration',
      syllabus: [
        'SAP Overview & Navigation',
        'FI Module Configuration',
        'CO Module Overview',
        'Accounts Payable & Receivable',
        'Asset Management',
        'Integration Scenarios',
        'Hands-on Exercises'
      ]
    },
    {
      id: 7,
      title: 'Human Resources Management',
      instructor: 'Priya Mehta',
      image: aiImage,
      duration: '8 weeks',
      students: '1,110',
      rating: 4.5,
      price: '$259',
      level: 'Intermediate',
      category: 'hr',
      description: 'Complete guide to hiring, training, and managing people',
      syllabus: [
        'Recruitment Strategies',
        'Employee Onboarding',
        'Performance Appraisal',
        'Training & Development',
        'Labor Laws & Policies',
        'HRMS Tools Overview',
        'Case Studies'
      ]
    },
    {
      id: 8,
      title: 'Spoken English Mastery',
      instructor: 'Alex Thompson',
      image: pythonImage,
      duration: '4 weeks',
      students: '3,650',
      rating: 4.6,
      price: '$149',
      level: 'Beginner',
      category: 'language',
      description: 'Improve fluency and confidence in English communication',
      syllabus: [
        'Grammar & Vocabulary',
        'Pronunciation Practice',
        'Speaking Fluency Drills',
        'Listening Comprehension',
        'Public Speaking Practice',
        'Mock Interviews'
      ]
    }
  ];

  const filteredCourses =
    selectedSection === 'trendingcourse'
      ? allCourses.slice(0, 3)
      : allCourses.filter((course) => course.category === selectedSection);

  const displayedCourses =
    activeTab === 'technical' ? filteredCourses : managementCourses;

  return (
    <section id="categories" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Course <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your learning path and excel in your chosen field
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 rounded-2xl">
            <div className="flex space-x-2">
              {['technical', 'management'].map((key) => (
                <Button
                  key={key}
                  variant={activeTab === key ? 'gradient' : 'ghost'}
                  size="lg"
                  onClick={() => setActiveTab(key)}
                  className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 capitalize"
                >
                  {key}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === 'technical' && (
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={selectedSection === section.id ? 'default' : 'outline'}
                onClick={() => setSelectedSection(section.id)}
                className={`capitalize ${selectedSection === section.id ? 'border border-primary bg-primary/90 text-white' : ''}`}
              >
                {section.label}
              </Button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map((course, index) => (
            <div
              key={course.id}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 glow-effect"
              style={{ animationDelay: `${index * 150}ms` }}
            >
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

                <Button
                  variant="gradient"
                  className="w-full group/btn"
                  onClick={() => setSelectedCourse(course)}
                >
                  View Course
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-[#1e293b] text-white p-6 rounded-2xl max-w-xl w-full shadow-xl relative">
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-xl"
              onClick={() => setSelectedCourse(null)}
            >
              ✕
            </button>

            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">{selectedCourse.title}</h2>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Instructor:</strong> {selectedCourse.instructor}
            </p>
            <p className="text-muted-foreground mb-4">{selectedCourse.description}</p>

            {selectedCourse?.syllabus && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Syllabus</h4>
                <ul className="text-sm max-h-48 overflow-y-auto space-y-1 list-disc list-inside pr-2">
                  {selectedCourse.syllabus.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
              <span><Clock className="inline-block h-4 w-4 mr-1" />{selectedCourse.duration}</span>
              <span><Users className="inline-block h-4 w-4 mr-1" />{selectedCourse.students}</span>
              <span><Star className="inline-block h-4 w-4 text-yellow-500 mr-1" />{selectedCourse.rating}</span>
            </div>

            <div className="flex justify-between items-center">
              <Badge>{selectedCourse.level}</Badge>
              <Badge variant="secondary">{selectedCourse.price}</Badge>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseCategories;
