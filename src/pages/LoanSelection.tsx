import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, User, FileCheck, ChevronRight } from "lucide-react";
import localGovImage from "@/assets/local-government-loan.jpg";
import smeImage from "@/assets/sme-loan.jpg";

const LoanSelection = () => {
  const navigate = useNavigate();

  const loanTypes = [
    {
      id: "local-government",
      title: "Local Government Loan",
      description: "For local government employees with stable income",
      icon: Building2,
      image: localGovImage,
      features: [
        "Letter from LG Chairman required",
        "Salary account verification",
        "Competitive interest rates",
        "Flexible repayment terms (3-12 months)",
        "Post-dated cheque required"
      ],
      path: "/loans/local-government"
    },
    {
      id: "sme",
      title: "SME Loan",
      description: "For small and medium enterprises seeking business growth",
      icon: Briefcase,
      image: smeImage,
      features: [
        "Business account required",
        "CAC certificate needed",
        "Guarantor from business partner",
        "Flexible repayment terms",
        "Business account statement (1 year minimum)"
      ],
      path: "/loans/sme"
    },
    {
      id: "individual",
      title: "Individual Loan",
      description: "Personal loans for salaried employees and individuals",
      icon: User,
      image: localGovImage,
      features: [
        "Valid means of identification",
        "Proof of employment or income",
        "Bank statement (6 months)",
        "Utility bill for address verification",
        "Guarantor required"
      ],
      path: "/loans/individual"
    },
    {
      id: "proof-of-funds",
      title: "Proof of Funds",
      description: "Financial documentation for visa, travel, or business purposes",
      icon: FileCheck,
      image: smeImage,
      features: [
        "Valid international passport",
        "Travel itinerary or invitation letter",
        "Bank account details",
        "Quick processing time",
        "Official bank letter provided"
      ],
      path: "/loans/proof-of-funds"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Choose Your Loan Type
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the loan product that best fits your needs. Each loan type has specific requirements and benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {loanTypes.map((loan) => {
              const Icon = loan.icon;
              return (
                <Card key={loan.id} className="shadow-loan-card hover:shadow-loan transition-all overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={loan.image} 
                      alt={loan.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-3">
                      <div className="p-3 bg-primary/90 backdrop-blur-sm rounded-lg">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl text-foreground">{loan.title}</CardTitle>
                    </div>
                  </div>
                  <CardHeader className="pt-4">
                    <CardDescription className="text-base">
                      {loan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-foreground">Key Requirements:</h3>
                      <ul className="space-y-2">
                        {loan.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-gradient-primary hover:bg-loan-primary-dark text-white"
                      onClick={() => navigate(loan.path)}
                    >
                      Calculate & Apply
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoanSelection;
