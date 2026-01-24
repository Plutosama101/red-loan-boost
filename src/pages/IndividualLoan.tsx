import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Calculator, FileText, CheckCircle } from "lucide-react";

const IndividualLoan = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState([500000]);
  const [term, setTerm] = useState([6]);
  const rate = 10; // 10% interest rate

  const totalInterest = amount[0] * (rate / 100);
  const totalAmount = amount[0] + totalInterest;
  const monthlyPayment = totalAmount / term[0];
  const managementFee = amount[0] * 0.02; // 2% management fee
  const disbursementAmount = amount[0] - managementFee;

  const requirements = [
    {
      title: "Valid Identification",
      description: "National ID card, International Passport, Driver's License, or Voter's Card"
    },
    {
      title: "Proof of Employment",
      description: "Employment letter, recent pay slips (3 months), or business registration documents"
    },
    {
      title: "Bank Statement",
      description: "6 months bank statement showing salary credits or business transactions"
    },
    {
      title: "Utility Bill",
      description: "Recent utility bill (electricity, water, or waste) for address verification"
    },
    {
      title: "Guarantor",
      description: "One guarantor with valid ID and proof of income/employment"
    },
    {
      title: "Passport Photographs",
      description: "Two recent passport photographs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate('/loans')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Loan Types
          </Button>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Calculator Section */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-loan-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calculator className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Individual Loan Calculator</CardTitle>
                      <p className="text-muted-foreground">Calculate your personal loan repayment</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Loan Amount */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-foreground">Loan Amount</label>
                      <span className="text-2xl font-bold text-primary">₦{amount[0].toLocaleString()}</span>
                    </div>
                    <Slider
                      value={amount}
                      onValueChange={setAmount}
                      min={100000}
                      max={5000000}
                      step={50000}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>₦100,000</span>
                      <span>₦5,000,000</span>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-foreground">Loan Term</label>
                      <span className="text-2xl font-bold text-primary">{term[0]} months</span>
                    </div>
                    <Slider
                      value={term}
                      onValueChange={setTerm}
                      min={3}
                      max={12}
                      step={1}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>3 months</span>
                      <span>12 months</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="p-4 bg-loan-gray rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Interest Rate</span>
                      <span className="text-xl font-bold text-primary">{rate}% Total</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="shadow-loan-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Loan Requirements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {requirements.map((req, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{req.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pl-7">
                          {req.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Summary Section */}
            <div className="lg:col-span-1">
              <Card className="shadow-loan-card sticky top-24">
                <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                  <CardTitle className="text-center">Loan Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Principal Amount</span>
                      <span className="font-bold text-foreground">₦{amount[0].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Management Fee (2%)</span>
                      <span className="font-bold text-foreground">₦{Math.round(managementFee).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">You'll Receive</span>
                      <span className="font-bold text-primary">₦{Math.round(disbursementAmount).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Monthly Payment</span>
                      <span className="font-bold text-primary text-xl">₦{Math.round(monthlyPayment).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Total Repayment</span>
                      <span className="font-bold text-foreground">₦{Math.round(totalAmount).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">Total Interest ({rate}%)</span>
                      <span className="font-bold text-foreground">₦{Math.round(totalInterest).toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-primary hover:bg-loan-primary-dark text-white py-6 text-lg"
                    onClick={() => navigate('/apply')}
                  >
                    Download Application Form
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    ₦5,000 credit score charge applies. Approval in less than 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndividualLoan;
