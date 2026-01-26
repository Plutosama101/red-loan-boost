import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Calculator, FileText, CheckCircle } from "lucide-react";

const ProofOfFundsLoan = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState([5000000]);
  const [term, setTerm] = useState([1]);
  const serviceFeeRate = 3; // 3% service fee

  const serviceFee = amount[0] * (serviceFeeRate / 100);
  const totalCost = serviceFee;

  const requirements = [
    {
      title: "Valid International Passport",
      description: "Original passport with at least 6 months validity"
    },
    {
      title: "Travel Itinerary or Visa Application",
      description: "Evidence of travel plans or visa application documents"
    },
    {
      title: "Bank Account Details",
      description: "Active bank account where the proof of funds will be displayed"
    },
    {
      title: "Invitation Letter (if applicable)",
      description: "For business or family visits requiring proof of funds"
    },
    {
      title: "Purpose Statement",
      description: "Brief explanation of why proof of funds is needed"
    },
    {
      title: "Service Fee Payment",
      description: "Upfront payment of service fee before processing"
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
                      <CardTitle className="text-2xl">Proof of Funds Calculator</CardTitle>
                      <p className="text-muted-foreground">Calculate your proof of funds service cost</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Amount Required */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-foreground">Amount to Display</label>
                      <span className="text-2xl font-bold text-primary">₦{amount[0].toLocaleString()}</span>
                    </div>
                    <Slider
                      value={amount}
                      onValueChange={setAmount}
                      min={1000000}
                      max={50000000}
                      step={500000}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>₦1,000,000</span>
                      <span>₦50,000,000</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-foreground">Display Duration</label>
                      <span className="text-2xl font-bold text-primary">{term[0]} week{term[0] > 1 ? 's' : ''}</span>
                    </div>
                    <Slider
                      value={term}
                      onValueChange={setTerm}
                      min={1}
                      max={4}
                      step={1}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 week</span>
                      <span>4 weeks</span>
                    </div>
                  </div>

                  {/* Service Fee Rate */}
                  <div className="p-4 bg-loan-gray rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Service Fee Rate</span>
                      <span className="text-xl font-bold text-primary">{serviceFeeRate}%</span>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm text-foreground">
                      <strong>How it works:</strong> We temporarily display the requested amount in your bank account 
                      for the specified duration. This service is ideal for visa applications, business verification, 
                      or any situation requiring proof of financial capability.
                    </p>
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
                    <CardTitle>Service Requirements</CardTitle>
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
                  <CardTitle className="text-center">Service Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Display Amount</span>
                      <span className="font-bold text-foreground">₦{amount[0].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-bold text-foreground">{term[0]} week{term[0] > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Service Fee ({serviceFeeRate}%)</span>
                      <span className="font-bold text-primary text-xl">₦{Math.round(serviceFee).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">Total Cost</span>
                      <span className="font-bold text-foreground">₦{Math.round(totalCost).toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-primary hover:bg-loan-primary-dark text-white py-6 text-lg"
                    onClick={() => navigate('/apply')}
                  >
                    Download Application Form
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By applying, you agree to our terms and conditions
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

export default ProofOfFundsLoan;
