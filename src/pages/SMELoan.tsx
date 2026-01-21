import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, Calendar, Percent, ChevronLeft, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SMELoan = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState([2000000]);
  const [term, setTerm] = useState([12]);
  const rate = 7; // 7% total interest rate for SME loans

  const totalInterest = amount[0] * (rate / 100);
  const totalAmount = amount[0] + totalInterest;
  const monthlyPayment = totalAmount / term[0];
  const managementFee = amount[0] * 0.02; // 2% management fee
  const creditScoreCharge = 5000; // ₦5,000 credit score charge
  const disbursementAmount = amount[0] - managementFee;

  const requirements = [
    {
      title: "Request Letter",
      description: "A formal letter stating your business name, loan request amount, and purpose of the loan"
    },
    {
      title: "Letter of Recommendation",
      description: "From your business partner or company owner, confirming your working relationship and commitment to help ensure on-time repayment"
    },
    {
      title: "Business Account",
      description: "Current business account with 1 year statement minimum and one post-dated cheque covering loan tenure with your signature and date"
    },
    {
      title: "CAC Certificate",
      description: "Original Corporate Affairs Commission (CAC) certificate for sighting and a photocopy to be submitted to LGCred"
    },
    {
      title: "Guarantor Requirements",
      description: "Business guarantor with good turnover, current account, post-dated cheque, resident address, email, phone number, and official ID"
    },
    {
      title: "Client Form & ID",
      description: "Your details including next of kin's name, resident address, email, phone number, 2 passport photographs, and copy of official ID"
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
              SME Loan Calculator
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Calculate your monthly payments for Small and Medium Enterprise loans
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Calculator */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-loan-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    <span>Calculate Your Business Loan</span>
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
                      max={12000000}
                      min={500000}
                      step={500000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₦500,000</span>
                      <span>₦12,000,000</span>
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
                      <Label className="text-base font-medium">Total Interest Rate</Label>
                      <div className="flex items-center space-x-1 text-primary font-bold">
                        <Percent className="h-4 w-4" />
                        <span>{rate}% Total Interest</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Competitive flat rate for SME business loans
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="shadow-loan-card">
                <CardHeader>
                  <CardTitle>SME Loan Requirements</CardTitle>
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
                      <p className="text-xs text-muted-foreground">Management Fee (2%)</p>
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
                      <p className="text-xs text-muted-foreground">Total Interest ({rate}%)</p>
                      <p className="text-sm font-bold text-foreground">
                        ₦{totalInterest.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-loan-gray rounded-lg">
                      <p className="text-xs text-muted-foreground">Loan Term</p>
                      <p className="text-sm font-bold text-foreground">
                        {term[0]} months
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-primary text-white rounded-lg p-4 space-y-3">
                    <h3 className="font-bold">Grow Your Business</h3>
                    <p className="text-sm opacity-90">
                      Get the capital you need to expand your business operations
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• Flexible repayment options</li>
                      <li>• ₦5,000 credit score charge</li>
                      <li>• Less than 24 hours approval</li>
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

export default SMELoan;
