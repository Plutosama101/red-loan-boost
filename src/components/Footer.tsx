import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-loan-secondary text-white">
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Company Info */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">LG</span>
              </div>
              <span className="text-xl font-bold">LGCRED</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering financial freedom through fast, secure, and accessible lending solutions. 
              Your trusted partner for all loan needs.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => window.open('https://facebook.com/lgcred', '_blank')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => window.open('https://twitter.com/lgcred', '_blank')}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => window.open('https://linkedin.com/company/lgcred', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => window.open('https://instagram.com/lgcred', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-center">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3 text-center">
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})} 
                className="text-gray-300 hover:text-white transition-colors text-sm py-2"
              >
                Personal Loans
              </button>
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})} 
                className="text-gray-300 hover:text-white transition-colors text-sm py-2"
              >
                Business Loans
              </button>
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})} 
                className="text-gray-300 hover:text-white transition-colors text-sm py-2"
              >
                Loan Calculator
              </button>
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})} 
                className="text-gray-300 hover:text-white transition-colors text-sm py-2"
              >
                Interest Rates
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-center">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">0800-LGCRED-1</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">support@lgcred.ng</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
            <div className="text-center">
              <Button 
                className="bg-gradient-primary hover:bg-loan-primary-dark text-white shadow-loan"
                onClick={() => alert('Customer Support: Call 0800-LGCRED-1 or email support@lgcred.ng. Live chat coming soon after Supabase integration!')}
              >
                Get Support
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center space-y-3">
          <p className="text-xs text-gray-300">
            © 2024 LGCRED. All rights reserved.
          </p>
          <p className="text-xs text-gray-300">
            Licensed by CBN RC #123456
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <span>SSL Secured</span>
            <span>FDIC Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;