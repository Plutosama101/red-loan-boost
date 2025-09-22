import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-background border-2 border-border rounded-md flex items-center justify-center">
            <span className="font-bold text-lg">
              <span className="text-foreground">L</span>
              <span className="text-destructive">G</span>
            </span>
          </div>
            <span className="text-xl font-bold text-foreground">LGCRED</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t bg-background">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#loans" className="text-foreground hover:text-primary transition-colors py-2">
                Loans
              </a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors py-2">
                Calculator
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                About Us
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Button variant="outline" size="lg">Login</Button>
                <Button size="lg" className="bg-gradient-primary hover:bg-loan-primary-dark text-white shadow-loan">
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