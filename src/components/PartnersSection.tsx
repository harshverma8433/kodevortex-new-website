import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const LogoMesh = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5} position={position}>
      <mesh>
        <boxGeometry args={[1, 0.6, 0.1]} />
        <meshStandardMaterial 
          color="#6366F1" 
          emissive="#6366F1" 
          emissiveIntensity={0.1}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
};

const PartnerLogo = ({ name, index }: { name: string, index: number }) => {
  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="glass-card p-6 h-24 flex items-center justify-center relative overflow-hidden glow-hover">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} />
            <LogoMesh position={[0, 0, 0]} />
          </Canvas>
        </div>


        
        {/* Logo Text */}
        <div className="relative z-10 text-center">
          <span className="font-bold text-lg gradient-text group-hover:scale-110 transition-transform">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

const PartnersSection = () => {
  const partners = [
    'Startup India',
    'Stand Up India',
    'Digital India',
    'Skill India',
    'NASSCOM',
    'TiE',
    'FICCI',
    'CII',
    'ASSOCHAM',
    'IEEE',
    'ACM',
    'ISO Certified'
  ];

  return (
    <section className="py-16 mt-14 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            In Association{' '}
            <span className="gradient-text">With</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations and backed by prestigious institutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <PartnerLogo
            
              key={partner}
              name={partner}
              index={index}
            />
          ))}
        </div>

        {/* Certification Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 glass-card p-6 rounded-xl">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">ISO 9001:2015 Certified</div>
              <div className="text-muted-foreground text-sm">Quality Management System</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border/30">
          {[
            { number: '50+', label: 'Industry Partners' },
            { number: '25+', label: 'Government Backing' },
            { number: '100+', label: 'Corporate Clients' },
            { number: '15+', label: 'Global Presence' }
          ].map((stat, index) => (
            <div key={index} className="text-center ">
              <div className="text-2xl md:text-3xl font-bold gradient-text  font-space-grotesk mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;