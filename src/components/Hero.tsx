import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-background to-loan-gray py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Fast Loans for
                <span className="text-primary block">Life's Moments</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Get instant access to funds with our quick approval process. 
                No paperwork, no waiting - just fast, secure loans when you need them most.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Instant Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">5-Minute Process</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Secure & Safe</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-loan-primary-dark text-white shadow-loan text-lg px-8 py-6"
              >
                Get Loan Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6"
              >
                Calculate Loan
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₦2B+</div>
                <div className="text-sm text-muted-foreground">Loans Disbursed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 h-[520px] bg-loan-secondary rounded-[3rem] p-2 shadow-loan-card">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-8 bg-loan-secondary flex items-center justify-between px-6 text-white text-xs">
                    <span>9:41</span>
                    <span>●●●</span>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 space-y-6">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center">
                        <span className="text-white font-bold text-sm">LG</span>
                      </div>
                      <h3 className="font-bold text-foreground">LGCRED</h3>
                    </div>

                    <Card className="p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Available Credit</span>
                        <Smartphone className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary">₦500,000</div>
                      <Button className="w-full bg-gradient-primary text-white">
                        Get Loan
                      </Button>
                    </Card>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-loan-gray rounded-lg">
                        <span className="text-sm">Quick Loan</span>
                        <span className="text-sm text-primary">Available</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-loan-gray rounded-lg">
                        <span className="text-sm">Business Loan</span>
                        <span className="text-sm text-primary">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;