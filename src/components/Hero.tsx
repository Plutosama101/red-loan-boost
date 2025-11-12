import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Smartphone } from "lucide-react";
import logo from "@/assets/lgcred-logo.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-background to-loan-gray py-12 px-4">
      <div className="max-w-md mx-auto text-center space-y-8">
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground leading-tight">
              Fast Loans for
              <span className="text-primary block">Life's Moments</span>
            </h1>
            <p className="text-base text-muted-foreground">
              Get instant access to funds with our quick approval process. 
              No paperwork, no waiting - just fast, secure loans when you need them most.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Instant Approval</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">5-Minute Process</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Secure & Safe</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button 
              size="lg" 
              className="w-full bg-gradient-primary hover:bg-loan-primary-dark text-white shadow-loan text-lg py-4"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}
            >
              Get Loan Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full text-lg py-4"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}
            >
              Calculate Loan
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="text-center">
              <div className="text-xl font-bold text-primary">50K+</div>
              <div className="text-xs text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary">₦2B+</div>
              <div className="text-xs text-muted-foreground">Loans Disbursed</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary">4.9★</div>
              <div className="text-xs text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative flex justify-center pt-8">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-56 h-[460px] bg-loan-secondary rounded-[2.5rem] p-2 shadow-loan-card">
              <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-8 bg-loan-secondary flex items-center justify-between px-4 text-white text-xs">
                  <span>9:41</span>
                  <span>●●●</span>
                </div>
                
                {/* App Content */}
                <div className="p-4 space-y-4">
                  <div className="text-center space-y-2">
                    <img src={logo} alt="LGCRED" className="h-8 mx-auto" />
                  </div>

                  <Card className="p-3 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Available Credit</span>
                      <Smartphone className="h-3 w-3 text-primary" />
                    </div>
                    <div className="text-lg font-bold text-primary">₦500,000</div>
                    <Button 
                      className="w-full bg-gradient-primary text-white text-xs py-2"
                      onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}
                    >
                      Get Loan
                    </Button>
                  </Card>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-loan-gray rounded-lg">
                      <span className="text-xs">SME Loan</span>
                      <span className="text-xs text-primary">Available</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-loan-gray rounded-lg">
                      <span className="text-xs">PTA Loan</span>
                      <span className="text-xs text-primary">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;