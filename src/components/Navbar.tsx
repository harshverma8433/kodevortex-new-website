import { useState, useEffect } from 'react';
import { Search, User, Sun, Moon, Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/training-arena', label: 'Training Arena' },
    { path: '/openings', label: 'Openings' },
    { path: '/about', label: 'About' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-background/80 shadow-card' : 'bg-transparent'
      }`}
    >
      {/* Top Navbar */}
      <div className="glass border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Code2 className="h-8 w-8 text-primary vortex-spin" />
                <div
                  className="absolute inset-0 h-8 w-8 text-accent opacity-30 vortex-spin"
                  style={{ animationDelay: '0.5s' }}
                >
                  <Code2 className="h-8 w-8" />
                </div>
              </div>
              <span className="text-xl font-bold gradient-text">KodeVortex</span>
            </div>

            {/* Center Search */}
            <div className="hidden md:flex items-center space-x-6 flex-1 justify-center max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 bg-card/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <div onClick={() => navigate("/KodeBumps")} className="cta flex justify-center">
                <span className="span">KodeBumps</span>
                <span className="second">
                  <svg width="12px" height="12px" viewBox="0 0 66 43" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <path className="one" d="M40..." fill="#FFFFFF"></path>
                      <path className="two" d="M20..." fill="#FFFFFF"></path>
                      <path className="three" d="M0..." fill="#FFFFFF"></path>
                    </g>
                  </svg>
                </span>
              </div>

              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              <Button variant="ghost" size="sm" className="p-2">
                <User className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar (Desktop) */}
      <div className="border-b">
        <div className="mx-auto ">
          <div className="hidden md:flex items-center w-full justify-center space-x-8 py-3   ">
            {menuItems.map(({ path, label }) => (
              <div
                key={label}
                onClick={() => navigate(path)}
                className={`nav-link text-sm font-medium py-2 px-3 rounded-md transition-colors cursor-pointer ${
                  location.pathname === path ? 'bg-primary text-white' : ''
                }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 bg-card/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              {menuItems.map(({ path, label }) => (
                <div
                  key={label}
                  onClick={() => {
                    navigate(path);
                    setIsMenuOpen(false);
                  }}
                  className={`nav-link text-sm font-medium py-2 px-3 rounded-md transition-colors cursor-pointer ${
                    location.pathname === path ? 'bg-primary text-white' : ''
                  }`}
                >
                  {label}
                </div>
              ))}

              <Button variant="outline" size="sm" className="w-full mt-4">
                KodeBumps
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
