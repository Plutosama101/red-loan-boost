import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-loan-secondary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">LoanFlow</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering financial freedom through fast, secure, and accessible lending solutions. 
              Your trusted partner for all loan needs.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#loans" className="text-gray-300 hover:text-white transition-colors text-sm">Personal Loans</a></li>
              <li><a href="#business" className="text-gray-300 hover:text-white transition-colors text-sm">Business Loans</a></li>
              <li><a href="#calculator" className="text-gray-300 hover:text-white transition-colors text-sm">Loan Calculator</a></li>
              <li><a href="#rates" className="text-gray-300 hover:text-white transition-colors text-sm">Interest Rates</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#security" className="text-gray-300 hover:text-white transition-colors text-sm">Security</a></li>
              <li><a href="#compliance" className="text-gray-300 hover:text-white transition-colors text-sm">Compliance</a></li>
              <li><a href="#disclosure" className="text-gray-300 hover:text-white transition-colors text-sm">Loan Disclosure</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">1-800-LOANFLOW</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">support@loanflow.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">123 Financial St, NYC 10001</span>
              </div>
            </div>
            <div className="pt-4">
              <Button className="bg-gradient-primary hover:bg-loan-primary-dark text-white shadow-loan">
                Get Support
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-300">
            © 2024 LoanFlow. All rights reserved. Licensed Lender NMLS #123456
          </p>
          <div className="flex items-center space-x-6 text-xs text-gray-400">
            <span>Equal Housing Lender</span>
            <span>FDIC Insured</span>
            <span>SSL Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;