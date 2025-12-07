import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/lgcred-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
    { number: "01", label: "Loans", action: () => navigate('/loans') },
    { number: "02", label: "Calculator", action: () => scrollToSection('calculator') },
    { number: "03", label: "About", action: () => navigate('/about') },
    { number: "04", label: "Contact", action: () => scrollToSection('footer') },
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
                key={item.number}
                onClick={item.action}
                className="text-header-foreground hover:text-header-accent transition-colors font-mono text-sm tracking-wide group"
              >
                <span className="text-header-accent">{item.number}.</span>{" "}
                <span className="group-hover:text-header-accent">{item.label}</span>
              </button>
            ))}
            <Button
              variant="outline"
              className="border-header-accent text-header-accent hover:bg-header-accent hover:text-header font-mono text-sm px-5"
              onClick={() => navigate('/apply')}
            >
              Apply Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden text-header-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-header-border bg-header md:hidden animate-fade-in">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.number}
                  onClick={() => { item.action(); setIsMenuOpen(false); }}
                  className="text-header-foreground hover:text-header-accent transition-colors font-mono text-sm text-left py-2"
                >
                  <span className="text-header-accent">{item.number}.</span>{" "}
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                className="border-header-accent text-header-accent hover:bg-header-accent hover:text-header font-mono text-sm w-full mt-2"
                onClick={() => { navigate('/apply'); setIsMenuOpen(false); }}
              >
                Apply Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;