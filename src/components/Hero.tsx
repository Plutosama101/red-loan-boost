import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Users, Banknote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-background">
      {/* Main Hero */}
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            We are building access to credit for{" "}
            <span className="text-primary">everyday Nigerians.</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            LGCRED provides fast, affordable loans for local government employees, SME owners, and salaried individuals. Get approved in less than 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground py-6 px-8 rounded-full"
              onClick={() => navigate('/loans')}
            >
              Apply for a Loan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="py-6 px-8 rounded-full"
              onClick={() => navigate('/calculator')}
            >
              Calculate Repayment
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-muted/50 py-10">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-center text-sm text-muted-foreground mb-6">Trusted by thousands of Nigerians</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Stat 1 - White */}
            <div className="bg-card rounded-xl p-5 border">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                <Clock className="h-4 w-4" />
                <span>APPROVAL IN</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">&lt;24 hrs</p>
            </div>

            {/* Stat 2 - Red */}
            <div className="bg-primary rounded-xl p-5 text-primary-foreground">
              <p className="text-xs opacity-80 mb-2">INTEREST FROM</p>
              <p className="text-2xl md:text-3xl font-bold">5%<span className="text-sm font-normal">/month</span></p>
            </div>

            {/* Stat 3 - Red */}
            <div className="bg-primary rounded-xl p-5 text-primary-foreground">
              <div className="flex items-center gap-2 text-primary-foreground/80 text-xs mb-2">
                <Users className="h-4 w-4" />
                <span>HAPPY CUSTOMERS</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold">50+</p>
            </div>

            {/* Stat 4 - White */}
            <div className="bg-card rounded-xl p-5 border">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                <Banknote className="h-4 w-4" />
                <span>LOANS DISBURSED</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">₦50M+</p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Quick Disbursement</span>
            </div>
            <div className="flex items-center gap-2">
              <Banknote className="h-4 w-4 text-primary" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
