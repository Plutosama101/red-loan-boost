import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, ChevronRight } from "lucide-react";

const LoanSelection = () => {
  const navigate = useNavigate();

  const loanTypes = [
    {
      id: "local-government",
      title: "Local Government Loan",
      description: "For local government employees with stable income",
      icon: Building2,
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
      features: [
        "Business account required",
        "CAC certificate needed",
        "Guarantor from business partner",
        "Flexible repayment terms",
        "Business account statement (1 year minimum)"
      ],
      path: "/loans/sme"
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
                <Card key={loan.id} className="shadow-loan-card hover:shadow-loan transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{loan.title}</CardTitle>
                    </div>
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
