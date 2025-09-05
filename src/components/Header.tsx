import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold" style={{ color: 'hsl(var(--navy-primary))' }}>
              CapitalNavigator
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('insights')} className="nav-link">
              Insights
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('consultation')}
              className="btn-primary"
            >
              Schedule Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="nav-link text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="nav-link text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('insights')} className="nav-link text-left">
                Insights
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="nav-link text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-left">
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('consultation')}
                className="btn-primary w-full mt-4"
              >
                Schedule Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;