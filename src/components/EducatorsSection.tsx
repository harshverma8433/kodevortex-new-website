import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Star, Award, Users, Code } from 'lucide-react';
import educator1 from '@/assets/educator-1.jpg';
import educator2 from '@/assets/educator-2.jpg';
import educator3 from '@/assets/educator-3.jpg';
import "@/styles/flipcard.css"

const CardMesh = () => {
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={1}>
      <mesh>
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const EducatorCard = ({ educator, index }: { educator: any, index: number }) => {
  return (
    <div
      className="flip-card h-96 w-full"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flip-card-inner w-full h-full">
        {/* Front Side */}
        <div className="flip-card-front absolute inset-0 w-full h-full">
          <div className="glass-card h-full p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 opacity-20">
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <CardMesh />
              </Canvas>
            </div>

            {/* Profile Image */}
            <div className="relative mb-6 group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-300">
                <img
                  src={educator.image}
                  alt={educator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>

            {/* Name & Title */}
            <h3 className="text-2xl font-bold mb-2 gradient-text">
              {educator.name}
            </h3>
            <p className="text-primary font-semibold mb-4">
              {educator.title}
            </p>

            {/* Quick Stats */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span>{educator.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{educator.students}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute inset-0 w-full h-full">
          <div className="glass-card h-full p-8 flex flex-col justify-center relative overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 opacity-10">
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <CardMesh />
              </Canvas>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 gradient-text">
                {educator.name}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {educator.bio}
              </p>

              {/* Expertise */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-primary">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {educator.expertise.map((skill: string, skillIndex: number) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <Award className="w-4 h-4 text-warning" />
                  </div>
                  <div className="text-lg font-bold text-warning">{educator.experience}</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <Code className="w-4 h-4 text-accent" />
                  </div>
                  <div className="text-lg font-bold text-accent">{educator.courses}</div>
                  <div className="text-xs text-muted-foreground">Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EducatorsSection = () => {
  const educators = [
    {
      name: 'Dr. Alex Rivera',
      title: 'AI & Machine Learning Expert',
      image: educator1,
      rating: '4.9',
      students: '15k+',
      experience: '12+',
      courses: '25',
      bio: 'Former Google AI researcher with extensive experience in deep learning and neural networks. Published 50+ research papers and holds 8 patents in AI technology.',
      expertise: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'MLOps']
    },
    {
      name: 'Sarah Chen',
      title: 'Cloud Architecture Specialist',
      image: educator2,
      rating: '4.8',
      students: '12k+',
      experience: '10+',
      courses: '18',
      bio: 'AWS Solutions Architect and Microsoft Azure MVP. Led digital transformation for Fortune 500 companies and designed cloud infrastructure for scale.',
      expertise: ['AWS', 'Azure', 'DevOps', 'Kubernetes', 'Microservices']
    },
    {
      name: 'Marcus Johnson',
      title: 'Full Stack Development Lead',
      image: educator3,
      rating: '4.9',
      students: '20k+',
      experience: '15+',
      courses: '32',
      bio: 'Senior Software Engineer at Meta with expertise in modern web technologies. Built scalable applications serving millions of users worldwide.',
      expertise: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL']
    }
  ];

  return (
    <section className="py-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            Meet Our <span className="gradient-text">Educators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn from industry veterans and thought leaders who have shaped the
            technology landscape at leading companies worldwide.
          </p>
          <p className="text-sm text-primary mt-4 font-medium">
            💡 Hover over the cards to discover more about our experts
          </p>
        </div>

        {/* Educators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educators.map((educator, index) => (
            <EducatorCard
              key={educator.name}
              educator={educator}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="glass-card p-8 mx-28 my-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Training{' '}
              <span className="gradient-text">Success Rate</span>
            </h3>
            <p className="text-muted-foreground">
              Real results from our comprehensive training program
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '95%', label: 'Course Completion' },
              { stat: '87%', label: 'Job Placement' },
              { stat: '156%', label: 'Avg Salary Increase' },
              { stat: '4.9★', label: 'Student Rating' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold gradient-text font-space-grotesk mb-2 group-hover:scale-110 transition-transform">
                  {item.stat}
                </div>
                <div className="text-muted-foreground text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducatorsSection;
