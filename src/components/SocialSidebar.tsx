import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from 'lucide-react';

const socialLinks = [
  { Icon: Facebook, color: '#1877F2', href: '#', name: 'Facebook' },
  { Icon: Twitter, color: '#1DA1F2', href: '#', name: 'Twitter' },
  { Icon: Instagram, color: '#E4405F', href: '#', name: 'Instagram' },
  { Icon: Linkedin, color: '#0A66C2', href: '#', name: 'LinkedIn' },
  { Icon: Youtube, color: '#FF0000', href: '#', name: 'YouTube' },
  { Icon: Github, color: '#333333', href: '#', name: 'GitHub' }
];

const SocialSidebar = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-9 h-9 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg  flex items-center  justify-center hover:scale-110 transition-all duration-300 shadow-md">
              <social.Icon className="w-5 h-5" style={{ color: social.color }} />
            </div>
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3  py-1 bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {social.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
