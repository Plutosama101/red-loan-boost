import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Shield, Users, Banknote, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-background py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4 fill-primary" />
              Trusted by 50,000+ Nigerians
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                Get Up To <span className="text-primary">₦12 Million</span> In Less Than 24 Hours
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Access loans with competitive rates, no hidden fees, and flexible repayment plans tailored to your needs.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Collateral Required (Depending on Amount)</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Less Than 24 Hours Approval</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">100% Secure</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-7 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => navigate('/loans')}
              >
                Apply for Loan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg py-7 px-8 rounded-xl border-2"
                onClick={() => navigate('/calculator')}
              >
                Calculate Loan
              </Button>
            </div>
          </div>

          {/* Right Column - Visual/Stats Card */}
          <div className="relative order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-10">
              {/* Main Stats Card */}
              <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 space-y-6 border">
                <div className="text-center space-y-2">
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">Available Credit Up To</p>
                  <p className="text-4xl md:text-5xl font-bold text-primary">₦12,000,000</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">&lt;24 hrs</p>
                    <p className="text-sm text-muted-foreground">Approval Time</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">5-7%</p>
                    <p className="text-sm text-muted-foreground">Interest Rate</p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-xl text-lg"
                  onClick={() => navigate('/loans')}
                >
                  Get Started Now
                </Button>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Low Rates!
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators - Stats Bar */}
        <div className="mt-16 md:mt-20 pt-12 border-t">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">50K+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <Banknote className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">₦2B+</p>
              <p className="text-sm text-muted-foreground">Loans Disbursed</p>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">&lt;24 hrs</p>
              <p className="text-sm text-muted-foreground">Avg. Approval Time</p>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">4.9★</p>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
