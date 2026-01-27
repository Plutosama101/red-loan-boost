import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock, TrendingUp, Users, Banknote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <svg className="absolute top-1/4 right-0 w-1/3 h-auto opacity-10" viewBox="0 0 200 200">
          <path d="M 0 100 Q 50 50 100 100 T 200 100" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
          <path d="M 0 120 Q 50 70 100 120 T 200 120" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <Zap className="h-4 w-4" />
            Fast, Simple & Reliable Loans
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Access Quick Loans
            <span className="block text-primary">Up to ₦12 Million</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            LGCRED helps Nigerians access affordable financing for personal needs, business growth, and more. Get approved in less than 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-7 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => navigate('/loans')}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg py-7 px-10 rounded-full border-2"
              onClick={() => navigate('/calculator')}
            >
              Calculate Loan
            </Button>
          </div>
        </div>

        {/* Stats Grid - Fun Colorful Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Card 1 - Approval Time */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 md:p-6 text-white overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8" />
            <Clock className="h-6 w-6 mb-3 text-white/80" />
            <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Approval In</p>
            <p className="text-2xl md:text-3xl font-bold">&lt;24 hrs</p>
            <div className="absolute bottom-2 right-2">
              <svg className="w-12 h-8 opacity-20" viewBox="0 0 50 30">
                <path d="M 0 25 Q 15 10 25 15 T 50 5" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          {/* Card 2 - Interest Rate */}
          <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 md:p-6 text-primary-foreground overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8" />
            <TrendingUp className="h-6 w-6 mb-3 text-white/80" />
            <p className="text-xs uppercase tracking-wider text-white/70 mb-1">Interest From</p>
            <p className="text-2xl md:text-3xl font-bold">5%<span className="text-lg font-normal">/month</span></p>
            <div className="absolute bottom-2 right-2">
              <svg className="w-12 h-8 opacity-20" viewBox="0 0 50 30">
                <path d="M 0 20 L 15 15 L 30 20 L 50 5" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          {/* Card 3 - Happy Customers */}
          <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5 md:p-6 text-white overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8" />
            <Users className="h-6 w-6 mb-3 text-white/80" />
            <p className="text-xs uppercase tracking-wider text-white/70 mb-1">Trusted By</p>
            <p className="text-2xl md:text-3xl font-bold">50K+</p>
            <p className="text-xs text-white/60">Nigerians</p>
            <div className="absolute bottom-2 right-2">
              <svg className="w-12 h-8 opacity-20" viewBox="0 0 50 30">
                <circle cx="10" cy="20" r="6" fill="white" />
                <circle cx="25" cy="15" r="6" fill="white" />
                <circle cx="40" cy="10" r="6" fill="white" />
              </svg>
            </div>
          </div>

          {/* Card 4 - Loans Disbursed */}
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 md:p-6 text-white overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8" />
            <Banknote className="h-6 w-6 mb-3 text-white/80" />
            <p className="text-xs uppercase tracking-wider text-white/70 mb-1">Disbursed</p>
            <p className="text-2xl md:text-3xl font-bold">₦2B+</p>
            <p className="text-xs text-white/60">In Loans</p>
            <div className="absolute bottom-2 right-2">
              <svg className="w-12 h-8 opacity-20" viewBox="0 0 50 30">
                <rect x="5" y="20" width="8" height="10" fill="white" />
                <rect x="18" y="12" width="8" height="18" fill="white" />
                <rect x="31" y="5" width="8" height="25" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span>100% Secure & Confidential</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span>No Hidden Charges</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Quick Disbursement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
