import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Calendar, Percent, ChevronLeft, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LocalGovernmentLoan = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState([500000]);
  const [term, setTerm] = useState([12]);
  const rate = 15; // Fixed rate for LG loans

  const monthlyPayment = (amount[0] * (rate / 100 / 12)) / (1 - Math.pow(1 + (rate / 100 / 12), -term[0]));
  const totalAmount = monthlyPayment * term[0];
  const totalInterest = totalAmount - amount[0];
  const managementFee = amount[0] * 0.01;
  const disbursementAmount = amount[0] - managementFee;

  const requirements = [
    {
      title: "Letter of Introduction",
      description: "Letter of recommendation from your local government chairman where you work"
    },
    {
      title: "Salary Account",
      description: "Current account (salary account type) with 6 months statement and one post-dated cheque covering loan tenure"
    },
    {
      title: "Guarantor Form",
      description: "Guarantor from the same place of work with home address, phone number, email address and official ID"
    },
    {
      title: "Client Form & ID",
      description: "Your details including next of kin's name, resident address, email, phone number, 2 passport photographs, and official ID"
    },
    {
      title: "Loan Agreement",
      description: "Signed after reviewing and understanding all loan terms and conditions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/loans")}
            className="mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Loan Selection
          </Button>

          <div className="text-center space-y-3 mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground">
              Local Government Loan Calculator
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Calculate your monthly payments for Local Government employee loans
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Calculator */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-loan-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    <span>Calculate Your Loan</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Loan Amount */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-medium">Loan Amount</Label>
                      <div className="flex items-center space-x-1 text-primary font-bold">
                        <span>₦</span>
                        <span>{amount[0].toLocaleString()}</span>
                      </div>
                    </div>
                    <Slider
                      value={amount}
                      onValueChange={setAmount}
                      max={5000000}
                      min={100000}
                      step={50000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₦100,000</span>
                      <span>₦5,000,000</span>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-medium">Loan Term</Label>
                      <div className="flex items-center space-x-1 text-primary font-bold">
                        <Calendar className="h-4 w-4" />
                        <span>{term[0]} months</span>
                      </div>
                    </div>
                    <Slider
                      value={term}
                      onValueChange={setTerm}
                      max={12}
                      min={3}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>3 months</span>
                      <span>12 months</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-base font-medium">Interest Rate</Label>
                      <div className="flex items-center space-x-1 text-primary font-bold">
                        <Percent className="h-4 w-4" />
                        <span>{rate}% APR</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Competitive rate for local government employees
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="shadow-loan-card">
                <CardHeader>
                  <CardTitle>Loan Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {requirements.map((req, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>{req.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {req.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="lg:col-span-1">
              <Card className="shadow-loan-card sticky top-24">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2 mb-6">
                    <p className="text-sm text-muted-foreground">Monthly Payment</p>
                    <p className="text-3xl font-bold text-primary">
                      ₦{monthlyPayment.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-3 bg-loan-gray rounded-lg">
                      <p className="text-xs text-muted-foreground">Loan Amount</p>
                      <p className="text-sm font-bold text-foreground">
                        ₦{amount[0].toLocaleString()}
                      </p>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-loan-gray rounded-lg">
                      <p className="text-xs text-muted-foreground">Management Fee (1%)</p>
                      <p className="text-sm font-bold text-foreground">
                        ₦{managementFee.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-loan-gray rounded-lg">
                      <p className="text-xs text-muted-foreground">You'll Receive</p>
                      <p className="text-sm font-bold text-primary">
                        ₦{disbursementAmount.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-loan-gray rounded-lg">
                      <p className="text-xs text-muted-foreground">Total Repayment</p>
                      <p className="text-sm font-bold text-foreground">
                        ₦{totalAmount.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-loan-gray rounded-lg">
                      <p className="text-xs text-muted-foreground">Total Interest</p>
                      <p className="text-sm font-bold text-foreground">
                        ₦{totalInterest.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-primary text-white rounded-lg p-4 space-y-3">
                    <h3 className="font-bold">Ready to Apply?</h3>
                    <p className="text-sm opacity-90">
                      Get instant approval and funds in your account within 24 hours
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• Direct debit repayment</li>
                      <li>• 1% Remita charge per debit</li>
                      <li>• Fast approval process</li>
                    </ul>
                    <Button 
                      variant="secondary" 
                      className="w-full"
                      onClick={() => navigate('/apply')}
                    >
                      Download Application Form
                    </Button>
                  </div>
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

export default LocalGovernmentLoan;
