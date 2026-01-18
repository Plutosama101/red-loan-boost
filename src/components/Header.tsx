import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Building2, Briefcase, User, FileCheck, Calculator, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/lgcred-logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Track scroll for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const loanProducts = [
    { label: "Local Government Loans", path: "/local-government-loan", icon: Building2, description: "For LGA employees" },
    { label: "SME Loans", path: "/sme-loan", icon: Briefcase, description: "Business financing" },
    { label: "Individual Loans", path: "/individual-loan", icon: User, description: "Personal loans" },
    { label: "Proof of Funds", path: "/proof-of-funds-loan", icon: FileCheck, description: "Travel documentation" },
  ];

  return (
    <header className={`bg-header border-b border-header-border sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="LGCRED Nigeria Limited" className="h-10 lg:h-12" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-header-foreground hover:text-header-accent transition-colors px-4 py-2 rounded-lg hover:bg-white/5">
                  <span className="text-sm font-medium">Products</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-2">
                {loanProducts.map((product) => (
                  <DropdownMenuItem 
                    key={product.path} 
                    onClick={() => navigate(product.path)}
                    className="flex items-start gap-3 p-3 cursor-pointer rounded-lg"
                  >
                    <product.icon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{product.label}</div>
                      <div className="text-xs text-muted-foreground">{product.description}</div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Calculator */}
            <button
              onClick={() => scrollToSection('calculator')}
              className="flex items-center gap-2 text-header-foreground hover:text-header-accent transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <Calculator className="h-4 w-4" />
              <span className="text-sm font-medium">Calculator</span>
            </button>

            {/* About */}
            <button
              onClick={() => navigate('/about')}
              className="text-header-foreground hover:text-header-accent transition-colors px-4 py-2 rounded-lg hover:bg-white/5 text-sm font-medium"
            >
              About Us
            </button>

            {/* Contact */}
            <button
              onClick={() => scrollToSection('footer')}
              className="flex items-center gap-2 text-header-foreground hover:text-header-accent transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Contact</span>
            </button>

            {/* Apply Now Button */}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-6 ml-4 rounded-lg"
              onClick={() => navigate('/apply')}
            >
              Apply Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="p-2 lg:hidden text-header-foreground relative z-50 transition-transform duration-300"
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
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
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
        <nav className="relative h-full flex flex-col items-center justify-center overflow-y-auto py-20">
          <div className="flex flex-col items-center space-y-4 w-full px-8">
            {/* Loan Products Section */}
            <div className="w-full max-w-sm">
              <p className="text-header-foreground/50 text-xs uppercase tracking-wider mb-3 text-center">Loan Products</p>
              <div className="space-y-2">
                {loanProducts.map((product, index) => (
                  <div
                    key={product.path}
                    className={`overflow-hidden ${isMenuOpen ? 'animate-slide-up' : ''}`}
                    style={{ 
                      animationDelay: isMenuOpen ? `${index * 80 + 100}ms` : '0ms',
                      opacity: isMenuOpen ? undefined : 0
                    }}
                  >
                    <button
                      onClick={() => { navigate(product.path); setIsMenuOpen(false); }}
                      className="flex items-center gap-3 w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <product.icon className="h-5 w-5 text-header-accent" />
                      <div className="text-left">
                        <span className="text-header-foreground font-medium block">{product.label}</span>
                        <span className="text-header-foreground/50 text-xs">{product.description}</span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full max-w-sm h-px bg-header-foreground/10 my-4" />

            {/* Other Links */}
            <div className="flex flex-col items-center space-y-3">
              {[
                { label: "Calculator", action: () => scrollToSection('calculator') },
                { label: "About Us", action: () => navigate('/about') },
                { label: "Contact", action: () => scrollToSection('footer') },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`overflow-hidden text-center ${isMenuOpen ? 'animate-slide-up' : ''}`}
                  style={{ 
                    animationDelay: isMenuOpen ? `${(index + 4) * 80 + 100}ms` : '0ms',
                    opacity: isMenuOpen ? undefined : 0
                  }}
                >
                  <button
                    onClick={() => { item.action(); setIsMenuOpen(false); }}
                    className="group text-header-foreground hover:text-header-accent transition-all duration-300"
                  >
                    <span className="text-2xl font-bold tracking-wide relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-header-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                  </button>
                </div>
              ))}
            </div>
            
            {/* Buttons Container */}
            <div
              className={`pt-6 flex flex-col items-center gap-4 overflow-hidden ${isMenuOpen ? 'animate-slide-up' : ''}`}
              style={{ 
                animationDelay: isMenuOpen ? '700ms' : '0ms',
                opacity: isMenuOpen ? undefined : 0
              }}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                onClick={() => { navigate('/apply'); setIsMenuOpen(false); }}
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="border-header-foreground/30 text-header-foreground hover:bg-header-foreground/10 text-sm px-8 py-5 rounded-xl"
                onClick={() => { 
                  window.open('https://wa.me/2348130222496', '_blank');
                  setIsMenuOpen(false); 
                }}
              >
                Get Support via WhatsApp
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
                style={{ transitionDelay: `${800 + i * 100}ms` }}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
