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
      navigate(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="LGCRED Nigeria Limited" className="h-10" />
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Loans
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Calculator
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('footer')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              variant="outline"
              onClick={() => alert('Login feature coming soon! Please connect Supabase for user accounts.')}
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-primary hover:bg-loan-primary-dark text-white shadow-loan"
              onClick={() => scrollToSection('calculator')}
            >
              Apply Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t bg-background md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                Loans
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                Calculator
              </button>
              <button 
                onClick={() => { navigate('/about'); setIsMenuOpen(false); }}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('footer')}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => { alert('Login feature coming soon! Please connect Supabase for user accounts.'); setIsMenuOpen(false); }}
                >
                  Login
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:bg-loan-primary-dark text-white shadow-loan"
                  onClick={() => scrollToSection('calculator')}
                >
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;