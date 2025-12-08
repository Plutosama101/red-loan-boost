import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/lgcred-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Loans", action: () => navigate('/loans') },
    { label: "Calculator", action: () => scrollToSection('calculator') },
    { label: "About", action: () => navigate('/about') },
    { label: "Contact", action: () => scrollToSection('footer') },
  ];

  return (
    <header className="bg-header border-b border-header-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="LGCRED Nigeria Limited" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-header-foreground hover:text-header-accent transition-colors font-mono text-sm tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-sm px-5"
              onClick={() => navigate('/apply')}
            >
              Apply Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden text-header-foreground relative z-50 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-header-accent" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop with blur */}
        <div 
          className="absolute inset-0 bg-[hsl(var(--menu-overlay)/0.98)] backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <nav className="relative h-full flex flex-col items-center justify-center">
          <div className="space-y-8">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className={`overflow-hidden ${isMenuOpen ? 'animate-slide-up' : ''}`}
                style={{ 
                  animationDelay: isMenuOpen ? `${index * 100 + 100}ms` : '0ms',
                  opacity: isMenuOpen ? undefined : 0
                }}
              >
                <button
                  onClick={() => { item.action(); setIsMenuOpen(false); }}
                  className="group text-header-foreground hover:text-header-accent transition-all duration-300"
                >
                  <span className="text-3xl font-bold tracking-wide relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-header-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              </div>
            ))}
            
            {/* Apply Now Button */}
            <div
              className={`pt-6 overflow-hidden ${isMenuOpen ? 'animate-slide-up' : ''}`}
              style={{ 
                animationDelay: isMenuOpen ? '500ms' : '0ms',
                opacity: isMenuOpen ? undefined : 0
              }}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-lg px-10 py-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                onClick={() => { navigate('/apply'); setIsMenuOpen(false); }}
              >
                Apply Now
              </Button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-header-accent transition-all duration-500 ${
                  isMenuOpen ? 'opacity-60 scale-100' : 'opacity-0 scale-0'
                }`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
